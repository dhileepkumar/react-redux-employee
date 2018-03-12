import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';
import RouterComponent from './Container/Router/Router';
import AppStore from './Store/AppStore';
import ActionCreators from './Actions/ActionCreators';

const mapStateToProps = (state) => ({
  authentication:state.auth.auth,
  authmessage:state.auth.message,
  usertoken:state.auth.token,
  authdetails:state.loginregister,
  email:''
})


const mapDispatchToProps = (dispatch) => ({
  loginsubmit: (values) => dispatch(ActionCreators.doUserLogin(values)),
  registersubmit: (values) => dispatch(ActionCreators.doUserRegistration(values)),
  fetchProfile:'',
  fetechStatus:''
})

const MainComponent = connect(mapStateToProps, mapDispatchToProps)(RouterComponent);

class App extends Component {
  render() {
    return <Provider store={AppStore}><MainComponent/></Provider>
  }
}

export default App;
