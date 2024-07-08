import type { MatchedRoute, Server } from "bun";
import { createElement } from "react";
import { renderToReadableStream } from "react-dom/server";
import RootLayout from "../pages/_layout";

export const handle_tsx = async (
  route: MatchedRoute,
  req: Request,
  server: Server
) => {
  const path = route.filePath;
  const Page = require(path).default;
  const content = createElement(Page);
  const pageWithLayout = createElement(RootLayout, null, content);
  const stream = await renderToReadableStream(pageWithLayout);

  return new Response(stream, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
};
