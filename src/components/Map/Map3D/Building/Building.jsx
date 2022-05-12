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

const findRoom = (roomName) => {
  let floorNumber = -1;
  for (const floor in roomsLocations) {
    for (const room of roomsLocations[floor]) {
      if (room.name == roomName)
        return {
          room: room,
          floorNumber: floorNumber,
        };
    }
    floorNumber++;
  }
};

function Building({ currentFloorNumber, roomsToHighlight }) {
  const startRoom = { ...findRoom(roomsToHighlight.start), status: 'start' };
  const endRoom = { ...findRoom(roomsToHighlight.end), status: 'end' };

  const floorsArr = [Floor_1, TempFloor0, TempFloor1, TempFloor2];
  const scale = [3, 5, 3];
  return (
    <Suspense fallback={null}>
      {floorsArr.map((Floor, index) => (
        <group scale={scale} position={[0, index * 1.5, 0]} key={index}>
          {[startRoom, endRoom].map((room) => {
            return (
              room &&
              room.floorNumber <= currentFloorNumber &&
              room.floorNumber == index - 1 && (
                <RoomPointer room={room.room} status={room.status} />
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
    start: PropTypes.string,
    end: PropTypes.string,
  }),
};

export default Building;
