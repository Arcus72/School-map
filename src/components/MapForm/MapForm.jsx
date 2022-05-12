import React, { useRef } from 'react';

import roomsLocation from '@data/roomsLocation.json';
import './MapForm.scss';
function MapForm({
  isFormVisible,
  setIsFormVisible,
  mapQuality,
  setMapQuality,
  setCrucialPoints,
}) {
  const startPointInput = useRef(null);
  const endPointInput = useRef(null);
  const ToggleFormVisible = () => {
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible(true);
  };

  const ToggleMapQuality = () => {
    mapQuality ? setMapQuality(false) : setMapQuality(true);
  };

  const validateForm = () => {
    const start = startPointInput.current.value;
    const end = endPointInput.current.value;
    setCrucialPoints({ start: start, end: end });
    ToggleFormVisible();
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
    <div
      className={`formBackground ${
        isFormVisible ? 'formBackground--active' : ''
      }`}
    >
      <div className='Form'>
        <input
          className='Form__input'
          type='text'
          placeholder='Gdzie jesteś ?'
          list='pointNameInput'
          ref={startPointInput}
        />
        <br />
        <input
          className='Form__input'
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
        <label className='Form__label'>Jakosc :</label>
        <div className='Form__section'>
          <button
            onClick={ToggleMapQuality}
            className={`Form__btnInForm Form__qualityBtn ${
              mapQuality && 'Form__qualityBtn--active'
            }`}
            disabled
          >
            Niska
          </button>
          <button
            onClick={ToggleMapQuality}
            className={`Form__btnInForm Form__qualityBtn ${
              !mapQuality && 'Form__qualityBtn--active'
            }`}
          >
            Wysoko
          </button>
        </div>
        <br />
        <button
          className='Form__showBtn Form__btnInForm Form__showBtn'
          onClick={() => validateForm()}
        >
          Pokaz
          <span className='button__span'></span>
          <span className='button__span'></span>
          <span className='button__span'></span>
          <span className='button__span'></span>
        </button>
      </div>
    </div>
  );
}

export default MapForm;
