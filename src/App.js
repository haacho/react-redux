import React from 'react';
import store from './redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenuAppBar from './components/appBar/Index';
import ListaColores from './components/listaColores/Index';
import listaPosts from './components/listaPosts';
import './App.css';


const App = () => (
  <Provider store={store}>
    <div>
     
      <Router>
      <MenuAppBar></MenuAppBar>
     
        <Route path="/temas" component={ListaColores} />
        <Route path="/posts" component={listaPosts} />
      </Router>

    </div>
  </Provider>
)



export default App;
