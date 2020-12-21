import React, { Component } from 'react'
import Check from '../assets/white_check.png';
class Flash extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="fixed z-50 top-0 right-0">
        <div className="max-w-s mt-2 mr-2 bg-green-500 rounded-md text-white px-4 py-3 shadow-md" role="alert">
          <div className="flex justify-between">
            <div className="py-2 mr-3">
              <img src={Check} width="30px" />
            </div>
            <div>
              <p className="font-bold">{this.props.message}</p>
            </div>
            <span className="pl-24 pt-1" onClick={this.props.closeFlash}>
              <svg className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Flash;