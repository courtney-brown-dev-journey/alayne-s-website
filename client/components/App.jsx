import React from 'react'
import Navigation from './Navigation'
import Home from './Home'
import Footer from './Footer'
import { Route, Link } from 'react-router-dom'
import MeetTheArtist from './MeetTheArtist'

function App () {
  return (
    <>
    <Navigation />
    <Home />
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
