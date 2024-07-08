import { router } from "./lib/router";
import { handle_tsx } from "./middleware/handle_tsx";


const server = Bun.serve({
  port:  process.env.PORT || 3000,
  development: true,
  async fetch(req: Request, server) {
    const url = new URL(req.url);
    const route = router.match(url.pathname);
    if (route) {
      return handle_tsx(route, req, server);
    }
    return new Response("File not found", { status: 404 });
  },
});



console.log(`Listening on localhost: ${server.port}`);

export default server;
