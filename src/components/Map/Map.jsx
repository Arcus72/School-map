import React, { useState } from 'react';
import Map3D from './Map3D/Map3D';
import './Map.scss';
import DoubleArrow from '@src/assets/icons/DoubleArrow';
import ArrowRight from '@src/assets/icons/ArrowRight';
import ArrowLeft from '@src/assets/icons/ArrowLeft';
import roomsLocations from '@data/roomsLocation.json';

const findRoom = (roomName) => {
  if (roomName?.trim() === '') return null;
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

function MapInterface({ isFormVisible, setIsFormVisible, crucialPoints }) {
  const [currentFloor, setCurrentFloor] = useState(2);

  let roomsToHighlight = {};

  roomsToHighlight.startRoom = findRoom(crucialPoints.start);

  roomsToHighlight.endRoom = findRoom(crucialPoints.end);

  const ToggleSwitch = () => {
    setIsFormVisible((value) => !value);
  };

  const increaseFloor = () => {
    if (currentFloor <= 1) setCurrentFloor((number) => number + 1);
  };
  const decreaseFloor = () => {
    if (currentFloor > -1) setCurrentFloor((number) => number - 1);
  };

  if (!isFormVisible) {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      openFullscreen();
    }
  } else {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      closeFullscreen();
    }
  }

  window.onfocus = () => {
    console.log('focus1');
    console.log(!isFormVisible);
    if (!isFormVisible) {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i)
      ) {
        console.log('focus2');
        openFullscreen();
      }
    }
  };
  function openFullscreen() {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }

  return (
    <div className='MapInterface'>
      <Map3D roomsToHighlight={roomsToHighlight} currentFloor={currentFloor} />
      <div
        onClick={ToggleSwitch}
        className={`MapInterface__formActivator ${
          isFormVisible && 'MapInterface__formActivator--active'
        }`}
      >
        <DoubleArrow />
      </div>

      <div className='MapInterface__background'></div>

      <nav className='MapInterface__menu'>
        {[2, 1, 0, -1].map((floorNumber) => (
          <button
            key={floorNumber}
            className={`MapInterface__menuBtn
            ${
              currentFloor == floorNumber ? 'MapInterface__menuBtn--active' : ''
            }
            ${
              roomsToHighlight?.startRoom?.floorNumber == floorNumber
                ? 'MapInterface__menuBtn--startRoomFloor'
                : ''
            }
            ${
              roomsToHighlight?.endRoom?.floorNumber == floorNumber
                ? 'MapInterface__menuBtn--endRoomFloor'
                : ''
            }`}
            onClick={() => setCurrentFloor(floorNumber)}
          >
            {floorNumber}
          </button>
        ))}
      </nav>

      <nav className='MapInterface__mobileMenu'>
        <ArrowLeft onClick={() => decreaseFloor()} />
        {[-1, 0, 1, 2].map((floorNumber) => (
          <button
            key={floorNumber}
            className={`MapInterface__mobileMenuBtn ${
              currentFloor == floorNumber
                ? 'MapInterface__mobileMenuBtn--active'
                : ''
            }
            ${
              roomsToHighlight?.startRoom?.floorNumber === floorNumber
                ? 'MapInterface__mobileMenuBtn--startRoomFloor'
                : ''
            }
            ${
              roomsToHighlight?.endRoom?.floorNumber === floorNumber
                ? 'MapInterface__mobileMenuBtn--endRoomFloor'
                : ''
            }`}
            onClick={() => setCurrentFloor(floorNumber)}
          >
            {floorNumber}
          </button>
        ))}
        <ArrowRight onClick={() => increaseFloor()} />
      </nav>
    </div>
  );
}

export default MapInterface;
