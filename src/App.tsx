import React from 'react';
// style 
import './App.scss';

// router
import {  Routes, Route} from 'react-router-dom';

// components Nav
import { Home } from './view/Home/Home';
import  Add  from './view/Add/Add';
import { All } from './view/All/All';
import { OneBook } from './view/OneBook/OneBook';

// componenty składowe

import { Nav } from './components/Nav/Nav';

// iterface 
import { navElements, PathNav } from './HelperInterface/Navigation';

// global Store 

import { GlobalStore } from './Store/GlobalStore'

const App = () => {
  const navigation: navElements[] = [
    {
      path: PathNav.HOME,
      name: 'Home'
    },
    {
      path: PathNav.ALL,
      name: 'All .....'
    },
    {
      path: PathNav.ADD,
      name: "Add..."
    }
  ]

  return (
    <GlobalStore>
      <div className='app'>

        <Nav navElements={navigation}></Nav>
        <Routes>
            <Route path='/all' element={ <All/>} />
            <Route path='/add' element={<Add/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/:book/:id' element={<OneBook/>}/>
        </Routes>
      </div>
    </GlobalStore>
  );
}

export default App;