// react libraries
import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'

const Routes = () => (
  <Switch>
    <Route path='/' component={Home} />
    <Route path='*' component={() => <div>404 Page</div>} />
  </Switch>
)

export default Routes
