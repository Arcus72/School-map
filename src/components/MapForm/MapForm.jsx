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
        <div className='Form__inputField'>
          <input
            className='Form__input'
            id='Form__from'
            type='text'
            placeholder='Gdzie jesteś?'
            list='pointNameInput'
            ref={startPointInput}
          />
          <label className='Form__inputLabel' htmlFor='Form__from'>
            Gdzie jesteś?
          </label>
        </div>
        <br />
        <div className='Form__inputField'>
          <input
            className='Form__input'
            id='Form__to'
            type='text'
            placeholder='Dokąd zmierzasz?'
            list='pointNameInput'
            ref={endPointInput}
          />
          <label className='Form__inputLabel' htmlFor='Form__to'>
            Dokąd zmierzasz?
          </label>
        </div>
        <datalist id='pointNameInput'>
          {spreadRoomsLocationToArray().map((text) => (
            <option key={text} value={text} />
          ))}
        </datalist>
        <br />
        <div className='Form__section'>
          <h4 className='Form__qualityHeader'>Jakość:</h4>
          image.png{' '}
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
            Wysoka
          </button>
        </div>
        <br />
        <button
          className='Form__showBtn Form__btnInForm Form__showBtn'
          onClick={() => validateForm()}
        >
          Pokaż
          <span className='button__span'></span>
          <span className='button__span'></span>
          <span className='button__span'></span>
          <span className='button__span'></span>
        </button>
      </div>
      <div className='Form__signature'>
        Maciej Kimla 3K-G <br />
        Kamil Kozik 3K-G
      </div>
    </div>
  );
}

export default MapForm;
