import React, { useRef, useEffect, useState, memo } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import gsap from 'gsap';
const indexList = [-0.65, -1, -1.4];
function Floor({ isVisible = true, floorGltf, index }) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, floorGltf);

  let [timeLineGsap] = useState(gsap.timeline());

  useEffect(() => {
    document.hideLoader('.LoaderMap3D');
  }, []);

  useEffect(() => {
    timeLineGsap.clear();
    !isVisible
      ? timeLineGsap.to(group.current.position, {
          y: indexList[index - 1],
          duration: 0.5,
        })
      : timeLineGsap.to(group.current.position, { y: 0, duration: 0.5 });
  }, [isVisible]);

  return <primitive ref={group} object={gltf.scene} />;
}
export default memo(Floor);
