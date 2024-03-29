import React, { useState, useEffect } from 'react';

import roomsLocation from '@data/roomsLocation.json';
import logoTZN from '@assets/logoTZN.png';

import './MapForm.scss';

const findRooms = (roomName = '') => {
  if (roomName.trim() === '') return [];
  roomName = roomName.toUpperCase();
  let foundRooms = [];
  for (let key in roomsLocation) {
    for (let room of roomsLocation[key]) {
      let index = room.name.toUpperCase().indexOf(roomName);
      if (index != -1) {
        foundRooms.push(room.name);
      }
      if (room.alias) {
        let indexOfAlias = room.alias
          .toUpperCase()
          .replaceAll('<br>', ' ')
          .indexOf(roomName);
        if (indexOfAlias != -1) {
          foundRooms.push(room.alias.replaceAll('<br>', ' '));
        }
      }
      if (foundRooms.length >= 5) return foundRooms;
    }
  }

  if (
    foundRooms.length == 1 &&
    foundRooms[0].toUpperCase() == roomName.toUpperCase()
  ) {
    return [];
  }

  return foundRooms;
};

const doesRoomExist = (roomToFind) => {
  for (let key in roomsLocation) {
    for (let room of roomsLocation[key]) {
      if (
        room.name === roomToFind ||
        room.alias?.replaceAll('<br>', ' ') === roomToFind
      ) {
        return true;
      }
    }
  }
  return false;
};

let isFirstTime = window.localStorage.getItem('isFirstTime');

if (isFirstTime !== 'false')
  window.localStorage.setItem('isFirstTime', 'false');

function MapForm({
  isFormVisible,
  setIsFormVisible,
  mapQuality,
  setMapQuality,
  setNamesOfCrucialPoints,
}) {
  const [nameOfStartPoint, setNameOfStartPoint] = useState('');
  const [nameOfEndPoint, setNameOfEndPoint] = useState('');

  const [startPointMessageError, setStartPointMessageError] = useState('');
  const [endPointMessageError, setEndPointMessageError] = useState('');

  const ToggleFormVisible = () => {
    setIsFormVisible((value) => !value);
  };

  const setAndSaveMapQuality = (quality) => {
    window.localStorage.setItem('quality', quality);
    setMapQuality(quality);
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
    setStartPointMessageError('');

    if (end != '') {
      if (!doesRoomExist(end)) {
        setEndPointMessageError('Taka sala nie istnieje');
        return;
      }
    }
    setEndPointMessageError('');

    setNamesOfCrucialPoints({ start: start, end: end });
    ToggleFormVisible();
  };

  useEffect(() => {
    document.hideLoader('.LoaderMain');
  }, []);

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
        <div
          className={`Form__inputField ${
            isFirstTime != 'false' && 'Form__inputField--from'
          }`}
        >
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
        <span className='Form__error Form__error'>
          {startPointMessageError}
        </span>
        <div
          className={`Form__inputField ${
            isFirstTime != 'false' && 'Form__inputField--to'
          }`}
        >
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
        <span className='Form__error Form__error--end'>
          {endPointMessageError}
        </span>

        <div className='Form__section'>
          <header>
            <h2 className='Form__qualityHeader'>Wersja:</h2>
          </header>

          <button
            onClick={() => setAndSaveMapQuality('2D')}
            className={`Form__btnInForm Form__qualityBtn  ${
              mapQuality === '2D' ? 'Form__qualityBtn--active Form__qualityBtn--checked' : ''
            }`
          }
          >
            <p className='Form__btnText'>2D</p>
          </button>
          <button
            onClick={() => setAndSaveMapQuality('3D')}
            className={`Form__btnInForm Form__qualityBtn ${
              mapQuality === '3D' && 'Form__qualityBtn--active'
            }`}
          >
            <p className='Form__btnText'>3D</p>
          </button>

        </div>
        <br />
        <button
          className='Form__btnInForm Form__showBtn'
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
        Maciej Kimla 4K-G <br />
        Kamil Kozik 4K-G
      </div>
    </div>
  );
}

export default MapForm;
