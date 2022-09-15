import React, { useState } from 'react';

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
          .replace('<br>', ' ')
          .indexOf(roomName);
        if (indexOfAlias != -1) {
          foundRooms.push(room.alias.replace('<br>', ' '));
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
        room.alias?.replace('<br>', ' ') === roomToFind
      ) {
        return true;
      }
    }
  }
  return false;
};

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
        <span className='Form__error Form__error'>
          {startPointMessageError}
        </span>
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
        <span className='Form__error Form__error--end'>
          {endPointMessageError}
        </span>

        <div className='Form__section'>
          <h4 className='Form__qualityHeader'>Jakość:</h4>

          <button
            onClick={() => setMapQuality('low')}
            className={`Form__btnInForm Form__qualityBtn ${
              mapQuality === 'low' ? 'Form__qualityBtn--active' : ''
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
