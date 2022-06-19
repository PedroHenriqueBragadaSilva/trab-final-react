import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Produtos } from './pages/Produtos';
import { Cadastro } from './pages/Cadastro'
import { Login } from './pages/Login'
import Context from './context/data';
import { Perfil } from './pages/Perfil';
import { EditEndereco } from './pages/EditEndereco';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/produtos' exact component={Produtos}/>
          <Route path='/cadastro' exact component={Cadastro}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/perfil' exact component={Perfil}/>
          <Route path='/endereco/:id' exact component={EditEndereco}/>
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
