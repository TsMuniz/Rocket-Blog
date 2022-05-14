import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './pages/About/About'
import Categories from './pages/Categories/Categories'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'

export default function Routes() {
    <BrowserRouter>
        <Switch>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/contact" component={Contact} />

        </Switch>    
    </BrowserRouter>
}