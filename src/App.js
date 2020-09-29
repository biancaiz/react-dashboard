import React from 'react';
import Drawer from './show/components/Drawer/Drawer';
import Users from './show/pages/Users';
import Clients from './show/pages/Clients';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Provider } from 'react-redux';
import { store } from './process/redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './show/pages/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Drawer} />
        <Route exact path="/users" component={() => <Drawer list={<Users />} title='Users' />} />
        <Route exact path="/clients" component={() => <Drawer list={<Clients />} title='Clients' />}  />
      </Router>
    </Provider>
  );
}

export default App;
