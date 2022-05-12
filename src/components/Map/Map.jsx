import React, { useState } from 'react';
import Map3D from './Map3D/Map3D';
import './Map.scss';
import formActivator from '@assets/FormActivator.png';

function MapInterface({ isFormVisible, setIsFormVisible, crucialPoints }) {
  const [currentFloor, setCurrentFloor] = useState(2);
  const ToggleSwitch = () => {
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible(true);
  };

  const increaseFloor = () => {
    if (currentFloor <= 1) setCurrentFloor((number) => number + 1);
  };
  const decreaseFloor = () => {
    if (currentFloor > -1) setCurrentFloor((number) => number - 1);
  };

  return (
    <div className='MapInterface'>
      <Map3D roomsToHighlight={crucialPoints} currentFloor={currentFloor} />
      <img
        src={formActivator}
        onClick={ToggleSwitch}
        className={`MapInterface__formActivator ${
          isFormVisible && 'MapInterface__formActivator--active'
        }`}
      ></img>
      <div className='MapInterface__currentFloor'>{currentFloor}</div>
      <div className='MapInterface__background'></div>
      <nav className='MapInterface__menu'>
        <button
          className='MapInterface__menuBtn'
          onClick={() => setCurrentFloor(2)}
        >
          2
        </button>
        <button
          className='MapInterface__menuBtn'
          onClick={() => setCurrentFloor(1)}
        >
          1
        </button>
        <button
          className='MapInterface__menuBtn'
          onClick={() => setCurrentFloor(0)}
        >
          0
        </button>
        <button
          className='MapInterface__menuBtn'
          onClick={() => setCurrentFloor(-1)}
        >
          -1
        </button>
      </nav>
      <button
        className='MapInterface__UpButton'
        onClick={() => increaseFloor()}
      >
        <div className=' MapInterface__arrow'>&#8593;</div>
        <div className='MapInterface__text'>Piętro wyżej</div>
        <div className=' MapInterface__arrow'>&#8593;</div>
      </button>
      <button
        className='MapInterface__DownButton'
        onClick={() => decreaseFloor()}
      >
        <div className=' MapInterface__arrow'>&#8595;</div>
        <div className='MapInterface__text'>Piętro niżej</div>
        <div className=' MapInterface__arrow'>&#8595;</div>
      </button>
    </div>
  );
}

export default MapInterface;
