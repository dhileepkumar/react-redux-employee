import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';
import RouterComponent from './Components/Router/Router';
import AppStore from './Store/AppStore';
import ShowResults from './Validations/Validations';
import ActionCreators from './Actions/ActionCreators';

const mapStateToProps = (state) => ({
  authendicated:false,
  registeruser:state.auth,
})


const mapDispatchToProps = (dispatch) => ({
  loginsubmit: (values) => dispatch(ActionCreators.doUserRegistration(values)),
  doLogin:(userdetails) => dispatch(ActionCreators.fetchUserLogin(userdetails)),
  doRegister: (userdetails) => dispatch(ActionCreators.fetchUserRegistration(userdetails)),
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
