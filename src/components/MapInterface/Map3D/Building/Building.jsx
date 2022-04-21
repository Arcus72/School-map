import React from 'react';
import { Suspense } from 'react';
import roomsLocations from '@data/roomsLocation.json';
import Floor_1 from './Floor_1/Floor_1';
import TempFloor0 from './TempFloor0/TempFloor0';
import TempFloor1 from './TempFloor1/TempFloor1';
import TempFloor2 from './TempFloor2/TempFloor2';

const rooms = {
  start: '0 Szatnia 1',
  end: '0 Szatnia 2',
};
const findRoom = (roomNumber) => {
  for (const floor in roomsLocations) {
    for (const room of roomsLocations[floor]) {
      if (room.name == roomNumber)
        return {
          rooms: room,
          floor: floor,
        };
    }
  }
};

function Building({ floorNumber, roomsToHighlight = rooms }) {
  const startRoom = findRoom(roomsToHighlight.start);
  const endRoom = findRoom(roomsToHighlight.end);

  const scale = [3, 5, 3];
  return (
    <Suspense fallback={null}>
      <Floor_1
        roomsLocations={roomsLocations[`floor-1`]}
        isCurrentFloor={floorNumber === -1}
        scale={scale}
        startRoomToHighlight={startRoom.floor == 'floor-1' && startRoom.rooms}
        endRoomToHighlight={endRoom.floor == 'floor-1' && endRoom.rooms}
      />

      <TempFloor0
        isVisible={floorNumber >= 0}
        roomsLocations={roomsLocations[`floor0`]}
        isCurrentFloor={floorNumber === 0}
        scale={scale}
        startRoomToHighlight={startRoom.floor == 'floor0' && startRoom.rooms}
        endRoomToHighlight={endRoom.floor == 'floor0' && endRoom.rooms}
      />

      <TempFloor1
        isVisible={floorNumber >= 1}
        roomsLocations={roomsLocations[`floor1`]}
        isCurrentFloor={floorNumber === 1}
        scale={scale}
        startRoomToHighlight={startRoom.floor == 'floor1' && startRoom.rooms}
        endRoomToHighlight={endRoom.floor == 'floor1' && endRoom.rooms}
      />

      <TempFloor2
        isVisible={floorNumber >= 2}
        roomsLocations={roomsLocations[`floor2`]}
        isCurrentFloor={floorNumber === 2}
        scale={scale}
        startRoomToHighlight={startRoom.floor == 'floor2' && startRoom.rooms}
        endRoomToHighlight={endRoom.floor == 'floor2' && endRoom.rooms}
      />
    </Suspense>
  );
}

export default Building;
