import React from 'react';
import { Canvas } from '@react-three/fiber';
import { DoubleSide } from 'three';
import './Map3D.scss';
import PropTypes from 'prop-types';

import Lights from './Lights/Lights';
import Camera from './Camera/Camera';
import Building from './Building/Building';

function Map3D({ roomsToHighlight, currentFloor }) {
  return (
    <Canvas className='Map3D' camera={{ position: [0, 20, 20], fov: 75 }}>
      <Camera />
      <Lights />

      <Building
        roomsToHighlight={roomsToHighlight}
        currentFloorNumber={currentFloor}
      />

      <mesh
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      >
        <planeBufferGeometry />

        <meshBasicMaterial color='white' side={DoubleSide} />
      </mesh>
    </Canvas>
  );
}

Map3D.propTypes = {
  roomsToHighlight: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }),
};

export default Map3D;