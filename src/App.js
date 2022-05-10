import React, { useEffect, useState } from 'react'

import './App.css';
import { CityItem } from './CityItem/CityItem';
import datos from './data.json';

export const App = () => {

  const [cities, setCities] = useState(datos);

  const deleteCity = (cityToDelete) => {
    setCities(oldCities => oldCities.filter((city) => city.name != cityToDelete));
  }

  return (
    <div className={'mainContainer'}>

      {cities.length == 0 ?
        <h2>No hay ciudades para mostrar.</h2>
        :
        cities.map(city => <CityItem key={city.id} city={city} deleteCity={deleteCity} />)
      }
      
    </div>
  )
}

