import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import config from "../config"
import SliderImages from "../pages/Slider.jsx"


class TalentPrivate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  componentDidMount() {

  }

  render() {

    function formatInstagramContext(text) {
      let com = text.split(".com/"); // ["someurl", "instagramUsername"]
      let arroba = text.split("@"); // ["@", "someUser"]
      if (com[1] !== undefined) {
        return com[1];
      }
      if (arroba[1] !== undefined) {
        return arroba[1];
      }
      return text;
    }

    return (
      <div>
        <Navigation />
        <section className="mt-6 pt-32">
          <div className="row mt-16">

              <div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="pleft">
                      <h3 className="detailTalentLastname"> </h3>
                      <table className="tableTalentDetails helvetica-neue-light" style={{ width: '100%', marginTop: '7rem', margin: '70px 15px 40px' }}>
                        <tr>
                          <th> HEIGHT </th>
                          
                        </tr>
                        <tr>
                          <th> BUST</th>
                          
                        </tr>
                        <tr>
                          <th> WAIST</th>
                          
                        </tr>
                        <tr>
                          <th> HIPS</th>
                          
                        </tr>
                        <tr>
                          <th> SHOES</th>

                          
                        </tr>
                        <tr>
                          <th> EYES</th>

                          
                        </tr>
                        <tr>
                          <th> HAIR</th>
                          
                        </tr>
                      </table>
                      <div className="pdf_btn">
                        <i class="fa fa-instagram" style={{ fontsize: "24px", display: "block" }}></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-8">
                    <div className="detail_btn" style={{ marginLeft: '100px', marginTop: '50px', fontStyle: 'italic' }}>
                      <label >PORTFOLIO</label>
                      <label >POLAS</label>
                      <label > VIDEOS</label>
                      {/* <button> <Link>EDIT</Link></button> */}
                    </div>
                  </div>
                </div>

              </div>

          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default TalentPrivate;
