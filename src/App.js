import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Main from './Components/Main/Main';
import Layout from './Components/Layout/Layout';
import FilterCategories from './Components/FilterCategories/FilterCategories';
import Ditails from './Components/Ditails/Ditails';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';

function App() {


  //"homepage": ".",

  return (

    <div className="App">
      <Routes >
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path=':id' element={<FilterCategories />} />
          <Route path=':id/:ditails' element={<Ditails />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
        </Route >
      </Routes >

    </div>

  );
}

export default App;
