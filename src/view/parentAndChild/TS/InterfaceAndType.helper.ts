
export interface People {
    name: string,
    age: number
}


export interface Animal {
    alias: string,
    ageAniaml: number
}

export type PeopleWithAniam = {
    owner: People,
    pet: Animal
}


// Łączenie interface 

interface Worker {
    cost: number,
    fullName: string
}

interface Company extends Worker {
    companyName: string
}

interface Word extends Company {

}
 
const obj = {
    xd: 10
}

// łącznie type 

type DeveloperAngular = {
    iq: number
}

type DeveloperReact = {
    beauty: number 
}
type DeveloperJS = {
    flair: number
}
type DeveloperVue = DeveloperAngular & DeveloperReact & DeveloperJS






// enum 

enum CountryEU {
    Niemcy = "DE",
    Polska = "PL",
    Francja = "FR",
    Włochy = "IT"
}

enum Direction {
    Up,
    Down,
    Left,
    Rigth,
}
// Direction i Direction2 zwróca to samo.
enum Direction2  {
    Up = 1,
    Down = 2,
    Left = 3,
    Rigth = 4,
}
enum Direction3 {
    Up = '1',
    Down = 2,
    Left = 5555,
    Rigth = 4,
}


interface User {
    userCountry: CountryEU
}


interface Team {
    teamName: string,
    awards: number | string, 
    teamMembesr?: any | unknown | never, 
    xd?: string,
    xdd: string | undefined  // nie występuję w kodzie, bo mamy coś co musimy stworzyć i dodać wartość number lub undefined
}
let czyJestDobrze: boolean | never
const inflacja: number = 20
switch (inflacja) {
    case 5: // w if to by było (inflacja === 5)
        czyJestDobrze = true
        break;
    case 15: 
        czyJestDobrze = false
        break;
}



const noEdite = <T>(obj: T): Readonly<T> => {
    return Object.freeze(obj)
}

interface pages {
    wp: Record<string, any>,
}

