import React from 'react';

function Loader({ name }) {
  return (
    <div className={'Loader ' + name}>
      <div className='Loader__HeadContainer'>
        <h1 className='Loader__block Loader__text'>TZN</h1>
        <div className='Loader__wrapper'>
          <div className='Loader_block Loader__cross'></div>
        </div>
        <div className='Loader__block'></div>
        <div className='Loader__block'></div>
        <div className='Loader__wrapper'>
          <div className='Loader__box'></div>
        </div>
      </div>
      <div className='Loader__gravityEmmiter'></div>
    </div>
  );
}

export default Loader;
