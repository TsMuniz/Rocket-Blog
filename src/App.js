import React from 'react'
import Header from './components/Header/Header';
import './Global.css';
import About from './pages/About/About';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom'

// import Routes from './Routes';

export default function App() {
  return (
    <>
      <Header/>
      <Switch>

          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/categories" component={Categories} />
          <Route  path="/contact" component={Contact} />

      </Switch>  
    </>
  )
}
