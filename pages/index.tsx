import React from 'react';
import RootLayout from './_layout';

function Home(props: {message: string}) {
  return (
   
      <h1 style={{color: 'red'}}>{props.message}</h1>
    
  );
}

export default Home;