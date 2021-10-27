import React from 'react';
import { Route, Switch, Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Landing from '../page/Landing';


function Approuter(){
    const history = createBrowserHistory();
    return(
        <Router history ={history}>
            <Switch>
                <Route exact path = '/' component={Landing}/>
            </Switch>
        </Router>
    )
}


export default Approuter


