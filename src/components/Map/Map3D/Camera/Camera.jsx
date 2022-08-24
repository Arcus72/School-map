import React, { useEffect, useRef, memo } from 'react';
import { MapControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
const mapControlsSettings = {
  maxPolarAngle: Math.PI / 2.5,
  minDistance: 30,
  maxDistance: 80,
  zoomSpeed: 1.5,
};
function Camera({ messageToCamera }) {
  const cameraRef = useRef();
  const { camera } = useThree();

  const focusCamera = ({ x, z }) => {
    const multiplier = 3;

    camera.position.set(x * multiplier, 20, z * multiplier + 15);
    cameraRef.current.target.set(x * multiplier, 0, z * multiplier);
  };

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
    }
  }, [messageToCamera.id]);

  return <MapControls ref={cameraRef} {...mapControlsSettings} />;
}

export default memo(Camera);
