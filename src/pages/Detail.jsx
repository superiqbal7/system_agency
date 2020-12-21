import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import config from "../config"
import SliderImages from "../pages/Slider.jsx"


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
             renderSlider:false,
             sliderItems:[],
             type: null
        }

    }

    componentDidMount() {
        const slug = this.props.match.params.slug
        axios.get(`${config.URL}/talent?slug=${slug}`)
            .then((response) => {
                this.setState({
                    data: response.data.item.rows
                })
            });
    }

       silderShow=(picName)=>{
        this.setState({
            renderSlider:true,
            type: picName
        })
          
        let images=this.state.data;
        let res=images[0].Resources;
        console.log('sliderhit',images,picName)

        let slider = [];
        res.forEach((resource,i) => {
            if(resource.Components[0].name == picName) {
                slider.push(resource);
            }
        });


        if(slider.length>0) {
            this.setState({
                sliderItems:slider
            })
        }
       }


    render() {

        const data = this.state.data;
        // console.log(this.state);


        return (
            <div>
                <Navigation />
                <section className="mt-6 pt-16">
                    <div className="row mt-16">

                        {data.map((talent, i) => (
                            <div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="pleft">
                                        <h3><strong>{talent.name} </strong>{talent.last_name}</h3>
                                        <table style={{ width: '50%', marginTop: '7rem', margin: '100px auto 50px' }}>

                                            <tr>
                                                <th>Height</th>
                                                <td>{talent.height}</td>
                                            </tr>
                                            <tr>
                                                <th>Bust</th>
                                                <td>{talent.bust}</td>
                                            </tr>
                                            <tr>
                                                <th>Waist</th>
                                                <td>{talent.waist}</td>
                                            </tr>
                                            <tr>
                                                <th>Hips</th>
                                                <td>{talent.hips}</td>
                                            </tr>
                                            <tr>
                                                <th>Shoes</th>
                                                <td>{talent.shoes}</td>
                                            </tr>
                                            <tr>
                                                <th>Eyes</th>
                                                <td>{talent.eyes}</td>
                                            </tr>
                                            <tr>
                                                <th>Hair</th>
                                                <td>{talent.hair}</td>
                                            </tr>
                                        </table>
                                        <div className="pdf_btn">
                                            <i class="fa fa-instagram" style={{ fontsize: "24px", display: "block" }}></i>
                                            <a href="#">@thereinsta</a>
                                            <button> <a target="_blank" href={`${config.URL}${talent.pdf_route}`} >Create <strong>PDF</strong></a></button>
                                        </div>
                                    </div>
                                </div>
                                {
                                    this.state.renderSlider && this.state.sliderItems.length>0 ?
                                       null
                                    :
                                    <div className="col-sm-4">
                                        <img style={{width: '320px'}} className="image center-image" src={`https://api.systemagency.com${talent.Resources[0].route}`} alt={talent.name} ></img>
                                    </div>
                                    }
                                
                                <div  className="col-sm-8">
                                    {
                                    this.state.renderSlider && this.state.sliderItems.length>0 ?
                                        <div>
                                            <SliderImages  type={ this.state.type } sliderItems={this.state.sliderItems} />
                                        </div>
                                    :
                                     null
                                    }
                                    <div className="detail_btn" style={{marginLeft: '50px', marginTop: '50px', fontStyle: 'italic'}}>
                                       <label className={this.state.type == 'talent_portfolio'? 'active' : ''} onClick={()=>this.silderShow("talent_portfolio")}>PORTFOLIO</label> 
                                       <label  className={this.state.type == 'talent_polaroid'? 'active' : ''} onClick={()=>this.silderShow("talent_polaroid")}>POLAS</label>
                                       <label  class={this.state.type == 'talent_video'? 'active' : ''} onClick={()=>this.silderShow("talent_video")}> VIDEOS</label>
                                        {/* <button> <Link>EDIT</Link></button> */}
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        ))}

                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Detail;