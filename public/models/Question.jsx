/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\question.gltf -T 
Files: .\question.gltf [44.23KB] > C:\Users\tony\Documents\Github\drt_software_website\public\models\question-transformed.glb [3.01KB] (93%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/question-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Question.geometry} material={nodes.Question.material} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/question-transformed.glb')