import React from 'react'
import { Child } from './Child'

export const ParentTS = () => {
  return (
    <div>
      <Child 
        name='Jan Kowalski'
        age={40}
        dogs={5} cats={'Mruczek'}      />
      <Child 
        name='Adam Nowak'
        age={50}
        dogs={1} cats={5}      />
        <Child dogs={undefined} cats={undefined} />
    </div>
  )
}
