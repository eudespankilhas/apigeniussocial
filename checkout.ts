import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {});

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.statusCode = 405;
      return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }

    const host = req.headers.host ?? 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const origin = `${protocol}://${host}`;

    const raw = await new Promise<string>((resolve) => {
      let data = '';
      req.on('data', (chunk: Buffer) => (data += chunk.toString('utf8')));
      req.on('end', () => resolve(data));
    });
    const body = raw ? JSON.parse(raw) : {};
    const priceId = String(body.priceId ?? '');
    const amount = Number(body.amount ?? 5000);
    const currency = String(body.currency ?? 'usd');

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
      line_items: priceId
        ? [{ price: priceId, quantity: 1 }]
        : [{ price_data: { currency, product_data: { name: 'Pagamento' }, unit_amount: amount }, quantity: 1 }]
    });

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ id: session.id, url: session.url }));
  } catch (err: any) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: err?.message ?? 'Unknown error' }));
  }
}