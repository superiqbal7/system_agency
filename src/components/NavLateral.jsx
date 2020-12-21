import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLateral extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <section className="flex flex-col helvetica-neue-italic w-32 ">
          <button className="focus:outline-none uppercase hover:font-bold text-right" id="about-button"><Link onClick={ this.logout }>log out</Link></button>
          <button className="focus:outline-none uppercase ml-6 hover:font-bold text-right helvetica-neue-itailic italic" id="office-button"><Link to="/addtalent">Add item</Link></button>
          <button className="focus:outline-none text-xs uppercase ml-6 hover:font-bold text-right" id="office-button"><Link to="/addtalent">Carrousel</Link></button>
          <button className="focus:outline-none text-xs uppercase ml-6 hover:font-bold text-right" id="office-button"><Link to="/addtalent">Timeline</Link></button>
      </section>
    );
  }
  logout = () => {
    localStorage.removeItem('token');
    window.location = '/login?logged_out';
  }
}

export default NavLateral;