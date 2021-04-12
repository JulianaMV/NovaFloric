import React from  'react'
import {Router, Switch, Route} from 'react-router-dom'

import {history} from './history'
import FlowersPag from './flower'
import BuquePag from './buque'


const Routes = () => {

    return(
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={FlowersPag}/>
            <Route exact path="/buque"component={BuquePag}/>
        </Switch>
    </Router>
    );
}

export default Routes;