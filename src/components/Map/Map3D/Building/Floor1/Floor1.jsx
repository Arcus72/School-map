/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import floorGltf from './Floor1.gltf';

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
        geometry={nodes.Wall002.geometry}
        material={materials.Wall}
        position={[-10.16, -0.01, -1.03]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall003.geometry}
        material={materials.Wall}
        position={[-11.22, -0.01, -0.44]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall004.geometry}
        material={materials.Wall}
        position={[-10.84, -0.01, -0.44]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall006.geometry}
        material={materials.Wall}
        position={[-11.81, -0.01, 0.52]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall007.geometry}
        material={materials.Wall}
        position={[-11.81, -0.01, 1.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall008.geometry}
        material={materials.Wall}
        position={[-11.81, -0.01, 1.95]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall009.geometry}
        material={materials.Wall}
        position={[-11.81, -0.01, 2.69]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall010.geometry}
        material={materials.Wall}
        position={[-10.75, -0.01, 2.01]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall011.geometry}
        material={materials.Wall}
        position={[-10.75, -0.01, 1.01]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall012.geometry}
        material={materials.Wall}
        position={[-10.75, -0.01, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall013.geometry}
        material={materials.Wall}
        position={[-11.81, -0.01, 3.47]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall014.geometry}
        material={materials.Wall}
        position={[-10.16, -0.01, 2.3]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall016.geometry}
        material={materials.Wall}
        position={[-7.87, -0.01, 2.99]}
      />
      <mesh
        geometry={nodes.Wall017.geometry}
        material={materials.Wall}
        position={[-6.78, -0.01, 2.99]}
      />
      <mesh
        geometry={nodes.Wall018.geometry}
        material={materials.Wall}
        position={[-5.72, -0.01, 2.99]}
      />
      <mesh
        geometry={nodes.Wall019.geometry}
        material={materials.Wall}
        position={[-4.23, -0.01, 2.28]}
      />
      <mesh
        geometry={nodes.Wall020.geometry}
        material={materials.Wall}
        position={[-4.11, 0.17, -1.42]}
      />
      <mesh
        geometry={nodes.Wall022.geometry}
        material={materials.Wall}
        position={[-3.21, 0.17, -0.03]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall023.geometry}
        material={materials.Wall}
        position={[-3.07, -0.01, 2.58]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall024.geometry}
        material={materials.Wall}
        position={[-2.47, -0.01, 3.06]}
      />
      <mesh
        geometry={nodes.Wall025.geometry}
        material={materials.Wall}
        position={[-1.89, -0.01, 3.06]}
      />
      <mesh
        geometry={nodes.Wall026.geometry}
        material={materials.Wall}
        position={[-0.99, -0.01, 3.06]}
      />
      <mesh
        geometry={nodes.Wall028.geometry}
        material={materials.Wall}
        position={[-3.21, 0.17, 0.43]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall029.geometry}
        material={materials.Wall}
        position={[-0.29, -0.01, 2.58]}
      />
      <mesh
        geometry={nodes.Wall030.geometry}
        material={materials.Wall}
        position={[-1.94, -0.01, 2.58]}
      />
      <mesh
        geometry={nodes.Wall031.geometry}
        material={materials.Wall}
        position={[0.52, -0.01, 1.79]}
      />
      <mesh
        geometry={nodes.Wall032.geometry}
        material={materials.Wall}
        position={[0.97, -0.01, 2.29]}
      />
      <mesh
        geometry={nodes.Wall033.geometry}
        material={materials.Wall}
        position={[1.41, -0.01, 2.29]}
      />
      <mesh
        geometry={nodes.Wall034.geometry}
        material={materials.Wall}
        position={[1.71, -0.01, 2.29]}
      />
      <mesh
        geometry={nodes.Wall035.geometry}
        material={materials.Wall}
        position={[2.94, -0.01, 2.29]}
      />
      <mesh
        geometry={nodes.Wall036.geometry}
        material={materials.Wall}
        position={[3.6, -0.01, 2.29]}
      />
      <mesh
        geometry={nodes.Wall037.geometry}
        material={materials.Wall}
        position={[4.41, -0.01, 2.29]}
      />
      <mesh
        geometry={nodes.Wall038.geometry}
        material={materials.Wall}
        position={[0.52, -0.01, 3.31]}
      />
      <mesh
        geometry={nodes.Wall039.geometry}
        material={materials.Wall}
        position={[1.73, -0.01, 3.31]}
      />
      <mesh
        geometry={nodes.Wall040.geometry}
        material={materials.Wall}
        position={[2.9, -0.01, 3.31]}
      />
      <mesh
        geometry={nodes.Wall041.geometry}
        material={materials.Wall}
        position={[3.96, -0.01, 3.31]}
      />
      <mesh
        geometry={nodes.Wall042.geometry}
        material={materials.Wall}
        position={[5.1, -0.01, 3.31]}
      />
      <mesh
        geometry={nodes.Wall043.geometry}
        material={materials.Wall}
        position={[6.26, -0.01, 3.31]}
      />
      <mesh
        geometry={nodes.Wall044.geometry}
        material={materials.Wall}
        position={[9.9, -0.01, 1.79]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall047.geometry}
        material={materials.Wall}
        position={[-10.81, -0.01, -0.53]}
        scale={[1, 1, 0.67]}
      />
      <group position={[7.64, -0.01, 2.3]}>
        <mesh geometry={nodes.Wall054.geometry} material={materials.Wall} />
        <mesh
          geometry={nodes.Wall054_1.geometry}
          material={nodes.Wall054_1.material}
        />
        <mesh
          geometry={nodes.Wall054_2.geometry}
          material={nodes.Wall054_2.material}
        />
      </group>
      <group position={[6.78, -0.01, 2.3]}>
        <mesh geometry={nodes.Wall055.geometry} material={materials.Wall} />
        <mesh
          geometry={nodes.Wall055_1.geometry}
          material={nodes.Wall055_1.material}
        />
        <mesh
          geometry={nodes.Wall055_2.geometry}
          material={nodes.Wall055_2.material}
        />
      </group>
      <group position={[6.02, -0.01, 2.3]}>
        <mesh geometry={nodes.Wall056.geometry} material={materials.Wall} />
        <mesh
          geometry={nodes.Wall056_1.geometry}
          material={nodes.Wall056_1.material}
        />
        <mesh
          geometry={nodes.Wall056_2.geometry}
          material={nodes.Wall056_2.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall052.geometry}
        material={materials.Wall}
        position={[7.4, -0.01, 3.31]}
      />
      <mesh
        geometry={nodes.Wall058.geometry}
        material={materials.Wall}
        position={[10.62, -0.01, 1.96]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.11, 0.44]}
      />
      <group position={[-10.64, 0.02, 2.66]} scale={[0.28, 0.05, 0.09]}>
        <mesh
          geometry={nodes.Stairs005_1.geometry}
          material={nodes.Stairs005_1.material}
        />
        <mesh
          geometry={nodes.Stairs005_2.geometry}
          material={nodes.Stairs005_2.material}
        />
        <mesh
          geometry={nodes.Stairs005_3.geometry}
          material={nodes.Stairs005_3.material}
        />
        <mesh
          geometry={nodes.Stairs005_4.geometry}
          material={nodes.Stairs005_4.material}
        />
        <mesh
          geometry={nodes.Stairs005_5.geometry}
          material={nodes.Stairs005_5.material}
        />
        <mesh
          geometry={nodes.Stairs005_6.geometry}
          material={nodes.Stairs005_6.material}
        />
        <mesh
          geometry={nodes.Stairs005_7.geometry}
          material={nodes.Stairs005_7.material}
        />
        <mesh
          geometry={nodes.Stairs005_8.geometry}
          material={nodes.Stairs005_8.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall095.geometry}
        material={nodes.Wall095.material}
        position={[-10.75, 0.13, 2.26]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.11, 1]}
      />
      <mesh
        geometry={nodes.Wall109.geometry}
        material={materials.Wall}
        position={[-3.23, 0.17, 1.79]}
      />
      <mesh
        geometry={nodes.Wall096.geometry}
        material={materials.Wall}
        position={[-4.27, -0.01, 3.09]}
      />
      <mesh
        geometry={nodes.Wall097.geometry}
        material={materials.Wall}
        position={[-3.23, -0.01, 2.28]}
      />
      <mesh
        geometry={nodes.Wall.geometry}
        material={materials.Wall}
        position={[-11.81, -0.01, -1.51]}
      />
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials.Ground}
        position={[-0.06, 0, 0.09]}
        scale={[11.8, 1, 4.42]}
      />
      <group
        position={[-10.26, 0.15, 2.31]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.28, 0.05, 0.09]}
      >
        <mesh
          geometry={nodes.Stairs002_1.geometry}
          material={nodes.Stairs002_1.material}
        />
        <mesh
          geometry={nodes.Stairs002_2.geometry}
          material={nodes.Stairs002_2.material}
        />
        <mesh
          geometry={nodes.Stairs002_3.geometry}
          material={nodes.Stairs002_3.material}
        />
        <mesh
          geometry={nodes.Stairs002_4.geometry}
          material={nodes.Stairs002_4.material}
        />
        <mesh
          geometry={nodes.Stairs002_5.geometry}
          material={nodes.Stairs002_5.material}
        />
        <mesh
          geometry={nodes.Stairs002_6.geometry}
          material={nodes.Stairs002_6.material}
        />
        <mesh
          geometry={nodes.Stairs002_7.geometry}
          material={nodes.Stairs002_7.material}
        />
        <mesh
          geometry={nodes.Stairs002_8.geometry}
          material={nodes.Stairs002_8.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall098.geometry}
        material={nodes.Wall098.material}
        position={[-11.68, 0.13, -0.45]}
        scale={[0.7, 0.11, 0.89]}
      />
      <group
        position={[-11.63, 0.16, -0.85]}
        rotation={[0, -1.57, 0]}
        scale={[0.19, 0.05, 0.07]}
      >
        <mesh
          geometry={nodes.Stairs004_1.geometry}
          material={nodes.Stairs004_1.material}
        />
        <mesh
          geometry={nodes.Stairs004_2.geometry}
          material={nodes.Stairs004_2.material}
        />
        <mesh
          geometry={nodes.Stairs004_3.geometry}
          material={nodes.Stairs004_3.material}
        />
        <mesh
          geometry={nodes.Stairs004_4.geometry}
          material={nodes.Stairs004_4.material}
        />
        <mesh
          geometry={nodes.Stairs004_5.geometry}
          material={nodes.Stairs004_5.material}
        />
        <mesh
          geometry={nodes.Stairs004_6.geometry}
          material={nodes.Stairs004_6.material}
        />
        <mesh
          geometry={nodes.Stairs004_7.geometry}
          material={nodes.Stairs004_7.material}
        />
        <mesh
          geometry={nodes.Stairs004_8.geometry}
          material={nodes.Stairs004_8.material}
        />
      </group>
      <group
        position={[-11.36, 0.02, -0.62]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.19, 0.05, 0.07]}
      >
        <mesh
          geometry={nodes.Stairs010_1.geometry}
          material={nodes.Stairs010_1.material}
        />
        <mesh
          geometry={nodes.Stairs010_2.geometry}
          material={nodes.Stairs010_2.material}
        />
        <mesh
          geometry={nodes.Stairs010_3.geometry}
          material={nodes.Stairs010_3.material}
        />
        <mesh
          geometry={nodes.Stairs010_4.geometry}
          material={nodes.Stairs010_4.material}
        />
        <mesh
          geometry={nodes.Stairs010_5.geometry}
          material={nodes.Stairs010_5.material}
        />
        <mesh
          geometry={nodes.Stairs010_6.geometry}
          material={nodes.Stairs010_6.material}
        />
        <mesh
          geometry={nodes.Stairs010_7.geometry}
          material={nodes.Stairs010_7.material}
        />
        <mesh
          geometry={nodes.Stairs010_8.geometry}
          material={nodes.Stairs010_8.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall099.geometry}
        material={materials.Ground}
        position={[-0.31, 0.13, 2.16]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[16.36, 0.11, 1.5]}
      />
      <group position={[0.18, 0.02, 2.25]} scale={[0.19, 0.05, 0.07]}>
        <mesh
          geometry={nodes.Stairs011_1.geometry}
          material={nodes.Stairs011_1.material}
        />
        <mesh
          geometry={nodes.Stairs011_2.geometry}
          material={nodes.Stairs011_2.material}
        />
        <mesh
          geometry={nodes.Stairs011_3.geometry}
          material={nodes.Stairs011_3.material}
        />
        <mesh
          geometry={nodes.Stairs011_4.geometry}
          material={nodes.Stairs011_4.material}
        />
        <mesh
          geometry={nodes.Stairs011_5.geometry}
          material={nodes.Stairs011_5.material}
        />
        <mesh
          geometry={nodes.Stairs011_6.geometry}
          material={nodes.Stairs011_6.material}
        />
        <mesh
          geometry={nodes.Stairs011_7.geometry}
          material={nodes.Stairs011_7.material}
        />
        <mesh
          geometry={nodes.Stairs011_8.geometry}
          material={nodes.Stairs011_8.material}
        />
      </group>
      <group
        position={[0.41, 0.16, 1.98]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.05, 0.07]}
      >
        <mesh
          geometry={nodes.Stairs012_1.geometry}
          material={nodes.Stairs012_1.material}
        />
        <mesh
          geometry={nodes.Stairs012_2.geometry}
          material={nodes.Stairs012_2.material}
        />
        <mesh
          geometry={nodes.Stairs012_3.geometry}
          material={nodes.Stairs012_3.material}
        />
        <mesh
          geometry={nodes.Stairs012_4.geometry}
          material={nodes.Stairs012_4.material}
        />
        <mesh
          geometry={nodes.Stairs012_5.geometry}
          material={nodes.Stairs012_5.material}
        />
        <mesh
          geometry={nodes.Stairs012_6.geometry}
          material={nodes.Stairs012_6.material}
        />
        <mesh
          geometry={nodes.Stairs012_7.geometry}
          material={nodes.Stairs012_7.material}
        />
        <mesh
          geometry={nodes.Stairs012_8.geometry}
          material={nodes.Stairs012_8.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall102.geometry}
        material={nodes.Wall102.material}
        position={[5.26, 0.13, 1.93]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.62, 0.11, 0.54]}
      />
      <group
        position={[5.52, 0.16, 1.98]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.13, 0.05, 0.07]}
      >
        <mesh
          geometry={nodes.Stairs013_1.geometry}
          material={nodes.Stairs013_1.material}
        />
        <mesh
          geometry={nodes.Stairs013_2.geometry}
          material={nodes.Stairs013_2.material}
        />
        <mesh
          geometry={nodes.Stairs013_3.geometry}
          material={nodes.Stairs013_3.material}
        />
        <mesh
          geometry={nodes.Stairs013_4.geometry}
          material={nodes.Stairs013_4.material}
        />
        <mesh
          geometry={nodes.Stairs013_5.geometry}
          material={nodes.Stairs013_5.material}
        />
        <mesh
          geometry={nodes.Stairs013_6.geometry}
          material={nodes.Stairs013_6.material}
        />
        <mesh
          geometry={nodes.Stairs013_7.geometry}
          material={nodes.Stairs013_7.material}
        />
        <mesh
          geometry={nodes.Stairs013_8.geometry}
          material={nodes.Stairs013_8.material}
        />
      </group>
      <group position={[5.33, 0.02, 2.25]} scale={[0.13, 0.05, 0.07]}>
        <mesh
          geometry={nodes.Stairs014_1.geometry}
          material={nodes.Stairs014_1.material}
        />
        <mesh
          geometry={nodes.Stairs014_2.geometry}
          material={nodes.Stairs014_2.material}
        />
        <mesh
          geometry={nodes.Stairs014_3.geometry}
          material={nodes.Stairs014_3.material}
        />
        <mesh
          geometry={nodes.Stairs014_4.geometry}
          material={nodes.Stairs014_4.material}
        />
        <mesh
          geometry={nodes.Stairs014_5.geometry}
          material={nodes.Stairs014_5.material}
        />
        <mesh
          geometry={nodes.Stairs014_6.geometry}
          material={nodes.Stairs014_6.material}
        />
        <mesh
          geometry={nodes.Stairs014_7.geometry}
          material={nodes.Stairs014_7.material}
        />
        <mesh
          geometry={nodes.Stairs014_8.geometry}
          material={nodes.Stairs014_8.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall103.geometry}
        material={nodes.Wall103.material}
        position={[9.89, 0.13, 1.5]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.89, 0.11, 1.25]}
      />
      <group position={[9.99, 0.02, 1.81]} scale={[0.2, 0.05, 0.07]}>
        <mesh
          geometry={nodes.Stairs015.geometry}
          material={nodes.Stairs015.material}
        />
        <mesh
          geometry={nodes.Stairs015_1.geometry}
          material={nodes.Stairs015_1.material}
        />
        <mesh
          geometry={nodes.Stairs015_2.geometry}
          material={nodes.Stairs015_2.material}
        />
        <mesh
          geometry={nodes.Stairs015_3.geometry}
          material={nodes.Stairs015_3.material}
        />
        <mesh
          geometry={nodes.Stairs015_4.geometry}
          material={nodes.Stairs015_4.material}
        />
        <mesh
          geometry={nodes.Stairs015_5.geometry}
          material={nodes.Stairs015_5.material}
        />
        <mesh
          geometry={nodes.Stairs015_6.geometry}
          material={nodes.Stairs015_6.material}
        />
        <mesh
          geometry={nodes.Stairs015_7.geometry}
          material={nodes.Stairs015_7.material}
        />
      </group>
      <group
        position={[10.52, 0.16, 1.54]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.2, 0.05, 0.07]}
      >
        <mesh
          geometry={nodes.Stairs016.geometry}
          material={nodes.Stairs016.material}
        />
        <mesh
          geometry={nodes.Stairs016_1.geometry}
          material={nodes.Stairs016_1.material}
        />
        <mesh
          geometry={nodes.Stairs016_2.geometry}
          material={nodes.Stairs016_2.material}
        />
        <mesh
          geometry={nodes.Stairs016_3.geometry}
          material={nodes.Stairs016_3.material}
        />
        <mesh
          geometry={nodes.Stairs016_4.geometry}
          material={nodes.Stairs016_4.material}
        />
        <mesh
          geometry={nodes.Stairs016_5.geometry}
          material={nodes.Stairs016_5.material}
        />
        <mesh
          geometry={nodes.Stairs016_6.geometry}
          material={nodes.Stairs016_6.material}
        />
        <mesh
          geometry={nodes.Stairs016_7.geometry}
          material={nodes.Stairs016_7.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall104.geometry}
        material={materials['Wall.004']}
        position={[-0.34, -0.01, -1.75]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.45, 1.03, 0.7]}
      />
      <group
        position={[0, 0.16, 2.2]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.05, 0.07]}
      >
        <mesh
          geometry={nodes.Stairs017.geometry}
          material={nodes.Stairs017.material}
        />
        <mesh
          geometry={nodes.Stairs017_1.geometry}
          material={nodes.Stairs017_1.material}
        />
        <mesh
          geometry={nodes.Stairs017_2.geometry}
          material={nodes.Stairs017_2.material}
        />
        <mesh
          geometry={nodes.Stairs017_3.geometry}
          material={nodes.Stairs017_3.material}
        />
        <mesh
          geometry={nodes.Stairs017_4.geometry}
          material={nodes.Stairs017_4.material}
        />
        <mesh
          geometry={nodes.Stairs017_5.geometry}
          material={nodes.Stairs017_5.material}
        />
        <mesh
          geometry={nodes.Stairs017_6.geometry}
          material={nodes.Stairs017_6.material}
        />
        <mesh
          geometry={nodes.Stairs017_7.geometry}
          material={nodes.Stairs017_7.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall105.geometry}
        material={nodes.Wall105.material}
        position={[0.14, 0.13, 1.93]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <group position={[-0.23, 0.02, 2.47]} scale={[0.19, 0.05, 0.07]}>
        <mesh
          geometry={nodes.Stairs019.geometry}
          material={nodes.Stairs019.material}
        />
        <mesh
          geometry={nodes.Stairs019_1.geometry}
          material={nodes.Stairs019_1.material}
        />
        <mesh
          geometry={nodes.Stairs019_2.geometry}
          material={nodes.Stairs019_2.material}
        />
        <mesh
          geometry={nodes.Stairs019_3.geometry}
          material={nodes.Stairs019_3.material}
        />
        <mesh
          geometry={nodes.Stairs019_4.geometry}
          material={nodes.Stairs019_4.material}
        />
        <mesh
          geometry={nodes.Stairs019_5.geometry}
          material={nodes.Stairs019_5.material}
        />
        <mesh
          geometry={nodes.Stairs019_6.geometry}
          material={nodes.Stairs019_6.material}
        />
        <mesh
          geometry={nodes.Stairs019_7.geometry}
          material={nodes.Stairs019_7.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall110.geometry}
        material={materials['Wall.008']}
        position={[-4.27, 0.17, 2.22]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <group position={[-4.32, 0.02, 2.76]} scale={[-0.15, 0.05, 0.07]}>
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
        geometry={nodes.Wall108.geometry}
        material={materials.Ground}
        position={[-4.59, 0.13, 2.44]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <group
        position={[-4.52, 0.16, 2.48]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.05, 0.07]}
      >
        <mesh
          geometry={nodes.Stairs026.geometry}
          material={nodes.Stairs026.material}
        />
        <mesh
          geometry={nodes.Stairs026_1.geometry}
          material={nodes.Stairs026_1.material}
        />
        <mesh
          geometry={nodes.Stairs026_2.geometry}
          material={nodes.Stairs026_2.material}
        />
        <mesh
          geometry={nodes.Stairs026_3.geometry}
          material={nodes.Stairs026_3.material}
        />
        <mesh
          geometry={nodes.Stairs026_4.geometry}
          material={nodes.Stairs026_4.material}
        />
        <mesh
          geometry={nodes.Stairs026_5.geometry}
          material={nodes.Stairs026_5.material}
        />
        <mesh
          geometry={nodes.Stairs026_6.geometry}
          material={nodes.Stairs026_6.material}
        />
        <mesh
          geometry={nodes.Stairs026_7.geometry}
          material={nodes.Stairs026_7.material}
        />
      </group>
      <group position={[7.52, -0.01, 2.64]}>
        <mesh
          geometry={nodes.Wall039_1.geometry}
          material={materials['Wall.001']}
        />
        <mesh
          geometry={nodes.Wall039_2.geometry}
          material={nodes.Wall039_2.material}
        />
        <mesh
          geometry={nodes.Wall039_3.geometry}
          material={nodes.Wall039_3.material}
        />
      </group>
      <mesh
        geometry={nodes.Wall045.geometry}
        material={materials.Ground}
        position={[9.89, -0.03, -4.34]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.45, 1.03, 0.7]}
      />
      <mesh
        geometry={nodes.Wall001.geometry}
        material={materials.Wall}
        position={[-10.16, -0.01, -0.53]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall005.geometry}
        material={materials.Wall}
        position={[-11.81, -0.01, 1.01]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall015.geometry}
        material={materials.Wall}
        position={[-8.98, -0.01, 2.78]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall027.geometry}
        material={materials.Wall}
        position={[0.16, -0.01, 3.32]}
      />
      <mesh
        geometry={nodes.Wall021.geometry}
        material={materials.Wall}
        position={[-0.26, -0.02, 1.77]}
        rotation={[0, -1.57, 0]}
      />
    </group>
  );
}

useGLTF.preload(floorGltf);
