import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Presentation from './pages/Presentation'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/presentation' component={Presentation} />
      </Switch>
    </Router>
  )
}

export default App
