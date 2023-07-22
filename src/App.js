import React from 'react'
import { Home } from './assets/Home'
import { Details } from './assets/Details'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error } from './assets/Error'
import { Navbar } from './assets/Navbar'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/details' Component={Details} />
          <Route path='*' Component={Error} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
