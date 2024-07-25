import { router } from "./lib/router";
// import { handle_tsx } from "./middleware/handle_tsx

import { renderToReadableStream } from "react-dom/server";


const appServer = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const match = router.match(req);
    
    if (match) {
        // Dynamically import the component based on the matched route
     const { default: App } = await import(match.filePath);
     
     const stream = await renderToReadableStream(
       <App {...match.params} />
     );
     
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    }
    // handle 404 errors or other cases
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Listening on localhost: ${appServer.port}`);

export default appServer;
