import { type } from '@testing-library/user-event/dist/types/setup/directApi'
import React, { useState } from 'react'



export const expal = () => {
const [isPies, setIsPies] = useState()

enum color  {
  czerowny = 'red',
  zielony = 'green'
}
type Colory = 'red' | 'green'
const obj = {
    name: "Jan",
    age: 50
}
// const name = obj.name
// const age = obj.age
// to samo za pomocą destrukturyzacji 

const {name , age} = obj


// setIsPies(true)
  return (
    <div>expal</div>
  )
}


