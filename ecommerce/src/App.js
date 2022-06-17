import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Produtos } from './pages/Produtos';
import { Cadastro } from './pages/Cadastro'
import { Login } from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/produtos' exact component={Produtos}/>
        <Route path='/cadastro' exact component={Cadastro}/>
        <Route path='/login' exact component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
