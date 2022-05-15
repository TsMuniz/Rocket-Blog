import React from 'react'
import './Global.css';
import Home from './pages/Home/Home.jsx'
import About from './pages/about/About.jsx';
import Categories from './pages/categories/Categories.jsx';
import Contact from './pages/Contact/Contact.jsx';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Post from './pages/Post/Post';
import Footer from './components/Footer/Footer';

// import Routes from './Routes';

export default function App() {
  return (
    <>
      <Header/>
      
      <Switch>
        
        <Route  exact path="/" component={Home} />
        <Route  path="/sobre" component={About} />
        <Route  path="/categorias" component={Categories} />
        <Route  path="/contato" component={Contact} />
        <Route  path="/postagens/:id" render={(props) => <Post {...props} /> } />
        <Route  path="*" component={Contact} />

      </Switch> 

      <Footer/>  
    </>
  )
}
