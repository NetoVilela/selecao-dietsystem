import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';


const Routes = () =>{
    return(
        <BrowserRouter>
            <Route component = {LoginPage} path="/login" exact />
            <Route component = {RegisterPage} path="/register" exact />
        </BrowserRouter>
    )
}

export default Routes;