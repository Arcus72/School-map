import React, { memo, useState } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import PropTypes from 'prop-types';
import './RoomLabel.scss';

function RoomLabel({
  room: { displayName, position, alias = null },
  status = null,
}) {
  const [isAliasShow, setIsAliasShow] = useState(false);

  if (!status) {
    const { camera } = useThree();
    // Without camera's single movement, labels are incorrect rendered
    camera.position.x += 0.0000001;
  }

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  const zIndex = isAliasShow ? 200 : status ? 100 : 0;

  return (
    <Html
      position={Object.values(position)}
      zIndexRange={[zIndex, 0]}
      distanceFactor={isMobile ? 5 : 9}
      center
    >
      <div onClick={() => setIsAliasShow((value) => !value)}>
        <div
          className={`RoomLabel__mainText
        ${status == 'start' ? 'RoomLabel__mainText--start' : ''}
        ${status == 'end' ? 'RoomLabel__mainText--end' : ''}`}
        >
          <span className={displayName == '7' ? 'RoomLabel--goldenText' : ''}>
            {displayName}
            {alias && (
              <div
                className={`RoomLabel__arrowDown ${
                  isAliasShow ? 'RoomLabel__arrowDown--rotated ' : ''
                }`}
              ></div>
            )}
          </span>
        </div>
        {isAliasShow && alias && (
          <div
            dangerouslySetInnerHTML={{ __html: alias }}
            className='RoomLabel__subText'
          ></div>
        )}
      </div>
    </Html>
  );
}

RoomLabel.prototype = {
  status: PropTypes.oneOf(['start', 'end']),
  room: PropTypes.shape({
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      z: PropTypes.number,
    }),
    displayName: PropTypes.string,
    alias: PropTypes.string,
  }),
};

export default memo(RoomLabel);
