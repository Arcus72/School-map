import React from 'react';
import { Suspense } from 'react';
import roomsLocations from '@data/roomsLocation.json';
import Floor_1 from './Floor_1/Floor_1';
import TempFloor0 from './TempFloor0/TempFloor0';
import TempFloor1 from './TempFloor1/TempFloor1';
import TempFloor2 from './TempFloor2/TempFloor2';

function Building({ floorNumber }) {
  console.log('Building');
  console.log(floorNumber);
  return (
    <Suspense fallback={null}>
      <Floor_1
        roomsLocations={roomsLocations[`floor-1`]}
        isCurrentFloor={floorNumber === -1}
        scale={[3, 3, 3]}
      />
      <TempFloor0
        isVisible={floorNumber >= 0}
        roomsLocations={roomsLocations[`floor0`]}
        isCurrentFloor={floorNumber === 0}
        scale={[3, 3, 3]}
      />
      <TempFloor1
        isVisible={floorNumber >= 1}
        roomsLocations={roomsLocations[`floor1`]}
        isCurrentFloor={floorNumber === 1}
        scale={[3, 3, 3]}
      />
      <TempFloor2
        isVisible={floorNumber >= 2}
        roomsLocations={roomsLocations[`floor2`]}
        isCurrentFloor={floorNumber === 2}
        scale={[3, 3, 3]}
      />
    </Suspense>
  );
}

export default Building;
