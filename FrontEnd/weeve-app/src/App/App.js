import React from 'react'
import makeStyles from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from '../Components/layout'
import PageName from '../Components/pageName'
import DataService from '../Components/dataService'


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