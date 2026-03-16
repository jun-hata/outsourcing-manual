export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;

  if (hostname.endsWith('.pages.dev')) {
    return new Response('Access denied. Please use the official URL.', {
      status: 403,
    });
  }

  return next();
}