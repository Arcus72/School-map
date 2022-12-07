import React, { memo, useState } from 'react';
import { Html } from '@react-three/drei';

import './RoomLabel.scss';

function RoomLabel({
  room: { displayName, position, alias = null },
  status = null,
}) {
  const [isAliasShow, setIsAliasShow] = useState(false);

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
      <div
        className='RoomLabel'
        onClick={() => setIsAliasShow((value) => !value)}
      >
        <div
          className={`RoomLabel__mainText
        ${status == 'start' ? 'RoomLabel__mainText--start' : ''}
        ${status == 'end' ? 'RoomLabel__mainText--end' : ''}`}
        >
          <span className={displayName == '7' ? 'RoomLabel--goldenText' : ''}>
            <span dangerouslySetInnerHTML={{ __html: displayName }}></span>
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

export default memo(RoomLabel);
