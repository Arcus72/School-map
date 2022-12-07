import React, { useMemo, Suspense } from 'react';
import roomsLocations from '@data/roomsLocation.json';

import Floor_1 from './Floor_1/Floor_1';
import Floor0 from './Floor0/Floor0';
import Floor1 from './Floor1/Floor1';
import Floor2 from './Floor2/Floor2';
import RoomLabel from './RoomLabel/RoomLabel';

function Building({ currentFloorNumber, roomsToHighlight }) {
  const scale = [3, 5, 3];
  const floorHeight = [1.51, 1.5, 1.51, 1.53];
  let startRoom = { ...roomsToHighlight.startRoom, status: 'start' };
  let endRoom = { ...roomsToHighlight.endRoom, status: 'end' };

  return (
    <group>
      {[Floor_1, Floor0, Floor1, Floor2].map((Floor, index) => {
        return (
          <group
            scale={scale}
            position={[0, index * floorHeight[index], 0]}
            key={index}
          >
            {[startRoom, endRoom].map((room, subIndex) => {
              return (
                room.floorNumber <= currentFloorNumber &&
                room.floorNumber == index - 1 && (
                  <RoomLabel
                    key={subIndex}
                    room={room.room}
                    status={room.status}
                  />
                )
              );
            })}
            {useMemo(
              () => (
                <group>
                  {currentFloorNumber === index - 1 &&
                    roomsLocations[`floor` + (index - 1)].map(
                      (room, subIndex) => (
                        <RoomLabel key={subIndex} room={room} />
                      ),
                    )}
                </group>
              ),
              [currentFloorNumber],
            )}

            <Suspense fallback={null}>
              <Floor isVisible={currentFloorNumber >= index - 1} />
            </Suspense>
          </group>
        );
      })}
    </group>
  );
}

export default Building;
