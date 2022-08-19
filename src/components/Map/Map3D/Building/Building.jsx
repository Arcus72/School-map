import React from 'react';
import { Suspense } from 'react';
import roomsLocations from '@data/roomsLocation.json';
import RoomPointer from './RoomPointer/RoomPointer';
import PropTypes from 'prop-types';
import Floor_1 from './Floor_1/Floor_1';
import Floor0 from './Floor0/Floor0';
import Floor1 from './Floor1/Floor1';
import Floor2 from './Floor2/Floor2';
import RoomLabel from './RoomLabel/RoomLabel';

function Building({ currentFloorNumber, roomsToHighlight }) {
  const floorsArr = [Floor_1, Floor0, Floor1, Floor2];
  const scale = [3, 5, 3];
  const floorHeight = 1.51;
  let startRoom = { ...roomsToHighlight.startRoom, status: 'start' };
  let endRoom = { ...roomsToHighlight.endRoom, status: 'end' };

  return (
    <Suspense fallback={null}>
      {floorsArr.map((Floor, index) => {
        return (
          <group
            scale={scale}
            position={[0, index * floorHeight, 0]}
            key={index}
          >
            {[startRoom, endRoom].map((room, index2) => {
              return (
                room &&
                room.floorNumber <= currentFloorNumber &&
                room.floorNumber == index - 1 && (
                  <RoomPointer
                    key={index2}
                    room={room.room}
                    status={room.status}
                  />
                )
              );
            })}

            {currentFloorNumber === index - 1 &&
              roomsLocations[`floor` + (index - 1)].map((room, index) => (
                <RoomLabel key={index} {...room} />
              ))}
            <Floor isVisible={currentFloorNumber >= index - 1} />
          </group>
        );
      })}
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
