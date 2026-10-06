import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import GallaryPage from './pages/GallaryPage'

const App = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/collection' element={<CollectionPage/>}></Route>
      <Route path='/gallery' element={<GallaryPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
