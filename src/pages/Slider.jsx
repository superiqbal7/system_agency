import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import config from "../config"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SliderImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
     
        }

    }

   
    render() {
          let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            adaptiveHeight: true
          }
          if(this.props.type=='talent_portfolio'){
            settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                adaptiveHeight: true,
                
            }
          }
          else if(this.props.type=='talent_polaroid'){
            settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true
            }
          }
  const images=  this.props.sliderItems

console.log(images)
     return(   
        <div style={{width: '99%'}} >
        <Slider  {...settings}>
            {
                images.map((image,i)=>(
                    <div className="slider-image-wrapper">
                        {this.props.type != 'talent_video' &&
                            <img  className="image slider-image" src={`https://api.systemagency.com${image.route}`} alt="" />
                        }
                        {this.props.type == 'talent_video' &&
                            <>
                                <video className="image slider-image" controls>
                                    <source src={`https://api.systemagency.com${image.route}`} type="video/mp4" />
                                </video>
                            </>
                        }
                    </div>
                ))
            }
        </Slider>
        </div>
 
    )
    }
}

export default SliderImages;