import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Policy from './pages/Policy'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/policy" exact component={Policy} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
