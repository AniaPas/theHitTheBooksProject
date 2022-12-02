import React from 'react'

export const Child = ({name, age}) => {
    const isOld = () => age > 45 ? 'Stary chłop' : "Młody Chłop"

  return (
    <div>
        <p>{name}</p>
        <p>{isOld()}</p>


    </div>
  )
}
