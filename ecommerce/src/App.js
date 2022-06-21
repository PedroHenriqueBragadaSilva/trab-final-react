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
import { Carrinho } from './pages/Carrinho';
import { NotFound } from './pages/NotFound';
import { CreateCategoria } from './pages/CreateCategoria';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/abertura' component={Abertura}/>
          <Route path='/produtos' component={Produtos}/>
          <Route path='/cadastro' component={Cadastro}/>
          <Route path='/login' component={Login}/>
          <Route path='/perfil' component={Perfil}/>
          <Route path='/endereco/:id' component={EditEndereco}/>
          <Route path='/funcionarios' component={Funcionarios}/>
          <Route path='/create/funcionario' component={AddFuncionario}/>
          <Route path='/edit/funcionario/:id' component={EditFuncionario}/>
          <Route path='/produto/:id' component={ProdutoEspecifico}/>
          <Route path='/carrinho' component={Carrinho}/>
          <Route path='/create/categoria' exact component={CreateCategoria}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
