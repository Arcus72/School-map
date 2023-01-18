import React, { useMemo, Suspense } from 'react';
import roomsLocations from '@data/roomsLocation.json';

import floor_1Gltf from '@assets/floors/Floor_1.gltf';
import floor0Gltf from '@assets/floors/Floor0.gltf';
import floor1Gltf from '@assets/floors/Floor1.gltf';
import floor2Gltf from '@assets/floors/Floor2.gltf';

import RoomLabel from './RoomLabel/RoomLabel';
import Floor from './Floor';

function Building({ currentFloorNumber, roomsToHighlight }) {
  const scale = [3, 5, 3];
  const floorHeight = [1.51, 1.5, 1.51, 1.53];
  let startRoom = { ...roomsToHighlight.startRoom, status: 'start' };
  let endRoom = { ...roomsToHighlight.endRoom, status: 'end' };

  return (
    <group>
      {[floor_1Gltf, floor0Gltf, floor1Gltf, floor2Gltf].map(
        (floorGltf, index) => {
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
                <Floor
                  isVisible={currentFloorNumber >= index - 1}
                  floorGltf={floorGltf}
                  index={index}
                />
              </Suspense>
            </group>
          );
        },
      )}
    </group>
  );
}

export default Building;
