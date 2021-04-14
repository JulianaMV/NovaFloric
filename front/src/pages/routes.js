import React from  'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import {history} from './history'
import FlowersPag from './flower'
import BuquePag from './buque'
import DetailsBuqPag from './detailsBuq'
import DetailsFloPag from './detailsFlo'


const Routes = () => {

    return(
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={FlowersPag}/>
            <Route exact path="/buque"component={BuquePag}/>
            <Route exact path="/detailsBuq/:id"component={DetailsBuqPag}/>
            <Route exact path="/detailsFlo/:id"component={DetailsFloPag}/>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;