import React, { useState, useRef } from 'react';
import './MapInterface.scss';
import Map3D from '../Map3D/Map3D';
import roomsLocation from '@data/roomsLocation.json';
import './MapForm.scss'

function MapForm() {
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
        <div className='form'>
            <Map3D roomsToHighlight={crucialPoints} />
            <input
                className='form__input'
                type='text'
                placeholder='Gdzie jesteś ?'
                list='pointNameInput'
                ref={startPointInput}
            />
            <br />
            <input
                className='form__input'
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
            <label className='form__label'>
                Jakosc :
            </label>
            <div className='form__section'>
                <button
                    onClick={ToggleButtonSwitch}
                    className={
                        buttonSwitch
                            ? 'form__btn button button--active'
                            : 'form__btn button '
                    }
                    disabled
                >
                    Niska
                </button>
                <button
                    onClick={ToggleButtonSwitch}
                    className={
                        buttonSwitch
                            ? 'form__btn button '
                            : 'form__btn button button--active'
                    }
                >
                    Wysoko
                </button>
            </div>
            <br />
            <button
                className='form__btn button--send'
                type='submit'
                onClick={() => validateForm()}
            >
                Pokaz
                <span className='button__span'></span>
                <span className='button__span'></span>
                <span className='button__span'></span>
                <span className='button__span'></span>
            </button>
        </div>
    )
}

export default MapForm