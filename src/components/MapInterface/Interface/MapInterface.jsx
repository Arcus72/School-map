import React, { useState } from 'react';
import Map3D from '../Map3D/Map3D';
import './MapInterface.scss';
// import roomsLocation from '@data/roomsLocation.json';
import formActivator from './Img/FormActivator.png';
import Form from './MapForm';

function MapInterface() {
  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggled);
  };


  return (
    <div className='MapInterface'>
      <Map3D />
      <img src={formActivator}
        onClick={ToggleSwitch}
        className={
          switchToggled
            ? 'formActivator MapInterface__formActivator'
            : 'formActivator MapInterface__formActivator MapInterface__formActivator--active'
        }
      >
      </img>
      <div className="MapInterface__currentFloor"></div>
      <div className='MapInterface__background'></div>
      <nav className='menu MapInterface__menu'>
        <button className='menu__btn button'>2</button>
        <button className='menu__btn button'>1</button>
        <button className='menu__btn button'>0</button>
        <button className='menu__btn button'>-1</button>
      </nav>
      <button className='UpButton MapInterface__UpButton'>
        <div className='arrow MapInterface__arrow'>&#8593;</div>
        <div className='MapInterface__text'>Piętro wyżej</div>
        <div className='arrow MapInterface__arrow'>&#8593;</div>
      </button>
      <button className='MapInterface__DownButton'>
        <div className='arrow MapInterface__arrow'>&#8595;</div>
        <div className='MapInterface__text'>Piętro niżej</div>
        <div className='arrow MapInterface__arrow'>&#8595;</div>
      </button>
      <div
        className={
          switchToggled
            ? 'FormSection MapInterface__FormSection'
            : 'FormSection FormSection--active MapInterface__FormSection'
        }
      >
        <Form />
      </div>
    </div>
  );
}

export default MapInterface;
