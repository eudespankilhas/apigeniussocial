export default async function handler(req: any, res: any) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).end(JSON.stringify({ ok: true, message: 'API up' }));
}