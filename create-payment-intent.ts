import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // apiVersion opcional, pode omitir para usar a padrão do SDK
});

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.statusCode = 405;
      return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }

    const raw = await new Promise<string>((resolve) => {
      let data = '';
      req.on('data', (chunk: Buffer) => (data += chunk.toString('utf8')));
      req.on('end', () => resolve(data));
    });
    const body = raw ? JSON.parse(raw) : {};
    const amount = Number(body.amount ?? 5000); // 50.00 BRL/USD em centavos, ajuste conforme moeda
    const currency = String(body.currency ?? 'usd');

    const intent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true }
    });

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ clientSecret: intent.client_secret }));
  } catch (err: any) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: err?.message ?? 'Unknown error' }));
  }
}