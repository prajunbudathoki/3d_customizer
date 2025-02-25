import React from 'react'
import Canvas from './canvas/Canvas'
import Home from './pages/Home'
import Customizer from './pages/Customizer'

const App = () => {
  return (
    <main className='all transition-all ease-in'>
      <Home />
      {/* <Customizer />
      <Canvas /> */}
    </main>
  )
}

export default App