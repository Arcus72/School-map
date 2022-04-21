import React from 'react';
// Uncomment code to see helpers

import { PointLightHelper } from 'three';
import { useRef } from 'react';
import { useHelper } from '@react-three/drei';

const PointLightHelperCreator = (props) => {
  const pointLight = useRef();
  useHelper(pointLight, PointLightHelper, 0.5, 'hotpink');
  return <pointLight ref={pointLight} {...props} />;
};

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <PointLightHelperCreator intensity={0.8} position={[60, 50, -10]} />
      <PointLightHelperCreator intensity={0.8} position={[-60, 50, 10]} /> */
    </>
  );
}

export default Lights;
