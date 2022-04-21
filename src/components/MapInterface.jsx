import React, { useState } from 'react';
import Map3D from './MapInterface/Map3D/Map3D';
import './MapInterface.scss';

function MapInterface() {
  const [switchToggled, setSwitchToggled] = useState(false);
  const [buttonSwitch, setButtonSwitch] = useState(false);

  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggled);
  };

  const ToggleButtonSwitch = () => {
    buttonSwitch ? setButtonSwitch(false) : setButtonSwitch(true);
    console.log(buttonSwitch);
  }

  ('FormSection MapInterface__FormSection');
  return (
    <div className='MapInterface'>
      <Map3D />
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
      <nav className='menu MapInterface__menu'>
        <button className='menu__btn button'>2</button>
        <button className='menu__btn button'>1</button>
        <button className='menu__btn button'>0</button>
        <button className='menu__btn button'>-1</button>
      </nav>
      <div className='MapInterface__background'></div>
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
          />
          <br />
          <input
            className='FormSection__input'
            type='text'
            placeholder='Dokąd zmierzasz ?'
          />
          <br />
          <label className='FormSection__label' htmlFor=''>
            Jakosc :{' '}
          </label>
          <div className='form__section'>
            <button onClick={ToggleButtonSwitch} className={
              buttonSwitch
                ? 'FormSection__btn button button--active'
                : 'FormSection__btn button '
            }>Niska</button>
            <button onClick={ToggleButtonSwitch} className={
              buttonSwitch
                ? 'FormSection__btn button '
                : 'FormSection__btn button button--active'
            }>Wysoko</button>
          </div>
          <br />
          <button className='FormSection__btn button--send' type="submit">
            Pokaz
            <span className="button__span"></span>
            <span className="button__span"></span>
            <span className="button__span"></span>
            <span className="button__span"></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default MapInterface;
