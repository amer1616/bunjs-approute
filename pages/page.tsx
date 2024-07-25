import React from 'react';


function App(props: {title: string},{children}: {children: React.ReactNode}){
 return ( 
  
  <body>
    <h1>{props.title}</h1>
    <header><h1>my header</h1> </header>
    <main>{children}</main>
    <footer><p>my bun footer</p></footer>
  </body>
 
 )
}
 
export default App;


console.log(<App title='my App'/>)