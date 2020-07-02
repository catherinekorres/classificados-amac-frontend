import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/Main';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Servicos from './pages/Servicos';
import Servico from './pages/Servico';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/produtos" component={Produtos} />
        <Route path="/produtos/:id" component={Produto} />
        <Route exact path="/servicos" component={Servicos} />
        <Route path="/servicos/:id" component={Servico} />
        <Route path="/contato" component={Contato} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
