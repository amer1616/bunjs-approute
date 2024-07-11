export const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./pages/",
  origin: "http://localhost:3000",
});
