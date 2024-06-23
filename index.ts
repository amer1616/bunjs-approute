import { router } from "./lib/router";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(request) {
    let match = router.match(request);
    let page = require(match!.filePath);
    return new page(request, match?.query, match?.params);
  },
});

console.log(`Listening on localhost: ${server.port}`);

export default server;
