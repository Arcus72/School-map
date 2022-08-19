import React, { useState } from 'react';
import Map from '@comp/Map/Map';
import './App.scss';
import MapForm from '@comp/MapForm/MapForm';
function App() {
  const [mapQuality, setMapQuality] = useState('high');
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [crucialPoints, setCrucialPoints] = useState({
    start: null,
    end: null,
  });

  return (
    <div className='App'>
      <MapForm
        isFormVisible={isFormVisible}
        setIsFormVisible={setIsFormVisible}
        mapQuality={mapQuality}
        setMapQuality={setMapQuality}
        setCrucialPoints={setCrucialPoints}
      />
      <Map
        setIsFormVisible={setIsFormVisible}
        isFormVisible={isFormVisible}
        crucialPoints={crucialPoints}
      />
    </div>
  );
}

export default App;
