import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Abertura } from './pages/Abertura';
import { Produtos } from './pages/Produtos';
import { Cadastro } from './pages/Cadastro'
import { Login } from './pages/Login'
import Context from './context/data';
import { Perfil } from './pages/Perfil';
import { EditEndereco } from './pages/EditEndereco';
import { Funcionarios } from './pages/Funcionarios';
import { AddFuncionario } from './pages/AddFuncionario';
import { EditFuncionario } from './pages/EditFuncionario';
import { ProdutoEspecifico } from './pages/ProdutoEspecifico';

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
          <Route path='/endereco/:id' exact component={EditEndereco}/>
          <Route path='/funcionarios' exact component={Funcionarios}/>
          <Route path='/create/funcionario' exact component={AddFuncionario}/>
          <Route path='/edit/funcionario/:id' exact component={EditFuncionario}/>
          <Route path='/produto/:id' exact component={ProdutoEspecifico}/>
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
