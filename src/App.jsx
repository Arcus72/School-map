import React, { useState } from 'react';
import Map from '@comp/Map/Map';
import MapForm from '@comp/MapForm/MapForm';

function App() {
  let quality = window.localStorage.getItem('quality');
  if (!quality) {
    window.localStorage.setItem('quality', 'low');
    quality = 'low';
  }
  const [mapQuality, setMapQuality] = useState(quality);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [namesOfCrucialPoints, setNamesOfCrucialPoints] = useState({
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
        setNamesOfCrucialPoints={setNamesOfCrucialPoints}
      />

      <Map
        setIsFormVisible={setIsFormVisible}
        isFormVisible={isFormVisible}
        namesOfCrucialPoints={namesOfCrucialPoints}
        mapQuality={mapQuality}
      />
    </div>
  );
}

export default App;
