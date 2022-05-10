import React from 'react'
import './CityItem.css'

export const CityItem = ({ city, deleteCity }) => {
  const { id, name } = city;

  return (
    <div className={'cityItem__card'}>
      <h3>{`${id} - ${name}`}</h3>
      <div className={'cityItem__buttons'}>
        <button onClick={() => deleteCity(name)}>Borrar</button>
        <button>Editar</button>
      </div>
    </div>
  )
}
