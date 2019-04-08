import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginWindow from './components/LoginWindow';
import RabbitsCorp from './components/RabbitsCorp';



// export const Routes = (props) => {
class App extends Component {
  componentDidMount() {
    // const url = 'http://conquest.weekendads.ru/rabbit/list',
    //   method = 'POST';
    //   // data = {username:"omar1",password:"lobster1"}
    // fetch(url, {
    //     method: method,
    //     headers: {
    //         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NTQ2NTM1MTYsImV4cCI6MTU1NDY1NzExNiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoib21hcjEifQ.Kt47EeR2IRMIua7oDf2S8Kbh5jkjBzbQQHpNsXa5qasbSDQzeFTSKJU1VM2PHav7xgvzQDspRFK8OTDGSfkx6smBHFI6JVwIJfQXDvdEeK9x8chp781-DHlPzZdJtlb1EE6Spv7u45nZLFG5DmP3yH8D8XrLawmAyFi70UjC9YsWsSfF6MROVtOZ5_BGYZgZCCL-ICpIWtsoctzzpWiGLNtkP7wRm509CcbS3_fi07b6rMybRy2YSyJ_bstTV1ECAy1o2mT2uHHF8aIH-K6ZhGYdZN3y1oVIwUlEe1pyf6iBNI2NPAcmTpSpm6lNkBCl-UV2WLMgUiAoYChk1JqK-O2a7fWrJ6_lHiE9IGgNuJnX9HJ1S9aHnEo6CUscA0tOUx6hNev2_x4FEQ14RDdq2gqJZf2ssoBtQybCNmPLxaUXi0sJ1NaW5Ep1jOSxgj_8dGU_U0lhD_yOs8NmvUg5SJ0-MOcxmNQCP9i0euAdxvw113lnjMFKIgXAGBim9PV6b9ZJEpsmXi8iLsXJYgsyrUQ7U0xouGms6v8eYLZPx-1HpUh8D5o073htOusfGU30clLmUmhqR0kl9Ifn68ZPDYOxrL9dPp349ehK58puxvME1geLhyHLGJW0Y9GuCGHIyJbBk-Z93NcUeLMZ48Mx66ekVpGFCPBC4XujP9YuMow",
    //     }
    //     // body: JSON.stringify(data), // body data type must match "Content-Type" header
    // })
    // // .then(response => response.json())
    // .then(response => {console.log(response)});
  }

  render() {
    return (
      <div className="app-routes">
        <Switch>
          <Route path="/login" component={LoginWindow} />
          <Route path="/" component={RabbitsCorp} />
        </Switch>
      </div>
    );
  }
};

export default App;
// {this.state.a && <LoginWindow/>}
// <Route path="/create" component={RabbitCreate} />
// <Route path="/edit" component={RabbitEdit} />
// <Route path="/list" component={RabbitList} />
// <Route path="/home" component={Home} />
// <Route path="/about" component={About} />


// <Route exact path="/">
//   <Redirect to="/Home" />
// </Route>

// <div>
//   {isLoggedIn ? (
// ) : (
//   <LoginWindow />
// )}
// </div>

// <div>
//   {isLoggedIn && }
//   <div className="main-content" style={{marginLeft:'200px'}}>
//     <Switch>
//       <Route path="/login" component={LoginWindow} />
//       <Route path="/logout" component={LoginWindow} />
//       <AuthorizedRoute path="/create" component={RabbitCreate} />
//       <AuthorizedRoute path="/edit" component={RabbitEdit} />
//       <AuthorizedRoute path="/list" component={RabbitList} />
//
//       <Route render={ () => <h1>404 Error</h1> } />
//     </Switch>
//   </div>
// </div>
