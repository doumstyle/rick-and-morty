import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import List from './components/List';
import OneCharacter from './components/OneCharacter';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/:id' element={<OneCharacter />} />
      </Routes>
    </div>
  )
}

export default App
