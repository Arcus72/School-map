/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import floorGltf from './Floor0.gltf';

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
        geometry={nodes.Wall133.geometry}
        material={nodes.Wall133.material}
        position={[-10.75, 0.13, 2.26]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.11, 1]}
      />
      <mesh
        geometry={nodes.Stairs002.geometry}
        material={nodes.Stairs002.material}
        position={[-10.64, 0.02, 2.66]}
        scale={[0.28, 0.05, 0.09]}
      />
      <mesh
        geometry={nodes.Wall001.geometry}
        material={nodes.Wall001.material}
        position={[-11.68, 0.13, -1]}
        scale={[0.7, 0.11, -0.89]}
      />
      <mesh
        geometry={nodes.Stairs010.geometry}
        material={nodes.Stairs010.material}
        position={[-11.36, 0.02, -0.86]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.05, -0.07]}
      />
      <mesh
        geometry={nodes.Wall137.geometry}
        material={nodes.Wall137.material}
        position={[0.14, 0.13, 1.94]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Stairs004.geometry}
        material={nodes.Stairs004.material}
        position={[0.21, 0.02, 2.25]}
        scale={[0.15, 0.05, 0.07]}
      />
      <mesh
        geometry={nodes.Wall126.geometry}
        material={nodes.Wall126.material}
        position={[-0.29, 0.13, 2.5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.65, 0.11, -0.59]}
      />
      <mesh
        geometry={nodes.Stairs013.geometry}
        material={nodes.Stairs013.material}
        position={[0.01, 0.16, 2.46]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.05, -0.07]}
      />
      <mesh
        geometry={nodes.Stairs014.geometry}
        material={nodes.Stairs014.material}
        position={[-0.22, 0.02, 2.19]}
        scale={[0.15, 0.05, -0.07]}
      />
      <group position={[-4.32, 0.02, 2.76]} scale={[0.15, 0.05, 0.07]}>
        <mesh
          geometry={nodes.Stairs025.geometry}
          material={nodes.Stairs025.material}
        />
        <mesh
          geometry={nodes.Stairs025_1.geometry}
          material={nodes.Stairs025_1.material}
        />
        <mesh
          geometry={nodes.Stairs025_2.geometry}
          material={nodes.Stairs025_2.material}
        />
        <mesh
          geometry={nodes.Stairs025_3.geometry}
          material={nodes.Stairs025_3.material}
        />
        <mesh
          geometry={nodes.Stairs025_4.geometry}
          material={nodes.Stairs025_4.material}
        />
        <mesh
          geometry={nodes.Stairs025_5.geometry}
          material={nodes.Stairs025_5.material}
        />
        <mesh
          geometry={nodes.Stairs025_6.geometry}
          material={nodes.Stairs025_6.material}
        />
        <mesh
          geometry={nodes.Stairs025_7.geometry}
          material={nodes.Stairs025_7.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall127.geometry}
        material={materials.Wall}
        position={[-4.28, 0, 2.25]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall130.geometry}
        material={nodes.Wall130.material}
        position={[-4.6, 0.13, 2.44]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Wall131.geometry}
        material={nodes.Wall131.material}
        position={[5.27, 0.13, 1.9]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Stairs015.geometry}
        material={nodes.Stairs015.material}
        position={[5.33, 0.02, 2.22]}
        scale={[0.15, 0.05, 0.07]}
      />
      <mesh
        geometry={nodes.Wall031.geometry}
        material={materials.Wall}
        position={[5.28, 0, 2.3]}
      />
      <mesh
        geometry={nodes.Wall032.geometry}
        material={nodes.Wall032.material}
        position={[9.89, 0.13, 1.5]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.89, 0.11, 1.25]}
      />
      <mesh
        geometry={nodes.Stairs005.geometry}
        material={nodes.Stairs005.material}
        position={[10.52, 0.16, 1.54]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.2, 0.05, 0.07]}
      />
      <mesh
        geometry={nodes.Stairs006.geometry}
        material={nodes.Stairs006.material}
        position={[9.99, 0.02, 1.81]}
        scale={[0.2, 0.05, 0.07]}
      />
      <mesh
        geometry={nodes.Wall033.geometry}
        material={materials.Wall}
        position={[0.51, 0, 2.3]}
      />
      <mesh
        geometry={nodes.Wall035.geometry}
        material={materials.Wall}
        position={[10.64, 0, 1.86]}
      />
      <mesh
        geometry={nodes.Wall036.geometry}
        material={nodes.Wall036.material}
        position={[10.04, 0.13, -3.15]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Stairs007.geometry}
        material={nodes.Stairs007.material}
        position={[10.36, 0.02, -3.22]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.17, 0.05, 0.07]}
      />
      <mesh
        geometry={nodes.Stairs016.geometry}
        material={nodes.Stairs016.material}
        position={[10.09, 0.16, -3.42]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.05, 0.07]}
      />
      <mesh
        geometry={nodes.Wall037.geometry}
        material={materials.Wall}
        position={[10.43, 0, -3.51]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall038.geometry}
        material={materials.Wall}
        position={[10.43, 0, -3.15]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall039.geometry}
        material={materials.Wall}
        position={[0.16, -0.01, -4.42]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.45, 1.03, 0.7]}
      />
      <mesh
        geometry={nodes.Wall012.geometry}
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
        geometry={nodes.Wall041.geometry}
        material={materials['Wall.002']}
        position={[-4.4, -0.09, 2.44]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall042.geometry}
        material={materials['Wall.003']}
        position={[-7.87, 0, 2.81]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Stairs003.geometry}
        material={nodes.Stairs003.material}
        position={[-7.35, 0.03, 2.6]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.68, 0.06, 0.04]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-7.68, 0.11, 2.69]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-7.01, 0.11, 2.69]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        geometry={nodes.Wall034.geometry}
        material={materials['Wall.004']}
        position={[-11.82, 0, -0.53]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall043.geometry}
        material={materials['Wall.001']}
        position={[-10.16, 0, -0.53]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall004.geometry}
        material={materials['Wall.005']}
        position={[-10.84, -0.01, 2.74]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Wall030.geometry}
        material={materials.Wall}
        position={[-1.94, 0, 1.85]}
      />
      <mesh
        geometry={nodes.Wall021.geometry}
        material={materials.Wall}
        position={[0.06, 0, 1.7]}
        rotation={[0, -1.57, 0]}
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
        position={[-4.56, 0, 2.29]}
        rotation={[Math.PI, 0, Math.PI]}
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
        position={[-10.75, 0, 1.01]}
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
        position={[-11.22, 0, 3.43]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Wall005.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 2.25]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall008.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 2]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall020.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 1.02]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall022.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 0.04]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall024.geometry}
        material={materials.Wall}
        position={[-5.44, 0, 2.99]}
      />
      <mesh
        geometry={nodes.Wall025.geometry}
        material={materials.Wall}
        position={[-4.49, 0, 1.78]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall026.geometry}
        material={materials.Wall}
        position={[-3.51, 0, 1.72]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall028.geometry}
        material={materials.Wall}
        position={[-3.46, 0, 3.09]}
      />
      <mesh
        geometry={nodes.Wall029.geometry}
        material={materials.Wall}
        position={[-3.46, 0, 2.29]}
      />
      <mesh
        geometry={nodes.Wall047.geometry}
        material={materials.Wall}
        position={[-3.46, 0, 1.8]}
      />
      <mesh
        geometry={nodes.Wall103.geometry}
        material={materials.Wall}
        position={[5.62, 0, 2.3]}
      />
      <mesh
        geometry={nodes.Wall109.geometry}
        material={materials.Wall}
        position={[-4.23, 0, 1.78]}
      />
      <mesh
        geometry={nodes.Wall110.geometry}
        material={materials.Wall}
        position={[-1.94, 0, 1.89]}
      />
      <mesh
        geometry={nodes.Wall023.geometry}
        material={materials.Wall}
        position={[-1.94, 0, 2.42]}
      />
      <mesh
        geometry={nodes.Wall111.geometry}
        material={materials.Wall}
        position={[-1.94, 0, 2.79]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall112.geometry}
        material={materials.Wall}
        position={[-0.97, 0, 3.31]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall113.geometry}
        material={materials.Wall}
        position={[-0.32, 0, 3.31]}
      />
      <mesh
        geometry={nodes.Wall114.geometry}
        material={materials.Wall}
        position={[0.06, 0, 2.67]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall115.geometry}
        material={materials.Wall}
        position={[-1.41, 0, 1.89]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall116.geometry}
        material={materials.Wall}
        position={[-0.28, 0, -1.75]}
      />
      <mesh
        geometry={nodes.Wall117.geometry}
        material={materials.Wall}
        position={[0.02, 0, 1.52]}
      />
      <mesh
        geometry={nodes.Wall118.geometry}
        material={materials.Wall}
        position={[0.58, 0, 1.15]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall119.geometry}
        material={materials.Wall}
        position={[0.58, 0, 0.43]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall120.geometry}
        material={materials.Wall}
        position={[0.58, 0, 0.07]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall121.geometry}
        material={materials.Wall}
        position={[0.58, 0, -0.3]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall122.geometry}
        material={materials.Wall}
        position={[0.58, 0, -0.67]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall123.geometry}
        material={materials.Wall}
        position={[0.3, 0, 1.11]}
      />
      <mesh
        geometry={nodes.Wall124.geometry}
        material={materials.Wall}
        position={[-11.81, 0, 3.03]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall.geometry}
        material={materials.Wall}
        position={[-11.81, 0, -1.51]}
      />
      <mesh
        geometry={nodes.Wall027.geometry}
        material={materials.Wall}
        position={[0.16, 0, 3.32]}
      />
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials.Ground}
        position={[-0.06, 0.01, 0.09]}
        scale={[11.8, 1, 4.42]}
      />
      <mesh
        geometry={nodes.Wall019.geometry}
        material={materials.Wall}
        position={[-3.54, 0, 3.01]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload(floorGltf);
