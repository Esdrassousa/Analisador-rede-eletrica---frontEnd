import React from  'react'

import {BrowserRouter, Route, Switch} from  'react-router-dom'


import Home from './pages/home'
import Login from './pages/Login'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/esp" exact component={Home}></Route>
            <Route path = '/' exact component = {Login}></Route>
        </Switch>
        </BrowserRouter>
    )
}
