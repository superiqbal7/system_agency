import React, { Component } from 'react';
import Flash from '../components/Flash.jsx';
import NavLateral from '../components/NavLateral';
import Navigation from '../components/Navigation';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="relative">
        { this.state.loggedIn && <Flash closeFlash={this.closeFlash} message="Signed in successfully."/> }
        <NavLateral />
      </div>
     );
  }
  componentDidMount() {
    if (window.location.href.includes('logged_in')) {
      this.setState({ loggedIn: true });
    }
  }
  closeFlash = () => {
    this.setState({ loggedIn: false });
  }
}

export default LandingPage;