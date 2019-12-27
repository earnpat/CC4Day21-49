import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Redirect to='/signup' />
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
