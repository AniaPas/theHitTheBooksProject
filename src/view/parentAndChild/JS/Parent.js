import React from 'react'

import { Child } from './Child'


export const Parent = () => {
    
    return (
        <>
            <Child
                name='Jan Kowalski'
                age={40}
            />
            <Child
                name='Adam Nowak'
                age='50'
            />
            <Child/>
        </>
    )
}
