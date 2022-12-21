/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState, memo } from 'react';
import { useGLTF } from '@react-three/drei';
import floorGltf from './Floor1.gltf';
import gsap from 'gsap';

function Floor1({ isVisible = true }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(floorGltf);

  let [timeLineGsap] = useState(gsap.timeline());

  useEffect(() => {
    timeLineGsap.clear();
    !isVisible
      ? timeLineGsap.to(group.current.position, { y: 15, duration: 1 })
      : timeLineGsap.to(group.current.position, { y: 0, duration: 0.5 });
  }, [isVisible]);

  useEffect(() => {
    document.hideLoader('.LoaderMap3D');
  }, []);

  return (
    <group ref={group} scale={[1, 1, 1]} dispose={null}>
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
        scale={[1, 1.03, 1]}
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
        geometry={nodes.Wall046.geometry}
        material={materials.Wall}
        position={[7.64, -0.01, 2.3]}
      />
      <mesh
        geometry={nodes.Wall049.geometry}
        material={materials.Wall}
        position={[6.78, -0.01, 2.3]}
      />
      <mesh
        geometry={nodes.Wall050.geometry}
        material={materials.Wall}
        position={[6.02, -0.01, 2.3]}
      />
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
      <mesh
        geometry={nodes.Wall109.geometry}
        material={materials.Wall}
        position={[-4.34, 0.17, 1.79]}
      />
      <mesh
        geometry={nodes.Wall096.geometry}
        material={materials.Wall}
        position={[-4.27, -0.01, 3.09]}
      />
      <mesh
        geometry={nodes.Wall097.geometry}
        material={materials.Wall}
        position={[-3.23, -0.01, 2.29]}
        scale={[1, 1, 1.36]}
      />
      <mesh
        geometry={nodes.Wall.geometry}
        material={materials.Wall}
        position={[-11.81, -0.01, -1.51]}
      />
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials.Ground}
        position={[-0.06, 0.13, 0.09]}
        scale={[11.8, 1, 4.42]}
      />
      <mesh
        geometry={nodes.Stairs007.geometry}
        material={materials.stairs}
        position={[0.21, 0.13, 2.24]}
        scale={[0.15, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.Wall104.geometry}
        material={materials.Wall}
        position={[-0.29, -0.01, -1.75]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.45, 1.03, 0.7]}
      />
      <mesh
        geometry={nodes.Wall105.geometry}
        material={nodes.Wall105.material}
        position={[0.14, 0.19, 1.93]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Wall110.geometry}
        material={materials.Wall}
        position={[-4.27, 0.17, 2.22]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Stairs001.geometry}
        material={materials.stairs}
        position={[-4.32, 0.13, 2.75]}
        scale={[0.15, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.Wall108.geometry}
        material={materials.Ground}
        position={[-4.59, 0.19, 2.44]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Wall111.geometry}
        material={materials.Wall}
        position={[7.52, -0.01, 2.64]}
      />
      <mesh
        geometry={nodes.Wall045.geometry}
        material={materials.Wall}
        position={[9.89, -0.03, -4.34]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.45, 1.03, 0.7]}
      />
      <mesh
        geometry={nodes.Stairs017.geometry}
        material={materials.stairs}
        position={[-0.23, 0, 2.19]}
        scale={[0.15, 0.05, -0.07]}
      />
      <mesh
        geometry={nodes.Wall048.geometry}
        material={materials.Ground}
        position={[5.26, 0.19, 1.97]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Stairs014.geometry}
        material={materials.stairs}
        position={[5.33, 0.13, 2.28]}
        scale={[0.15, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.Wall051.geometry}
        material={materials.Ground}
        position={[9.89, 0.19, 1.49]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Stairs004.geometry}
        material={materials.stairs}
        position={[9.99, 0.13, 1.8]}
        scale={[0.2, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.Stairs012.geometry}
        material={materials.stairs}
        position={[10.52, 0.21, 1.53]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.2, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.Stairs006.geometry}
        material={materials.stairs}
        position={[-10.26, 0.21, 2.32]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.28, 0.03, 0.09]}
      />
      <mesh
        geometry={nodes.Stairs013.geometry}
        material={materials.stairs}
        position={[-10.65, 0.13, 2.67]}
        scale={[0.28, 0.03, 0.09]}
      />
      <mesh
        geometry={nodes.Wall053.geometry}
        material={materials.Ground}
        position={[0.14, 0.19, 1.93]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Wall054.geometry}
        material={nodes.Wall054.material}
        position={[0.14, 0.19, 1.93]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.65, 0.11, 0.59]}
      />
      <mesh
        geometry={nodes.Wall133.geometry}
        material={materials.Ground}
        position={[-10.75, 0.2, 2.27]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 0.11, 1]}
      />
      <mesh
        geometry={nodes.Wall055.geometry}
        material={materials.Ground}
        position={[-11.65, 0.19, -0.94]}
        scale={[0.7, 0.11, -0.59]}
      />
      <mesh
        geometry={nodes.Stairs018.geometry}
        material={materials.stairs}
        position={[-11.62, 0.21, -0.61]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.15, 0.03, -0.07]}
      />
      <mesh
        geometry={nodes.Stairs019.geometry}
        material={materials.stairs}
        position={[-11.36, 0.13, -0.86]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.03, -0.07]}
      />
      <mesh
        geometry={nodes.Stairs009.geometry}
        material={materials.stairs}
        position={[-4.52, -0.15, 2.48]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.11, 0.07]}
      />
      <mesh
        geometry={nodes.Stairs010.geometry}
        material={materials.stairs}
        position={[-10.26, -0.14, 2.31]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.28, 0.1, 0.1]}
      />
      <mesh
        geometry={nodes.Stairs015.geometry}
        material={nodes.Stairs015.material}
        position={[-11.63, -0.15, -0.61]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.15, 0.11, -0.07]}
      />
      <mesh
        geometry={nodes.Stairs020.geometry}
        material={materials.stairs}
        position={[0.43, -0.15, 1.98]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.11, 0.07]}
      />
      <mesh
        geometry={nodes.Stairs008.geometry}
        material={materials.stairs}
        position={[5.52, -0.14, 1.96]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.15, 0.1, 0.08]}
      />
      <mesh
        geometry={nodes.Stairs021.geometry}
        material={materials.stairs}
        position={[10.52, -0.15, 1.54]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.2, 0.11, 0.07]}
      />
      <mesh
        geometry={nodes.Trybuny.geometry}
        material={nodes.Trybuny.material}
        position={[-0.06, 0.01, -1.14]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.6, 0.8, 0.6]}
      />
      <mesh
        geometry={nodes.Wall012.geometry}
        material={materials.Wall}
        position={[-10.75, 0, 0.02]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall001.geometry}
        material={materials.Wall}
        position={[-10.16, 0, -1.02]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Ground}
        position={[0.16, -0.01, 0.15]}
        scale={[0.52, 1.07, 2.32]}
      />
      <mesh
        geometry={nodes.Wall003.geometry}
        material={materials.Wall}
        position={[-11.22, -0.01, -0.44]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Wall002.geometry}
        material={materials.Wall}
        position={[-11.82, -0.01, -0.53]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        geometry={nodes.Wall056.geometry}
        material={materials.Wall}
        position={[-10.16, -0.01, -0.53]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Wall004.geometry}
        material={materials.Wall}
        position={[-10.84, 0, 2.74]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.Wall}
        position={[-3.22, 0.09, 2]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.2, 0.25]}
      />
      <mesh
        geometry={nodes.Wall030.geometry}
        material={materials.Wall}
        position={[-1.94, -0.01, 2.58]}
        scale={[1, 0.52, 1]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.Wall}
        position={[-3.85, 0.13, -1.46]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.05, -0.15, 0.65]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Wall}
        position={[-3.17, 0.13, 0.14]}
        scale={[0.05, -0.15, 1.65]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Wall}
        position={[-4.54, 0.13, 0.39]}
        scale={[0.05, -0.15, 1.9]}
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
export default memo(Floor1);
//useGLTF.preload(floorGltf);
