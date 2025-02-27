import React from 'react'
import {easing} from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal,useGLTF,useTexture } from '@react-three/drei'
import state from '../store'

const Shoe = () => {
  const snap = useSnapshot(state)
  const {nodes,materials} = useGLTF('/vans_shoe.glb')
  // console.log('nodes: ',nodes)
  // console.log('materials: ',materials)
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)
  const object2 = nodes.Object_2
  const material = materials.Blue_Vans_Shoe

  return (
    <group>
      <mesh castShadow geometry={object2.geometry} material={material} material-roughness={1} dispose={null}>
      </mesh>
    </group>
  ) 
}

export default Shoe