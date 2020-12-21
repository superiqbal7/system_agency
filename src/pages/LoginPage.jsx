import React, { Component } from 'react';
import SystemAgencyLogo from '../assets/system-agency-logo.png';
import Footer from '../components/Footer.jsx';
import Flash from '../components/Flash.jsx';
import '../fonts/stylesheet.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="max-w-xl mx-auto py-32">
        {this.state.loggedOut && <Flash closeFlash={this.closeFlash} message="Logged out successfully." />}
        <section className="container-login">
          <div>
            <div className="container-logo flex justify-center mb-16">
              <img src={SystemAgencyLogo} width="220px" alt="" />
            </div>
            <p className="text-login uppercase text-3xl text-center mb-2" >login into the site</p>
            <div>
              <input
                className="input-login focus:outline-none border-b border-gray-700 py-2 w-full mt-3 mb-2 placeholder-gray-700 pl-4 helvetica-neue-thin"
                style={{ 'font-size': '11px' }}
                type="email"
                placeholder="Email*" />
            </div>
            <div>
              <input
                className="input-login focus:outline-none border-b border-gray-700 py-2 w-full mb-16 placeholder-gray-700 pl-4 helvetica-neue-thin"
                style={{ 'font-size': '11px' }}
                type="password"
                placeholder="Password*" />
            </div>
            <button onClick={this.login}
                className="text-login uppercase bg-black text-white w-full py-4 border-t-2 border-l-2 border-gray-700 helvetica-neue-thin font-bold"
                style={{ 'font-size': '11px '}}>
              submit
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  login = () => {
    const axios = require('axios');
    const formData = new FormData();
    const vm = this;
    formData.append('system_email', 'jhon');
    formData.append('system_password', '1234');
    console.log(formData);

    axios.post('https://api.systemagency.com/auth', formData)
      .then(function (response) {
        const token = response.data.item.token;
        localStorage.setItem('token', token);
        vm.props.history.push('/landingpage?logged_in');
      });
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.history.push('/');
    }

    if (window.location.href.includes('logged_out')) {
      this.setState({ loggedOut: true });
    }
  }

  closeFlash = () => {
    this.setState({ loggedOut: false });
  }
}

export default LoginPage;
