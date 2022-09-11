/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import floorGltf from './Floor2.gltf';

import gsap from 'gsap';

export default function Model({ isVisible = true }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(floorGltf);

  let [timeLineGsap] = useState(gsap.timeline());

  useEffect(() => {
    timeLineGsap.clear();
    !isVisible
      ? timeLineGsap.to(group.current.position, { y: 15, duration: 1 })
      : timeLineGsap.to(group.current.position, { y: 0, duration: 0.5 });
  }, [isVisible]);

  return (
    <group ref={group} scale={[1, 1, 1]} dispose={null}>
      <mesh
        geometry={nodes.Wall075.geometry}
        material={materials.Wall}
        position={[11.68, 0, -2.33]}
        rotation={[0, -1.57, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall074.geometry}
        material={materials.Wall}
        position={[11.68, 0, -1.92]}
        rotation={[0, -1.57, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall073.geometry}
        material={materials.Wall}
        position={[11.68, 0, -1.51]}
        rotation={[0, -1.57, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall071.geometry}
        material={materials.Wall}
        position={[11.68, 0, -0.34]}
        rotation={[0, -1.57, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall069.geometry}
        material={materials.Wall}
        position={[11.68, 0, 0.85]}
        rotation={[0, -1.57, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall068.geometry}
        material={materials.Wall}
        position={[11.68, 0, 1.26]}
        rotation={[0, -1.57, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall065.geometry}
        material={materials.Wall}
        position={[9.9, 0, -1.29]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall064.geometry}
        material={materials.Wall}
        position={[9.9, 0, -0.74]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall061.geometry}
        material={materials.Wall}
        position={[9.9, 0, 0.44]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall059.geometry}
        material={materials.Wall}
        position={[9.9, 0, 1.29]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall058.geometry}
        material={materials.Wall}
        position={[10.62, 0, -2.67]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall057.geometry}
        material={materials.Wall}
        position={[9.9, 0, -2.74]}
        rotation={[0, 1.57, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall056.geometry}
        material={materials.Wall}
        position={[11, 0, -2.67]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall054.geometry}
        material={materials.Wall}
        position={[8.58, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall052.geometry}
        material={materials.Wall}
        position={[7.41, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall051.geometry}
        material={materials.Wall}
        position={[9.25, 0, 2.3]}
      />
      <mesh
        geometry={nodes.Wall049.geometry}
        material={materials.Wall}
        position={[6.78, 0, 2.3]}
      />
      <mesh
        geometry={nodes.Wall048.geometry}
        material={materials.Wall}
        position={[11.68, 0, 2.69]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Wall046.geometry}
        material={materials.Wall}
        position={[7.64, 0, 2.3]}
      />
      <mesh
        geometry={nodes.Wall045.geometry}
        material={materials.Wall}
        position={[8.26, 0, 2.3]}
      />
      <mesh
        geometry={nodes.Wall044.geometry}
        material={materials.Wall}
        position={[9.9, 0, 1.79]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall043.geometry}
        material={materials.Wall}
        position={[6.26, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall042.geometry}
        material={materials.Wall}
        position={[5.16, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall041.geometry}
        material={materials.Wall}
        position={[4.01, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall040.geometry}
        material={materials.Wall}
        position={[2.9, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall039.geometry}
        material={materials.Wall}
        position={[1.73, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall038.geometry}
        material={materials.Wall}
        position={[0.52, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall036.geometry}
        material={materials.Wall}
        position={[3.63, 0, 2.29]}
      />
      <mesh
        geometry={nodes.Wall035.geometry}
        material={materials.Wall}
        position={[2.5, 0, 2.29]}
      />
      <mesh
        geometry={nodes.Wall034.geometry}
        material={materials.Wall}
        position={[1.71, 0, 2.29]}
      />
      <mesh
        geometry={nodes.Wall033.geometry}
        material={materials.Wall}
        position={[1.46, 0, 2.29]}
      />
      <mesh
        geometry={nodes.Wall031.geometry}
        material={materials.Wall}
        position={[0.52, 0, 1.79]}
      />
      <mesh
        geometry={nodes.Wall027.geometry}
        material={materials.Wall}
        position={[0.16, -0.03, 3.32]}
      />
      <mesh
        geometry={nodes.Wall021.geometry}
        material={materials.Wall}
        position={[-1.94, -0.03, 1.77]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall019.geometry}
        material={materials.Wall}
        position={[8.83, -1.33, -0.33]}
      />
      <mesh
        geometry={nodes.Wall018.geometry}
        material={materials.Wall}
        position={[-5.72, 0, 2.99]}
      />
      <mesh
        geometry={nodes.Wall017.geometry}
        material={materials.Wall}
        position={[-6.78, 0, 2.99]}
      />
      <mesh
        geometry={nodes.Wall016.geometry}
        material={materials.Wall}
        position={[-7.87, 0, 2.99]}
      />
      <mesh
        geometry={nodes.Wall015.geometry}
        material={materials.Wall}
        position={[-8.98, 0, 2.78]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall014.geometry}
        material={materials.Wall}
        position={[-10.16, 0, 2.3]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall013.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 3.47]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall011.geometry}
        material={materials.Wall}
        position={[-10.75, 0, 1.75]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall010.geometry}
        material={materials.Wall}
        position={[-10.75, 0, 2.01]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall009.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 2.74]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall007.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 1.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall006.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 0.52]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall003.geometry}
        material={materials.Wall}
        position={[-11.22, 0, -0.44]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall001.geometry}
        material={materials.Wall}
        position={[-10.16, 0, -0.53]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall096.geometry}
        material={materials.Wall}
        position={[-10.75, 0, 0.53]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall005.geometry}
        material={materials.Wall}
        position={[-11.16, 0, 3.47]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall008.geometry}
        material={materials.Wall}
        position={[-9.26, 0, 2.29]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall020.geometry}
        material={materials.Wall}
        position={[-3.83, 0, 3.39]}
      />
      <mesh
        geometry={nodes.Wall022.geometry}
        material={materials.Wall}
        position={[0.16, 0, 2.68]}
      />
      <mesh
        geometry={nodes.Wall024.geometry}
        material={materials.Wall}
        position={[1.39, 0.02, 3.32]}
      />
      <mesh
        geometry={nodes.Wall025.geometry}
        material={materials.Wall}
        position={[10.77, 0, 3.56]}
      />
      <mesh
        geometry={nodes.Wall.geometry}
        material={materials.Wall}
        position={[-11.81, -0.03, -1.51]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.Ground}
        position={[8.83, -1.33, -0.33]}
        scale={[11.8, 1, 4.42]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials.Wall}
        position={[10.26, 0.29, -3.55]}
        scale={[1.64, 1, 0.79]}
      />
      <mesh
        geometry={nodes.Wall023.geometry}
        material={materials.Wall}
        position={[-10.75, 0, 0.02]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall002.geometry}
        material={materials.Wall}
        position={[-10.16, 0, -1.03]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall012.geometry}
        material={materials['Wall.001']}
        position={[0.97, 0, 2.29]}
      />
      <mesh
        geometry={nodes.Wall026.geometry}
        material={materials.Wall}
        position={[-4.48, -0.03, -1.42]}
      />
      <mesh
        geometry={nodes.Wall028.geometry}
        material={materials['Wall.004']}
        position={[-11.82, 0, -0.53]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall004.geometry}
        material={materials['Wall.002']}
        position={[-10.84, -0.01, 2.74]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Stairs005.geometry}
        material={nodes.Stairs005.material}
        position={[-4.52, -0.09, 2.48]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.Stairs011.geometry}
        material={nodes.Stairs011.material}
        position={[0.43, -0.08, 1.98]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.Stairs003.geometry}
        material={nodes.Stairs003.material}
        position={[5.52, -0.08, 2.01]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.Wall029.geometry}
        material={materials.Wall}
        position={[9.9, 0, 1.89]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.5, 0.11, 0.44]}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials['Ground.001']}
        position={[-1.52, -0.02, 2.59]}
        scale={[1.7, 1, 0.79]}
      />
    </group>
  );
}

useGLTF.preload(floorGltf);
