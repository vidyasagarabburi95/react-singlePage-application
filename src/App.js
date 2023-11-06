import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'

import About from './components/About'

import Contact from './components/Contact'

import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="bg-con">
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
