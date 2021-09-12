import React, {Fragment} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './style.css'
import { useGlobalCocktailsContext } from './context'
import Loading from './../Loading'
import Header from './components/Header';

import Home from './pages/Home'
import About from './pages/About'
import CocktailPage from './pages/CocktailPage'
import Error from './pages/Error'

const Main = () => {
    const {isLoading} = useGlobalCocktailsContext()

    if(isLoading){
        return <Loading />
    }

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/cocktail/:id'>
                    <CocktailPage />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default Main
