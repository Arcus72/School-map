import React, { memo } from 'react';
// Uncomment code and replace pointLight -> PointLightHelper to see helpers

// import { PointLightHelper } from 'three';
// import { useRef } from 'react';
// import { useHelper } from '@react-three/drei';

// const PointLightHelperCreator = (props) => {
//   const pointLight = useRef();
//   useHelper(pointLight, PointLightHelper, 0.5, 'hotpink');
//   return <pointLight ref={pointLight} {...props} />;
// };

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <pointLight intensity={0.5} position={[0, 30, 0]} />
      <pointLight intensity={0.5} position={[0, 30, 15]} />
      <pointLight intensity={0.5} position={[-40, 30, 5]} />
      <pointLight intensity={0.5} position={[40, 30, 5]} />

      <pointLight intensity={0.5} position={[20, 30, 5]} />

      <pointLight intensity={0.5} position={[60, 30, 5]} />
    </>
  );
}
export default memo(Lights);
