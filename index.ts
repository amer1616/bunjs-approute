export const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./pages",
  origin: "http://localhost:3000",
  assetPrefix: "_next/static/",
});

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on localhost: ${server.port}`);
