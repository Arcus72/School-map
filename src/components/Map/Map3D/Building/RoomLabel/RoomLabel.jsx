import React from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import PropTypes from 'prop-types';
import './RoomLabel.scss';

function RoomLabel({ displayName, position }) {
  const { camera } = useThree();
  // Without camera's single movement, labels are incorrect rendered
  camera.position.x += 0.0000001;

  let isMobile =
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i);

  return (
    <Html
      position={Object.values(position)}
      zIndexRange={[100, 0]}
      distanceFactor={isMobile ? 5 : 9}
      center
    >
      <div className={`RoomNumber__background `}>
        <span className={displayName == '7' && 'RoomNumber--goldenText'}>
          {displayName}
        </span>
      </div>
    </Html>
  );
}

RoomLabel.prototype = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  displayName: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomLabel;
