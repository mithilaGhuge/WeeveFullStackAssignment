import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import Layout from '../Components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DataService from '../Components/DataService';
import PageName from '../Components/PageName';

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <PageName/>
        </Route>
        <Route path="/DataService">
          <DataService />
        </Route>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
