// import type { JsxElement } from "typescript";


 function RootLayout({children}: {children: React.ReactNode}){
 return ( 
  
  <html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>title</title>
  </head>
  <body>
    <header><h1>my header</h1> </header>
    <main>{children}</main>
    <footer><p>my bun footer</p></footer>
  </body>
  </html>
 )
}
 
export default RootLayout;