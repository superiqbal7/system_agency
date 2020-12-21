import React, { Component } from 'react';
import SystemAgencyLogo from '../assets/system-agency-logo.png';
import { Link } from "react-router-dom";


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }
  onToggleNav = () => {
    if (this.state.hidden) {
      console.log('en dentro de hidden true')
      this.setState({ hidden: false });
    } else {
      console.log('en dentro de hidden false')
      this.setState({ hidden: true });
    }
  }
  hideNavClass = () => {
    if (this.state.hidden) {
      return 'hidden';
    } else {
      return '';
    }
  }
  render() {
    return (
      <div>
        <nav className="w-full mx-auto fixed header-fixed">
          <div
            className="image  py-4"
            onMouseOver={this.onToggleNav}
            onMouseOut={this.onToggleNav}>
              <div className="bg-white" style={{marginTop: '-10px'}}> 
            <img
              className="pt-10 pb-6 cursor-pointer mx-auto"
              src={SystemAgencyLogo}
              alt=""
              width="170px"
            />
            </div>
            <div
            style={{backgroundColor: 'rgba(255,255,255, 0.5)',padding:'0.5px'}}
              className={`bg-white nav-custom hover:bg-opacity-50 helvetica-neue-thin`}
            >
              <ul class="flex justify-center">
                <li class="mr-1">
                <span className="n-glitch-start">
                  <Link to="/about" className="text-black uppercase ml-2 text-lg italic transition duration-500">About</Link>
                </span>
                </li>
                <li class="mr-1">
                  <Link to="/work" className="text-black uppercase ml-2 text-lg italic transition duration-500">Work</Link>
                </li>
                <li class="ml-1">
                  <Link to="/talents" className="text-black uppercase ml-2 text-lg italic transition duration-500">Talent</Link>
                </li>
                <li class="ml-1" >
                  <span className="n-glitch-end">
                    <Link to="/representations" className="text-black uppercase ml-2 text-lg italic transition duration-500">Representation</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;