import React, { useState, useEffect, useRef, memo } from 'react';
import { MapControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const mapControlsSettings = {
  maxPolarAngle: Math.PI / 2.5,
  minDistance: 0,
  maxDistance: 70,
  zoomSpeed: 1.5,
  enableDamping: false,
};

function Camera({ messageToCamera }) {
  const [camera] = useState(useThree().camera);
  const cameraRef = useRef();

  const focusCamera = ({ x, z }) => {
    const multiplier = 3;
    camera.position.set(x * multiplier, 20, z * multiplier + 15);
    cameraRef.current.target.set(x * multiplier, 0, z * multiplier);
  };

  function zoom(constant) {
    camera.position.x = camera.position.x * constant;
    camera.position.y = camera.position.y * constant;
    camera.position.z = camera.position.z * constant;
  }

  useEffect(() => {
    switch (messageToCamera.nameOfAction) {
      case 'reset':
        cameraRef.current.reset();
        break;
      case 'start':
        focusCamera(messageToCamera.roomsToHighlight.startRoom.room.position);
        break;
      case 'end':
        focusCamera(messageToCamera.roomsToHighlight.endRoom.room.position);
        break;
      case 'zoomIn':
        zoom(0.7);

        break;
      case 'zoomOut':
        zoom(1.3);

        break;
    }
  }, [messageToCamera.id]);

  return <MapControls ref={cameraRef} {...mapControlsSettings} />;
}

export default memo(Camera);
