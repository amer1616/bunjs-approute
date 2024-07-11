import { router } from "./lib/router";
// import { handle_tsx } from "./middleware/handle_tsx";

import { renderToString } from "react-dom/server";


const appServer = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const match = router.match(req);
    if (match) {
      const App = require(match.filePath).default;
      const html = renderToString(<App/>);
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Listening on localhost: ${appServer.port}`);

export default appServer;
