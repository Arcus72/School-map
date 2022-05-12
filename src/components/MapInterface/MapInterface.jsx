import React, { useState, useRef } from 'react';
import Map3D from './Map3D/Map3D';
import './MapInterface.scss';
import roomsLocation from '@data/roomsLocation.json';

function MapInterface() {
  const [switchToggled, setSwitchToggled] = useState(false);
  const [buttonSwitch, setButtonSwitch] = useState(false);
  const startPointInput = useRef(null);
  const endPointInput = useRef(null);

  const [crucialPoints, setCrucialPoints] = useState({
    start: null,
    end: null,
  });

  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggled);
  };

  const ToggleButtonSwitch = () => {
    buttonSwitch ? setButtonSwitch(false) : setButtonSwitch(true);
    console.log(buttonSwitch);
  };

  const validateForm = () => {
    const start = startPointInput.current.value;
    const end = endPointInput.current.value;
    setCrucialPoints({ start: start, end: end });
    ToggleSwitch();
  };

  const spreadRoomsLocationToArray = () => {
    let result = [];
    for (const key in roomsLocation) {
      for (const value of roomsLocation[key]) {
        result.push(value.name);
      }
    }
    return result;
  };

  return (
    <div className='MapInterface'>
      <Map3D roomsToHighlight={crucialPoints} />

      <button
        onClick={ToggleSwitch}
        className={
          switchToggled
            ? 'formActivator MapInterface__formActivator'
            : 'formActivator formActivator--active MapInterface__formActivator'
        }
      >
        &gt;&gt;
      </button>
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
        <form className='FormSection__form' action='#'>
          <input
            className='FormSection__input'
            type='text'
            placeholder='Gdzie jesteś ?'
            list='pointNameInput'
            ref={startPointInput}
          />
          <br />
          <input
            className='FormSection__input'
            type='text'
            placeholder='Dokąd zmierzasz ?'
            list='pointNameInput'
            ref={endPointInput}
          />
          <datalist id='pointNameInput'>
            {spreadRoomsLocationToArray().map((text) => (
              <option key={text} value={text} />
            ))}
          </datalist>
          <br />
          <label className='FormSection__label' htmlFor=''>
            Jakosc :
          </label>
          <div className='form__section'>
            <button
              onClick={ToggleButtonSwitch}
              className={
                buttonSwitch
                  ? 'FormSection__btn button button--active'
                  : 'FormSection__btn button '
              }
              disabled
            >
              Niska
            </button>
            <button
              onClick={ToggleButtonSwitch}
              className={
                buttonSwitch
                  ? 'FormSection__btn button '
                  : 'FormSection__btn button button--active'
              }
            >
              Wysoko
            </button>
          </div>
          <br />
          <button
            className='FormSection__btn button--send'
            type='submit'
            onClick={() => validateForm()}
          >
            Pokaz
            <span className='button__span'></span>
            <span className='button__span'></span>
            <span className='button__span'></span>
            <span className='button__span'></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default MapInterface;
