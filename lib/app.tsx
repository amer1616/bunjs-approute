import React from 'react'
import RootLayout from '../pages/_layout'
import Home from '../pages'

function App() {
  return (
    <div>
      <RootLayout>
        <Home message={''}></Home>
      
      </RootLayout>
      </div>
  )
}

export default App