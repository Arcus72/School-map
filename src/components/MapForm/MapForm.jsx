import React, { useState } from 'react';

import roomsLocation from '@data/roomsLocation.json';
import logoTZN from '@assets/logoTZN.png';

import './MapForm.scss';

function MapForm({
  isFormVisible,
  setIsFormVisible,
  mapQuality,
  setMapQuality,
  setCrucialPoints,
}) {
  const [nameOfStartPoint, setNameOfStartPoint] = useState('');
  const [nameOfEndPoint, setNameOfEndPoint] = useState('');

  const [startPointMessageError, setStartPointMessageError] = useState('');
  const [endPointMessageError, setEndPointMessageError] = useState('');
  const ToggleFormVisible = () => {
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible(true);
  };

  const findRooms = (inputText = '') => {
    if (inputText.trim() === '') return [];

    let roomsNameToDisplay = [];
    for (let key in roomsLocation) {
      for (let room of roomsLocation[key]) {
        let index = room.name.toUpperCase().indexOf(inputText.toUpperCase());
        if (index != -1) {
          roomsNameToDisplay.push(room.name);
        }
      }
    }
    if (roomsNameToDisplay.length == 1) {
      return [];
    }
    roomsNameToDisplay.length = 5;
    return roomsNameToDisplay;
  };

  const doesRoomExist = (roomToFind) => {
    for (let key in roomsLocation) {
      for (let room of roomsLocation[key]) {
        if (room.name === roomToFind) {
          return true;
        }
      }
    }
    return false;
  };

  const validateForm = () => {
    const start = nameOfStartPoint.trim();
    const end = nameOfEndPoint.trim();

    if (start != '') {
      if (!doesRoomExist(start)) {
        setStartPointMessageError('Taka sala nie istnieje');
        return;
      }
    }

    if (end != '') {
      if (!doesRoomExist(end)) {
        setEndPointMessageError('Taka sala nie istnieje');
        return;
      }
    }
    setStartPointMessageError('');
    setEndPointMessageError('');
    setCrucialPoints({ start: start, end: end });
    ToggleFormVisible();
  };

  return (
    <div className={`Form ${isFormVisible ? 'Form--active' : ''}`}>
      <header className='Form__header Form__header--Desktop'>
        <h1>Mapa</h1>
        <img src={logoTZN} alt='logoTZN' />
      </header>
      <div className='Form__main'>
        <header className='Form__header Form__header--mobile'>
          <h1>Mapa</h1>
          <img src={logoTZN} alt='logoTZN' />
        </header>
        <div className='Form__inputField'>
          <input
            className='Form__input'
            id='Form__from'
            type='text'
            placeholder='Gdzie jesteś?'
            value={nameOfStartPoint}
            onChange={(el) => setNameOfStartPoint(el.target.value)}
          />
          <label className='Form__inputLabel' htmlFor='Form__from'>
            Gdzie jesteś?
          </label>
          <div className='Form__inputHints'>
            {findRooms(nameOfStartPoint).map((text, index) => (
              <div
                onMouseDown={() => setNameOfStartPoint(text)}
                key={index}
                className='Form__hint'
              >
                {text}
              </div>
            ))}
          </div>
        </div>
        <span className='Form__error'> {startPointMessageError}</span>
        <div className='Form__inputField'>
          <input
            className='Form__input'
            id='Form__to'
            type='text'
            placeholder='Dokąd zmierzasz?'
            value={nameOfEndPoint}
            onChange={(el) => setNameOfEndPoint(el.target.value)}
          />
          <label className='Form__inputLabel' htmlFor='Form__to'>
            Dokąd zmierzasz?
          </label>
          <div className='Form__inputHints'>
            {findRooms(nameOfEndPoint).map((text, index) => (
              <div
                onMouseDown={() => setNameOfEndPoint(text)}
                key={index}
                className='Form__hint'
              >
                {text}
              </div>
            ))}
          </div>
        </div>
        <span className='Form__error'> {endPointMessageError}</span>

        <div className='Form__section'>
          <h4 className='Form__qualityHeader'>Jakość:</h4>

          <button
            onClick={() => setMapQuality('low')}
            className={`Form__btnInForm Form__qualityBtn ${
              mapQuality === 'low' && 'Form__qualityBtn--active'
            }`}
            disabled
          >
            Niska
          </button>
          <button
            onClick={() => setMapQuality('high')}
            className={`Form__btnInForm Form__qualityBtn ${
              mapQuality === 'high' && 'Form__qualityBtn--active'
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
