// const dane = new Promise((resolve, reject) => {

// })          // to jest zapytanie do BE, dostajemy promisa 



// dane
// .then( res => {
// // wykona się kiedy Promis będzie resolve
// })
// .catch(
//     // wykona się kiedy będzie reject
// )
// .finally (
//     // wykona się zawsze na koniec 
// )


// // async awite 


// async const rozwiazanie = () {
//     await dane // taki zamis pozbawia nas mozliwości obsługi błedów tj. reject

// }

// async const rozwiazanieZTryCatch = () {
//     try {
//         // wykona się kiedy Promis będzie resolve
//     } catch {
//         // wykona się kiedy będzie reject
//     }
// }




// const xd = [1 ,2 ,3]

// xd.map(item => item * 2)
// xd.map(item => {
//     return item * 2
// })

const filmy = [
    {
        id: 1,
        title: "Rambo",
        idAktor: 4
    },
    {
        id: 2,
        title: "Terminator",
        idAktor: 7
    }
]

const aktorzy = [
    {
        id: 7,
        nazwisko: "Arnold"
    },
    {
        id: 4,
        nazwisko: "Sylwester"
    }
]


const obj = {
    name: "Jan"
}

const cloneObje = obj

const globalna = "Jan Kowalski"

function add ( ) {
const lokalna = "Łuaksz"
console.log(globalna) // zwróci nam "Jan Kowalski"

const numb = 10
 if(numb > 10) {
    const lottoNamber = [5, 5]
 }


 console.log(lottoNamber) // undefined
}

console.log(lokalna) // undefined


// const get = () => {
//     // coś pobiera 
// }


const button = ''
button.addEventLinner('click', () => {
})


const arr = [1, 5, 3, 6, 10, 90]

const newArr = arr.filter(item => item > 5).map(item => item * 2) // [12, 20, 180]


const arr2 = [
 {
    name: "Jan",
    age: 20
 },
 {
    name: "Andrzej",
    age: 10
 }
]
arr2.map(item => item.name) // ["Jan", "Andrzej"]



const men = {name: "Jan", age: 50}

const keySMEn = Object.keys(men)

keySMEn.forEach( item => {
    console.log(men[item])
})

for( const key in men) {
    console.log(men[key])
}


const czysta = (a, b) => {
    return a + b
}

czysta(5, 10)
czysta(5, 10)


const aktorki = [
    {
        name: "Anna Dymna",

    },
    {
        name: "Janina Nowak",

    }
]

const filmyP = [
    {
    tytul: "Znachor",
    aktorzy : ["Anna Dymna", "Tomasz S."]
    },
    {
        tytul: "Powódz",
        aktorzy: ["Anna Dymna", "Jan Kowalski"]
    }
]

// tablice aktorek z filmami w których brały udział.


const AktorkiIIchFilmy = aktorki.map(item => {
    const filmyAktorek = filmyP.filter(filmy => filmy.aktorzy.includes(item.name))
    const finalnaTablicaZFilmami = filmyAktorek.length > 0 ? filmyAktorek.map(filmy2 => filmy2.tytul) : []
    // w przypadku Anna Dymna zwróci [{tytul: "Znachor",aktorzy : ["Anna Dymna", "Tomasz S."]},{tytul: "Powódz",aktorzy: ["Anna Dymna", "Jan Kowalski"]}]
    // w przypadku "Janina Nowak" zwróci []

    return {...item, finalnaTablicaZFilmami}
})

// rezultat 
// [
//     {
//         name: "Anna Dymna",
//         finalnaTablicaZFilmami : ["Znachor", "Powódz" ]
//     },
//     {
//         name: "Janina Nowak",
//         finalnaTablicaZFilmami : []
//     }
// ]


