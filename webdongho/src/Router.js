import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import HomeAdmin from './component/admin/HomeAdmin';
import LoginAdmin from './component/admin/LoginAdmin';
import HomeClient from './component/client/HomeClient';

export default function RouterWeb() {
    return (
        <Router>
            <Switch>
                <Route path="/admin" render={() => {
                    return localStorage.getItem("accessToken") ? <HomeAdmin /> : <LoginAdmin />
                }}>
                </Route>
                {/* <Route path="/index" render={() => {
                    return <HomeClient />
                }}>
                </Route> */}
            </Switch>
        </Router>
    )
}