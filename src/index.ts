/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

const handleRequest = async (request: Request): Promise<Response> => {
  return new Response("Hello, worker!", {
    headers: { "content-type": "text/plain" },
  });
};

export {};
