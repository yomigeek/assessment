// react libraries
import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='*' component={NotFound} />
  </Switch>
)

export default Routes
