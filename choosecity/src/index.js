import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import CitySelection from "./components/citySelection/CitySelection";
import store from "./store/index";
import Profile from "./components/profile/Profile";
import "./common/reset.less"

ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Profile}></Route>
            <Route path="/city" component={CitySelection}></Route>
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));

