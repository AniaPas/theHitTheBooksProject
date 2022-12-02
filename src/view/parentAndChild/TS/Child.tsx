import React, { FC } from 'react'


// proste zastosowanie TS
// export const Child:FC<{name?: string, age?: number}> = ({ name, age }) => {
//     const isOld = () => {
//         if(age) {
//             return  age > 45 ? 'Stary chłop' : "Młody Chłop"
//         } else {
//             return 'Nie podano wieku'
//         }
//     }
//     return (
//         <div>   
//             <h2>{name}</h2>
//             <p>{isOld()}</p>
//         </div>
//     )
// }


// wykorzystanie TS z interface

interface Props {
    name?: string,
     age?: number,
     children?: number,
     dogs: number | undefined,
     cats: unknown
}



export const Child:FC<Props> = ({ 
    name, 
    age,
    children,
    dogs,
    cats
}) => {
    const isOld = () => {
        if(age) {
            return  age > 45 ? 'Stary chłop' : "Młody Chłop"
        } else {
            return 'Nie podano wieku'
        }
    }
    const whatIsCats = () => {
        if(typeof cats === 'number') {
            return `Masz ${cats} kotów`
        }
        if( typeof cats === 'string') {
            return `Twój kot nazywa się ${cats}`
        }
        if(typeof cats === 'undefined') {
            return "Nie masz kotów"
        }

    }
    return (
        <div>   
            <h2>{name}</h2>
            <p>{isOld()}</p>
            <p>{whatIsCats()}</p>
        </div>
    )
}

























// function add (a: number, b: number ) {

//     return a + b
// }

// function add2 (a: string, b: string ) {

//     return a + b
// }

// function add3<T, U> (a: T, b: U) {
//     if(typeof a === 'number' && typeof b === 'number') {

//         return a + b
//     }
// }

// add(5, 5)

// add3<number, object>(5, '10')



