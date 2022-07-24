import React from 'react';
import { Suspense } from 'react';
import roomsLocations from '@data/roomsLocation.json';
import RoomPointer from './RoomPointer/RoomPointer';
import PropTypes from 'prop-types';
import Floor_1 from './Floor_1/Floor_1';
import TempFloor0 from './TempFloor0/TempFloor0';
import TempFloor1 from './TempFloor1/TempFloor1';
import TempFloor2 from './TempFloor2/TempFloor2';
import RoomNumber from './RoomNumber/RoomNumber';

function Building({ currentFloorNumber, roomsToHighlight }) {
  const floorsArr = [Floor_1, TempFloor0, TempFloor1, TempFloor2];
  const scale = [3, 5, 3];

  let startRoom = { ...roomsToHighlight.startRoom, status: 'start' };
  let endRoom = { ...roomsToHighlight.endRoom, status: 'end' };

  return (
    <Suspense fallback={null}>
      {floorsArr.map((Floor, index) => (
        <group scale={scale} position={[0, index * 1.5, 0]} key={index}>
          {[startRoom, endRoom].map((room) => {
            return (
              room &&
              room.floorNumber <= currentFloorNumber &&
              room.floorNumber == index - 1 && (
                <RoomPointer
                  key={room.floorNumber + 2}
                  room={room.room}
                  status={room.status}
                />
              )
            );
          })}

          {currentFloorNumber === index - 1 &&
            roomsLocations[`floor` + (index - 1)].map((room, index) => (
              <RoomNumber key={index} {...room} />
            ))}
          <Floor
            scale={[1, 1, 1]}
            isVisible={currentFloorNumber >= index - 1}
          />
        </group>
      ))}
    </Suspense>
  );
}

Building.propTypes = {
  currentFloorNumber: PropTypes.number,
  roomsToHighlight: PropTypes.shape({
    start: PropTypes.shape({
      floorNumber: PropTypes.number,
      room: PropTypes.shape({
        name: PropTypes.string,
        displayName: PropTypes.string,
        position: PropTypes.shape({
          x: PropTypes.number,
          y: PropTypes.number,
          z: PropTypes.number,
        }),
      }),
    }),
    end: PropTypes.shape({
      floorNumber: PropTypes.number,
      room: PropTypes.shape({
        name: PropTypes.string,
        displayName: PropTypes.string,
        position: PropTypes.shape({
          x: PropTypes.number,
          y: PropTypes.number,
          z: PropTypes.number,
        }),
      }),
    }),
  }),
};

export default Building;
