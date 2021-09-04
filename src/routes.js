import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import EsqueciASenhaPage from './pages/EsqueciASenha';
import EmailCadastroPage from './pages/EmailCadastro';
import LogadoPage from './pages/Logado';


const Routes = () =>{
    return(
        <BrowserRouter>
            <Route component = {LoginPage} path="/login" exact />
            <Route component = {RegisterPage} path="/register" exact />
            <Route component = {EsqueciASenhaPage} path="/esqueci_a_senha" exact />
            <Route component = {EmailCadastroPage} path="/email_de_cadastro" exact  />
            <Route component = {LogadoPage} path="/logado" exact  />
        </BrowserRouter>
    )
}

export default Routes;