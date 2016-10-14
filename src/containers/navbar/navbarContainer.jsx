import React from 'react';
import Navbar from '../../components/navbar/navbar.jsx';

import AuthService from '../../services/AuthService.jsx';
import AuthStore from '../../stores/AuthStore.jsx';

export default class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      loginState: localStorage.getItem('jwt')
    });
  }

  render() {
    return (
      <Navbar
        loginState={this.state.loginState}/>
    );
  }
}
