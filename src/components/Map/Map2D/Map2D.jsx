import React, { useEffect, useRef, useMemo } from 'react';
import Panzoom from '@panzoom/panzoom';
import floor_1Img from '@assets/2Dplans/Floor-1.jpg';
import floor0Img from '@assets/2Dplans/Floor0.jpg';
import floor1Img from '@assets/2Dplans/Floor1.jpg';
import floor2Img from '@assets/2Dplans/Floor2.jpg';
import roomsLocations from '@data/roomsLocation.json';
import RoomLabel from './RoomLabel/RoomLabel';
import './Map2D.scss';
function Floors({ currentFloor, roomsToHighlight, messageToCamera }) {
  const floorImg = useRef();
  const listOfFloors = [floor_1Img, floor0Img, floor1Img, floor2Img];
  let startRoom = { ...roomsToHighlight.startRoom, status: 'start' };
  let endRoom = { ...roomsToHighlight.endRoom, status: 'end' };

  useEffect(() => {
    floorImg.current.panzoom = Panzoom(floorImg.current, {
      canvas: true,
      minScale: 0.6,
      maxScale: 8,
    });

    floorImg.current.parentElement.onwheel =
      floorImg.current.panzoom.zoomWithWheel;

    focusCameraOnPoint(
      floorImg.current.offsetWidth / 2,
      floorImg.current.offsetHeight / 2,
    );
  }, []);

  const focusCameraOnPoint = (x, z) => {
    x = -x + innerWidth / 2;
    z = -z + innerHeight / 2;
    floorImg.current.panzoom.zoom(1);
    floorImg.current.panzoom.pan(x, z);
  };

  const transformSize = (position) => {
    let newPosition = { x: 0, z: 0 };
    newPosition.x = (innerWidth * position.x) / 25;
    newPosition.z = (innerWidth * 0.4117 * position.z) / 10.2;

    return newPosition;
  };

  useEffect(() => {
    let position;
    switch (messageToCamera.nameOfAction) {
      case 'reset':
        focusCameraOnPoint(
          floorImg.current.offsetWidth / 2,
          floorImg.current.offsetHeight / 2,
        );

        break;
      case 'start':
        position = transformSize(roomsToHighlight.startRoom.room.position);
        focusCameraOnPoint(
          position.x + innerWidth / 2,
          position.z + innerHeight / 2,
        );
        break;
      case 'end':
        position = transformSize(roomsToHighlight.endRoom.room.position);
        focusCameraOnPoint(
          position.x + innerWidth / 2,
          position.z + innerHeight / 2,
        );
        break;
      case 'zoomIn':
        floorImg.current.panzoom.zoomIn();
        break;

      case 'zoomOut':
        floorImg.current.panzoom.zoomOut();
        break;
    }
  }, [messageToCamera.id]);

  return (
    <div
      className='Floors'
      onWheel={floorImg?.current && floorImg.current.panzoom.zoomWithWheel}
    >
      <div className='Floors__plan' ref={floorImg}>
        <img
          className={`Floors__floor`}
          src={listOfFloors[currentFloor + 1]}
          alt='Plan'
        />
        <div className='Floors__labels'>
          {useMemo(
            () => (
              <>
                {[startRoom, endRoom].map(
                  ({ floorNumber, room, status }, subIndex) => {
                    return (
                      floorNumber == currentFloor &&
                      room && (
                        <RoomLabel
                          key={subIndex}
                          room={{
                            ...room,
                            position: transformSize(room.position),
                          }}
                          status={status}
                        />
                      )
                    );
                  },
                )}
              </>
            ),
            [currentFloor, startRoom?.room?.name, endRoom?.room?.name],
          )}

          {useMemo(
            () => (
              <>
                {roomsLocations[`floor` + currentFloor].map(
                  (room, subIndex) => (
                    <RoomLabel
                      key={subIndex}
                      room={{ ...room, position: transformSize(room.position) }}
                    />
                  ),
                )}
              </>
            ),
            [currentFloor],
          )}
        </div>
      </div>
    </div>
  );
}

export default Floors;
