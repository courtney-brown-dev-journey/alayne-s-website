import React from 'react'
import Navigation from './Navigation'
import Home from './Home'
import Footer from './Footer'
import { Route } from 'react-router-dom'
import MeetTheArtist from './MeetTheArtist'
import fetchArtist from '../apis/api'

function App () {

  

  return (
    <>
    <Navigation />
        <Route 
        exact 
        path='/' 
        component={Home} />
        <Route
            exact
            path='/meettheartist'
            component={MeetTheArtist}
        />
    <Footer />
    </>
  )
}

export default App
