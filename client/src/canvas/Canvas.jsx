import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Shoe from './Shoe'
import Camera from './Camera'
import Backdrop from './Backdrop'

const Canvass = () => {
  return (
    <Canvas>
      <ambientLight intensity={.5} />
      <Environment preset='city' />
      <Camera>
        {/* <Backdrop /> */}
        <Center>
          <Shoe />
        </Center>
      </Camera>
    </Canvas>
  )
}

export default Canvass