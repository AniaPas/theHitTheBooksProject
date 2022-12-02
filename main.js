function createdHTML () {
    //
}


function createdCSS () {
    //
}

function addClass ( ) {
    ///
}

function getData( ) {
    const xd = ''
    for( let i =0; i < 10 ; i++) {

    }
    // fetch()
    // axiosa
    // zapytanie HTTP używam AXJA
    
}

function getData2( ) {
    const xd = ''
    for( let i =0; i < 10 ; i++) {

    }
    // fetch()
    // axiosa
    // zapytanie HTTP używam AXJA
}

  // synchronicznie 
getData() // wywali na sam koniec  4. na sam koniec zapyta serwer o dane
createdHTML() //1 na poczatku stworzy HTML 
setTimeout(() => createdCSS(), 5000) // wrzuci do poczekalnie na min 5000 ms 3. Storzy css

addClass() // 2 doda klasy do HTML 

// asynchronicznie 

const createdPage = async () => {
   await getData() //  wykona się pierwszy i reszta nie zacznie się wykonywać do puki getData się nie skończy
   getData2( )  // żeby działć poprawnie musi mieć dane z getData
   createdHTML() // 3 nowrmalnym trybem
    setTimeout(() => createdCSS(), 5000) 
    addClass()
}

createdPage()


fetch('www').then(
    res => {
        createdHTML()
        setTimeout(() => createdCSS(), 5000) 
        addClass()
    }
).catch()

