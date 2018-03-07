import React, { Component } from 'react';
import RouterComponent from './Components/Router/Router';
import {connect, Provider} from 'react-redux';
import AppStore from './Store/AppStore';

const mapStateToProps = (state) => ({
  authendicated:false,
  login:'',
  register:''
})

const mapDispatchToProps = (dispatch) => ({
  fetchLogin:'',
  fetchRegister:'',
  fetchProfile:'',
  fetechStatus:''
})

const MainComponent = connect(mapStateToProps, mapStateToProps)(RouterComponent);

class App extends Component {
  render() {
    return <Provider store={AppStore}><MainComponent/></Provider>
  }
}

export default App;
