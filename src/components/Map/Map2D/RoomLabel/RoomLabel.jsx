import React, { useState, memo } from 'react';
import './RoomLabel.scss';
function RoomLabel({
  room: { displayName, position, alias = null },
  status = null,
}) {
  const [isAliasShow, setIsAliasShow] = useState(false);
  return (
    <div
      className='RoomLabel  RoomLabel--2D'
      style={{
        zIndex: isAliasShow ? 200 : status ? 100 : 0,
        transform: ` translate(calc(-50% + ${position.x}px),calc(-50% + ${position.z}px)`,
      }}
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
  );
}

export default memo(RoomLabel);
