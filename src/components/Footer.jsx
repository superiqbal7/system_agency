
import React, { Component } from 'react';
import InstagramIco from '../assets/instagram-ico.png'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <footer className="w-full flex flex-1  justify-center pin-b">
        <p className="uppercase mt-12 mr-10 helvetica-neue-light"
          style={{ 'font-size': '12px' }}>
          &copy; system agency 2020 
        </p>
        <a href="https://www.instagram.com/systemagency/">
          <img className="mt-12 pt-1" src={InstagramIco} alt="" width="12px" />
        </a>
        
      </footer>
    );
  }
}

export default Footer;
