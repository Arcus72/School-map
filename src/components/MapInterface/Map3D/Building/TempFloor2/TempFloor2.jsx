/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import RoomNumber from '../RoomNumber/RoomNumber';
import gsap from 'gsap';
import gltfFile from './Floor2.gltf';

export default function Floor2({
  isVisible = true,
  roomsLocations,
  isCurrentFloor,
  ...props
}) {
  console.log('Floor2');
  const group = useRef();
  const { nodes, materials } = useGLTF(gltfFile);
  const height = 2.8;

  useEffect(() => {
    !isVisible
      ? gsap.to(group.current.position, { y: 90, duration: 2 })
      : gsap.to(group.current.position, { y: height, duration: 2 });
  }, [isVisible]);
  return (
    <group ref={group} position={[0, height, 0]} {...props} dispose={null}>
      {isCurrentFloor &&
        roomsLocations.map((room, index) => (
          <RoomNumber key={index} {...room} />
        ))}
      <group position={[-11.04, 0, -0.52]}>
        <mesh
          geometry={nodes.Wall010_1.geometry}
          material={materials['Wall2_inside.001']}
        />
        <mesh
          geometry={nodes.Wall010_2.geometry}
          material={materials['Wall2_outside.001']}
        />
        <mesh
          geometry={nodes.Wall010_3.geometry}
          material={materials['Wall2_cuts.001']}
        />
      </group>
      <group position={[-10.58, 0, -0.55]}>
        <mesh
          geometry={nodes.Wall011_1.geometry}
          material={materials['Wall2_inside.002']}
        />
        <mesh
          geometry={nodes.Wall011_2.geometry}
          material={materials['Wall2_outside.002']}
        />
        <mesh
          geometry={nodes.Wall011_3.geometry}
          material={materials['Wall2_cuts.002']}
        />
      </group>
      <group position={[-9.98, 0, 1.4]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall012_1.geometry}
          material={materials['Wall2_inside.003']}
        />
        <mesh
          geometry={nodes.Wall012_2.geometry}
          material={materials['Wall2_outside.003']}
        />
        <mesh
          geometry={nodes.Wall012_3.geometry}
          material={materials['Wall2_cuts.003']}
        />
      </group>
      <group position={[-9.98, 0, 0.94]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall013_1.geometry}
          material={materials['Wall2_inside.004']}
        />
        <mesh
          geometry={nodes.Wall013_2.geometry}
          material={materials['Wall2_outside.004']}
        />
        <mesh
          geometry={nodes.Wall013_3.geometry}
          material={materials['Wall2_cuts.004']}
        />
      </group>
      <group position={[-9.98, 0, 2.11]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall014_1.geometry}
          material={materials['Wall2_inside.005']}
        />
        <mesh
          geometry={nodes.Wall014_2.geometry}
          material={materials['Wall2_outside.005']}
        />
        <mesh
          geometry={nodes.Wall014_3.geometry}
          material={materials['Wall2_cuts.005']}
        />
      </group>
      <group position={[-9.98, 0, 1.85]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall015_1.geometry}
          material={materials['Wall2_inside.006']}
        />
        <mesh
          geometry={nodes.Wall015_2.geometry}
          material={materials['Wall2_outside.006']}
        />
        <mesh
          geometry={nodes.Wall015_3.geometry}
          material={materials['Wall2_cuts.006']}
        />
      </group>
      <group position={[-9.98, 0, 0.47]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall016_1.geometry}
          material={materials['Wall2_inside.007']}
        />
        <mesh
          geometry={nodes.Wall016_2.geometry}
          material={materials['Wall2_outside.007']}
        />
        <mesh
          geometry={nodes.Wall016_3.geometry}
          material={materials['Wall2_cuts.007']}
        />
      </group>
      <group position={[-10.22, 0, 0.47]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall017_1.geometry}
          material={materials['Wall2_inside.008']}
        />
        <mesh
          geometry={nodes.Wall017_2.geometry}
          material={materials['Wall2_outside.008']}
        />
        <mesh
          geometry={nodes.Wall017_3.geometry}
          material={materials['Wall2_cuts.008']}
        />
      </group>
      <group position={[-11.04, 0, 0.2]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall018_1.geometry}
          material={materials['Wall2_inside.009']}
        />
        <mesh
          geometry={nodes.Wall018_2.geometry}
          material={materials['Wall2_outside.009']}
        />
        <mesh
          geometry={nodes.Wall018_3.geometry}
          material={materials['Wall2_cuts.009']}
        />
      </group>
      <group position={[-11.04, 0, 1.45]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall019_1.geometry}
          material={materials['Wall2_inside.010']}
        />
        <mesh
          geometry={nodes.Wall019_2.geometry}
          material={materials['Wall2_outside.010']}
        />
        <mesh
          geometry={nodes.Wall019_3.geometry}
          material={materials['Wall2_cuts.010']}
        />
      </group>
      <group position={[-11.04, 0, 2.89]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall020_1.geometry}
          material={materials['Wall2_inside.011']}
        />
        <mesh
          geometry={nodes.Wall020_2.geometry}
          material={materials['Wall2_outside.011']}
        />
        <mesh
          geometry={nodes.Wall020_3.geometry}
          material={materials['Wall2_cuts.011']}
        />
      </group>
      <group position={[-11, 0, 3.39]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall021_1.geometry}
          material={materials['Wall2_inside.012']}
        />
        <mesh
          geometry={nodes.Wall021_2.geometry}
          material={materials['Wall2_outside.012']}
        />
        <mesh
          geometry={nodes.Wall021_3.geometry}
          material={materials['Wall2_cuts.012']}
        />
      </group>
      <group position={[-11.29, 0, 2.97]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          geometry={nodes.Wall022_1.geometry}
          material={materials['Wall2_inside.013']}
        />
        <mesh
          geometry={nodes.Wall022_2.geometry}
          material={materials['Wall2_outside.013']}
        />
        <mesh
          geometry={nodes.Wall022_3.geometry}
          material={materials['Wall2_cuts.013']}
        />
      </group>
      <group position={[-10.39, 0, 4.44]}>
        <mesh
          geometry={nodes.Wall024_1.geometry}
          material={materials['Wall2_inside.015']}
        />
        <mesh
          geometry={nodes.Wall024_2.geometry}
          material={materials['Wall2_outside.015']}
        />
        <mesh
          geometry={nodes.Wall024_3.geometry}
          material={materials['Wall2_cuts.015']}
        />
      </group>
      <group position={[-11.65, 0, 4.11]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall025_1.geometry}
          material={materials['Wall2_inside.016']}
        />
        <mesh
          geometry={nodes.Wall025_2.geometry}
          material={materials['Wall2_outside.016']}
        />
        <mesh
          geometry={nodes.Wall025_3.geometry}
          material={materials['Wall2_cuts.016']}
        />
      </group>
      <group position={[-10.26, 0, 2.13]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          geometry={nodes.Wall027_1.geometry}
          material={materials['Wall2_inside.018']}
        />
        <mesh
          geometry={nodes.Wall027_2.geometry}
          material={materials['Wall2_outside.018']}
        />
        <mesh
          geometry={nodes.Wall027_3.geometry}
          material={materials['Wall2_cuts.018']}
        />
      </group>
      <group position={[-9.91, 0, 2.29]}>
        <mesh
          geometry={nodes.Wall028_1.geometry}
          material={materials['Wall2_inside.019']}
        />
        <mesh
          geometry={nodes.Wall028_2.geometry}
          material={materials['Wall2_outside.019']}
        />
        <mesh
          geometry={nodes.Wall028_3.geometry}
          material={materials['Wall2_cuts.019']}
        />
      </group>
      <group position={[-10.35, 0, 2.4]}>
        <mesh
          geometry={nodes.Wall029_1.geometry}
          material={materials['Wall2_inside.020']}
        />
        <mesh
          geometry={nodes.Wall029_2.geometry}
          material={materials['Wall2_outside.020']}
        />
        <mesh
          geometry={nodes.Wall029_3.geometry}
          material={materials['Wall2_cuts.020']}
        />
      </group>
      <group position={[-9.91, 0, 2.72]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall030_1.geometry}
          material={materials['Wall2_inside.021']}
        />
        <mesh
          geometry={nodes.Wall030_2.geometry}
          material={materials['Wall2_outside.021']}
        />
        <mesh
          geometry={nodes.Wall030_3.geometry}
          material={materials['Wall2_cuts.021']}
        />
      </group>
      <group position={[-8.87, 0, 2.29]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Wall031_1.geometry}
          material={materials['Wall2_inside.022']}
        />
        <mesh
          geometry={nodes.Wall031_2.geometry}
          material={materials['Wall2_outside.022']}
        />
        <mesh
          geometry={nodes.Wall031_3.geometry}
          material={materials['Wall2_cuts.022']}
        />
      </group>
      <group position={[-6.69, 0, 2.28]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Wall032_1.geometry}
          material={materials['Wall2_inside.023']}
        />
        <mesh
          geometry={nodes.Wall032_2.geometry}
          material={materials['Wall2_outside.023']}
        />
        <mesh
          geometry={nodes.Wall032_3.geometry}
          material={materials['Wall2_cuts.023']}
        />
      </group>
      <group position={[-7.74, 0, 2.28]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Wall033_1.geometry}
          material={materials['Wall2_inside.024']}
        />
        <mesh
          geometry={nodes.Wall033_2.geometry}
          material={materials['Wall2_outside.024']}
        />
        <mesh
          geometry={nodes.Wall033_3.geometry}
          material={materials['Wall2_cuts.024']}
        />
      </group>
      <group position={[-6.92, 0, 2.47]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall034_1.geometry}
          material={materials['Wall2_inside.025']}
        />
        <mesh
          geometry={nodes.Wall034_2.geometry}
          material={materials['Wall2_outside.025']}
        />
        <mesh
          geometry={nodes.Wall034_3.geometry}
          material={materials['Wall2_cuts.025']}
        />
      </group>
      <group position={[-6.69, 0, 3.08]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Wall035_1.geometry}
          material={materials['Wall2_inside.026']}
        />
        <mesh
          geometry={nodes.Wall035_2.geometry}
          material={materials['Wall2_outside.026']}
        />
        <mesh
          geometry={nodes.Wall035_3.geometry}
          material={materials['Wall2_cuts.026']}
        />
      </group>
      <group position={[-4.35, 0, 1.82]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall036_1.geometry}
          material={materials['Wall2_inside.027']}
        />
        <mesh
          geometry={nodes.Wall036_2.geometry}
          material={materials['Wall2_outside.027']}
        />
        <mesh
          geometry={nodes.Wall036_3.geometry}
          material={materials['Wall2_cuts.027']}
        />
      </group>
      <group position={[-4.35, 0, 2.2]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall037_1.geometry}
          material={materials['Wall2_inside.028']}
        />
        <mesh
          geometry={nodes.Wall037_2.geometry}
          material={materials['Wall2_outside.028']}
        />
        <mesh
          geometry={nodes.Wall037_3.geometry}
          material={materials['Wall2_cuts.028']}
        />
      </group>
      <group position={[-4.03, 0, 2.2]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall038_1.geometry}
          material={materials['Wall2_inside.029']}
        />
        <mesh
          geometry={nodes.Wall038_2.geometry}
          material={materials['Wall2_outside.029']}
        />
        <mesh
          geometry={nodes.Wall038_3.geometry}
          material={materials['Wall2_cuts.029']}
        />
      </group>
      <group position={[-3.36, 0, 3.09]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Wall039_1.geometry}
          material={materials['Wall2_inside.030']}
        />
        <mesh
          geometry={nodes.Wall039_2.geometry}
          material={materials['Wall2_outside.030']}
        />
        <mesh
          geometry={nodes.Wall039_3.geometry}
          material={materials['Wall2_cuts.030']}
        />
      </group>
      <group position={[-3.04, 0, 1.73]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall041_1.geometry}
          material={materials['Wall2_inside.032']}
        />
        <mesh
          geometry={nodes.Wall041_2.geometry}
          material={materials['Wall2_outside.032']}
        />
        <mesh
          geometry={nodes.Wall041_3.geometry}
          material={materials['Wall2_cuts.032']}
        />
      </group>
      <group position={[-4.35, 0, 1.82]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall042_1.geometry}
          material={materials['Wall2_inside.033']}
        />
        <mesh
          geometry={nodes.Wall042_2.geometry}
          material={materials['Wall2_outside.033']}
        />
        <mesh
          geometry={nodes.Wall042_3.geometry}
          material={materials['Wall2_cuts.033']}
        />
      </group>
      <group position={[-3.34, 0, 3.09]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          geometry={nodes.Wall043_1.geometry}
          material={materials['Wall2_inside.034']}
        />
        <mesh
          geometry={nodes.Wall043_2.geometry}
          material={materials['Wall2_outside.034']}
        />
        <mesh
          geometry={nodes.Wall043_3.geometry}
          material={materials['Wall2_cuts.034']}
        />
      </group>
      <group position={[-3.28, 0, 3.09]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall044_1.geometry}
          material={materials['Wall2_inside.035']}
        />
        <mesh
          geometry={nodes.Wall044_2.geometry}
          material={materials['Wall2_outside.035']}
        />
        <mesh
          geometry={nodes.Wall044_3.geometry}
          material={materials['Wall2_cuts.035']}
        />
      </group>
      <group position={[-3.28, 0, 2.75]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall045_1.geometry}
          material={materials['Wall2_inside.036']}
        />
        <mesh
          geometry={nodes.Wall045_2.geometry}
          material={materials['Wall2_outside.036']}
        />
        <mesh
          geometry={nodes.Wall045_3.geometry}
          material={materials['Wall2_cuts.036']}
        />
      </group>
      <group position={[-4.04, 0, 2.52]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall046_1.geometry}
          material={materials['Wall2_inside.037']}
        />
        <mesh
          geometry={nodes.Wall046_2.geometry}
          material={materials['Wall2_outside.037']}
        />
        <mesh
          geometry={nodes.Wall046_3.geometry}
          material={materials['Wall2_cuts.037']}
        />
      </group>
      <group position={[-3.73, 0, 1.73]}>
        <mesh
          geometry={nodes.Wall047_1.geometry}
          material={materials['Wall2_inside.038']}
        />
        <mesh
          geometry={nodes.Wall047_2.geometry}
          material={materials['Wall2_outside.038']}
        />
        <mesh
          geometry={nodes.Wall047_3.geometry}
          material={materials['Wall2_cuts.038']}
        />
      </group>
      <group position={[-4.35, 0, 0.96]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall048_1.geometry}
          material={materials['Wall2_inside.039']}
        />
        <mesh
          geometry={nodes.Wall048_2.geometry}
          material={materials['Wall2_outside.039']}
        />
        <mesh
          geometry={nodes.Wall048_3.geometry}
          material={materials['Wall2_cuts.039']}
        />
      </group>
      <group position={[-4.35, 0, 0.73]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall049_1.geometry}
          material={materials['Wall2_inside.040']}
        />
        <mesh
          geometry={nodes.Wall049_2.geometry}
          material={materials['Wall2_outside.040']}
        />
        <mesh
          geometry={nodes.Wall049_3.geometry}
          material={materials['Wall2_cuts.040']}
        />
      </group>
      <group position={[-4.35, 0, 0.26]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall050_1.geometry}
          material={materials['Wall2_inside.041']}
        />
        <mesh
          geometry={nodes.Wall050_2.geometry}
          material={materials['Wall2_outside.041']}
        />
        <mesh
          geometry={nodes.Wall050_3.geometry}
          material={materials['Wall2_cuts.041']}
        />
      </group>
      <group position={[-4.35, 0, -0.22]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall051_1.geometry}
          material={materials['Wall2_inside.042']}
        />
        <mesh
          geometry={nodes.Wall051_2.geometry}
          material={materials['Wall2_outside.042']}
        />
        <mesh
          geometry={nodes.Wall051_3.geometry}
          material={materials['Wall2_cuts.042']}
        />
      </group>
      <group position={[-3.64, 0, -0.22]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall052_1.geometry}
          material={materials['Wall2_inside.043']}
        />
        <mesh
          geometry={nodes.Wall052_2.geometry}
          material={materials['Wall2_outside.043']}
        />
        <mesh
          geometry={nodes.Wall052_3.geometry}
          material={materials['Wall2_cuts.043']}
        />
      </group>
      <group position={[-3.65, 0, -0.98]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall053_1.geometry}
          material={materials['Wall2_inside.044']}
        />
        <mesh
          geometry={nodes.Wall053_2.geometry}
          material={materials['Wall2_outside.044']}
        />
        <mesh
          geometry={nodes.Wall053_3.geometry}
          material={materials['Wall2_cuts.044']}
        />
      </group>
      <group position={[-1.83, 0, 2.52]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall054_1.geometry}
          material={materials['Wall2_inside.045']}
        />
        <mesh
          geometry={nodes.Wall054_2.geometry}
          material={materials['Wall2_outside.045']}
        />
        <mesh
          geometry={nodes.Wall054_3.geometry}
          material={materials['Wall2_cuts.045']}
        />
      </group>
      <group position={[-1.82, 0, 2.71]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall055_1.geometry}
          material={materials['Wall2_inside.046']}
        />
        <mesh
          geometry={nodes.Wall055_2.geometry}
          material={materials['Wall2_outside.046']}
        />
        <mesh
          geometry={nodes.Wall055_3.geometry}
          material={materials['Wall2_cuts.046']}
        />
      </group>
      <group position={[-3.65, 0, 0.02]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall056_1.geometry}
          material={materials['Wall2_inside.047']}
        />
        <mesh
          geometry={nodes.Wall056_2.geometry}
          material={materials['Wall2_outside.047']}
        />
        <mesh
          geometry={nodes.Wall056_3.geometry}
          material={materials['Wall2_cuts.047']}
        />
      </group>
      <group position={[-1.32, 0, 2.49]}>
        <mesh
          geometry={nodes.Wall057_1.geometry}
          material={materials['Wall2_inside.048']}
        />
        <mesh
          geometry={nodes.Wall057_2.geometry}
          material={materials['Wall2_outside.048']}
        />
        <mesh
          geometry={nodes.Wall057_3.geometry}
          material={materials['Wall2_cuts.048']}
        />
      </group>
      <group position={[-1.29, 0, 3.38]}>
        <mesh
          geometry={nodes.Wall058_1.geometry}
          material={materials['Wall2_inside.049']}
        />
        <mesh
          geometry={nodes.Wall058_2.geometry}
          material={materials['Wall2_outside.049']}
        />
        <mesh
          geometry={nodes.Wall058_3.geometry}
          material={materials['Wall2_cuts.049']}
        />
      </group>
      <group position={[-0.83, 0, 3.38]}>
        <mesh
          geometry={nodes.Wall059_1.geometry}
          material={materials['Wall2_inside.050']}
        />
        <mesh
          geometry={nodes.Wall059_2.geometry}
          material={materials['Wall2_outside.050']}
        />
        <mesh
          geometry={nodes.Wall059_3.geometry}
          material={materials['Wall2_cuts.050']}
        />
      </group>
      <group position={[-0.36, 0, 3.38]}>
        <mesh
          geometry={nodes.Wall060_1.geometry}
          material={materials['Wall2_inside.051']}
        />
        <mesh
          geometry={nodes.Wall060_2.geometry}
          material={materials['Wall2_outside.051']}
        />
        <mesh
          geometry={nodes.Wall060_3.geometry}
          material={materials['Wall2_cuts.051']}
        />
      </group>
      <group position={[-0.11, 0, 3.85]}>
        <mesh
          geometry={nodes.Wall061_1.geometry}
          material={materials['Wall2_inside.052']}
        />
        <mesh
          geometry={nodes.Wall061_2.geometry}
          material={materials['Wall2_outside.052']}
        />
        <mesh
          geometry={nodes.Wall061_3.geometry}
          material={materials['Wall2_cuts.052']}
        />
      </group>
      <group position={[-0.11, 0, 3.43]}>
        <mesh
          geometry={nodes.Wall062_1.geometry}
          material={materials['Wall2_inside.053']}
        />
        <mesh
          geometry={nodes.Wall062_2.geometry}
          material={materials['Wall2_outside.053']}
        />
        <mesh
          geometry={nodes.Wall062_3.geometry}
          material={materials['Wall2_cuts.053']}
        />
      </group>
      <group position={[-0.79, 0, 2.49]}>
        <mesh
          geometry={nodes.Wall063_1.geometry}
          material={materials['Wall2_inside.054']}
        />
        <mesh
          geometry={nodes.Wall063_2.geometry}
          material={materials['Wall2_outside.054']}
        />
        <mesh
          geometry={nodes.Wall063_3.geometry}
          material={materials['Wall2_cuts.054']}
        />
      </group>
      <group position={[0.82, 0, 1.16]} rotation={[0, 1.57, 0]}>
        <mesh
          geometry={nodes.Wall064_1.geometry}
          material={materials['Wall2_inside.055']}
        />
        <mesh
          geometry={nodes.Wall064_2.geometry}
          material={materials['Wall2_outside.055']}
        />
        <mesh
          geometry={nodes.Wall064_3.geometry}
          material={materials['Wall2_cuts.055']}
        />
      </group>
      <group position={[0.82, 0, 0.43]} rotation={[0, 1.57, 0]}>
        <mesh
          geometry={nodes.Wall065_1.geometry}
          material={materials['Wall2_inside.056']}
        />
        <mesh
          geometry={nodes.Wall065_2.geometry}
          material={materials['Wall2_outside.056']}
        />
        <mesh
          geometry={nodes.Wall065_3.geometry}
          material={materials['Wall2_cuts.056']}
        />
      </group>
      <group position={[0.82, 0, 0.05]} rotation={[0, 1.57, 0]}>
        <mesh
          geometry={nodes.Wall066.geometry}
          material={materials['Wall2_inside.057']}
        />
        <mesh
          geometry={nodes.Wall066_1.geometry}
          material={materials['Wall2_outside.057']}
        />
        <mesh
          geometry={nodes.Wall066_2.geometry}
          material={materials['Wall2_cuts.057']}
        />
      </group>
      <group position={[0.82, 0, -0.33]} rotation={[0, 1.57, 0]}>
        <mesh
          geometry={nodes.Wall067.geometry}
          material={materials['Wall2_inside.058']}
        />
        <mesh
          geometry={nodes.Wall067_1.geometry}
          material={materials['Wall2_outside.058']}
        />
        <mesh
          geometry={nodes.Wall067_2.geometry}
          material={materials['Wall2_cuts.058']}
        />
      </group>
      <group position={[0.82, 0, -1.05]} rotation={[0, 1.57, 0]}>
        <mesh
          geometry={nodes.Wall068.geometry}
          material={materials['Wall2_inside.059']}
        />
        <mesh
          geometry={nodes.Wall068_1.geometry}
          material={materials['Wall2_outside.059']}
        />
        <mesh
          geometry={nodes.Wall068_2.geometry}
          material={materials['Wall2_cuts.059']}
        />
      </group>
      <group position={[0.82, 0, -1.38]} rotation={[0, 1.57, 0]}>
        <mesh
          geometry={nodes.Wall069.geometry}
          material={materials['Wall2_inside.060']}
        />
        <mesh
          geometry={nodes.Wall069_1.geometry}
          material={materials['Wall2_outside.060']}
        />
        <mesh
          geometry={nodes.Wall069_2.geometry}
          material={materials['Wall2_cuts.060']}
        />
      </group>
      <group position={[0.44, 0, -1.03]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Wall070.geometry}
          material={materials['Wall2_inside.061']}
        />
        <mesh
          geometry={nodes.Wall070_1.geometry}
          material={materials['Wall2_outside.061']}
        />
        <mesh
          geometry={nodes.Wall070_2.geometry}
          material={materials['Wall2_cuts.061']}
        />
      </group>
      <group position={[0.43, 0, 1.16]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Wall071.geometry}
          material={materials['Wall2_inside.062']}
        />
        <mesh
          geometry={nodes.Wall071_1.geometry}
          material={materials['Wall2_outside.062']}
        />
        <mesh
          geometry={nodes.Wall071_2.geometry}
          material={materials['Wall2_cuts.062']}
        />
      </group>
      <mesh
        geometry={nodes.Stairs.geometry}
        material={materials.Stairs_material}
        position={[-7.58, 0, 2.77]}
        scale={[0.3, 0.2, 0.2]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials['Wall2_alt5.047']}
        position={[-0.83, -0.01, 2.68]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[0.19, 0.47, 1.04]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials['Wall2_alt5.047']}
        position={[11.01, -0.01, -0.36]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[1, 0.47, 0.89]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials['Wall2_alt5.047']}
        position={[5.18, -0.01, 2.58]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[0.21, 0.47, 4.76]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials['Wall2_alt5.047']}
        position={[-0.66, -0.01, -0.06]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[0.41, 0.52, 1.5]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials['Wall2_alt5.047']}
        position={[-0.95, -0.01, 1.75]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[0.04, 0.52, 1.2]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials['Wall2_alt5.047']}
        position={[-0.47, -0.01, 3.65]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[0.05, 0.47, 0.33]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials['Wall2_alt5.047']}
        position={[-10.81, -0.01, 1.23]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[0.81, 0.47, 0.88]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials['Wall2_alt5.037']}
        position={[-6.41, -0.01, 2.86]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[0.15, 0.44, 3.39]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials['Wall2_alt5.047']}
        position={[-3.69, -0.01, 0.4]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[0.46, 0.59, 0.71]}
      />
      <group position={[0.87, 0, -1.74]}>
        <mesh
          geometry={nodes.Wall001_1.geometry}
          material={materials.Wall2_inside}
        />
        <mesh
          geometry={nodes.Wall001_2.geometry}
          material={materials.Wall2_outside}
        />
        <mesh
          geometry={nodes.Wall001_3.geometry}
          material={materials.Wall2_cuts}
        />
      </group>
      <group position={[10.08, 0, -4.3]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall002_1.geometry}
          material={materials.Wall2_inside}
        />
        <mesh
          geometry={nodes.Wall002_2.geometry}
          material={materials.Wall2_outside}
        />
        <mesh
          geometry={nodes.Wall002_3.geometry}
          material={materials.Wall2_cuts}
        />
      </group>
      <group position={[10.03, 0, 1.96]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          geometry={nodes.Wall004_1.geometry}
          material={materials.Wall2_inside}
        />
        <mesh
          geometry={nodes.Wall004_2.geometry}
          material={materials.Wall2_outside}
        />
        <mesh
          geometry={nodes.Wall004_3.geometry}
          material={materials.Wall2_cuts}
        />
      </group>
      <group position={[-11.64, 0, -0.94]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Wall005_1.geometry}
          material={materials.Wall2_inside}
        />
        <mesh
          geometry={nodes.Wall005_2.geometry}
          material={materials.Wall2_outside}
        />
        <mesh
          geometry={nodes.Wall005_3.geometry}
          material={materials.Wall2_cuts}
        />
      </group>
      <group position={[-11.65, 0, -0.46]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall006_1.geometry}
          material={materials.Wall2_inside}
        />
        <mesh
          geometry={nodes.Wall006_2.geometry}
          material={materials.Wall2_outside}
        />
        <mesh
          geometry={nodes.Wall006_3.geometry}
          material={materials.Wall2_cuts}
        />
      </group>
      <group position={[-10, 0, -0.55]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall007_1.geometry}
          material={materials.Wall2_inside}
        />
        <mesh
          geometry={nodes.Wall007_2.geometry}
          material={materials.Wall2_outside}
        />
        <mesh
          geometry={nodes.Wall007_3.geometry}
          material={materials.Wall2_cuts}
        />
      </group>
      <group position={[-9.98, 0, 0.01]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Wall009_1.geometry}
          material={materials.Wall2_inside}
        />
        <mesh
          geometry={nodes.Wall009_2.geometry}
          material={materials.Wall2_outside}
        />
        <mesh
          geometry={nodes.Wall009_3.geometry}
          material={materials.Wall2_cuts}
        />
      </group>
    </group>
  );
}

useGLTF.preload(gltfFile);
