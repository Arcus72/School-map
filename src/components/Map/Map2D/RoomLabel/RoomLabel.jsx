import React, { useState, memo } from 'react';
import './RoomLabel.scss';
function RoomLabel({
  room: { displayName, position, alias = null },
  status = null,
}) {
  const [isAliasShow, setIsAliasShow] = useState(false);
  return (
    <div
      className='RoomLabel2D'
      style={{
        zIndex: isAliasShow ? 200 : status ? 100 : 0,
        top: position.z + '%',
        left: position.x + '%',
      }}
      onClick={() => alias && setIsAliasShow((value) => !value)}
    >
      <div
        className={`RoomLabel2D__mainText
  ${status == 'start' ? 'RoomLabel2D__mainText--start' : ''}
  ${status == 'end' ? 'RoomLabel2D__mainText--end' : ''}`}
      >
        <span className={displayName == '7' ? 'RoomLabel2D--goldenText' : ''}>
          <span dangerouslySetInnerHTML={{ __html: displayName }}></span>
          {alias && (
            <div
              className={`RoomLabel2D__arrowDown ${
                isAliasShow ? 'RoomLabel2D__arrowDown--rotated ' : ''
              }`}
            ></div>
          )}
        </span>
      </div>
      {isAliasShow && alias && (
        <div
          dangerouslySetInnerHTML={{ __html: alias }}
          className='RoomLabel2D__subText'
        ></div>
      )}
    </div>
  );
}

export default memo(RoomLabel);
