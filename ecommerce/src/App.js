import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Abertura } from './pages/Abertura';
import { Produtos } from './pages/Produtos';
import { Cadastro } from './pages/Cadastro'
import { Login } from './pages/Login'
import Context from './context/data';
import { Perfil } from './pages/Perfil';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/abertura' exact component={Abertura}/>
          <Route path='/produtos' exact component={Produtos}/>
          <Route path='/cadastro' exact component={Cadastro}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/perfil' exact component={Perfil}/>
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
