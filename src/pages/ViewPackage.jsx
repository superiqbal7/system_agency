import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import config from "../config"

class ViewPackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            hidden: true,
            activeIndex: "",
            selectedImages: []

        }
        this.loadimages = this.loadimages.bind(this);
        this.genderImages = this.genderImages.bind(this);
    }

    componentDidMount() {
        document.title = "System Agency - View Package";
        const { match: { params } } = this.props;
        let images = params.selectedImages.split(',')
        images.map((data, i) => {
            this.state.selectedImages.push(parseInt(data))
        })
        this.loadimages()
    }

    loadimages = () => {
        axios.get(`${config.URL}/talent/section`)
            .then((response) => {
                let images = response.data.item.rows;

                let data = images.filter((image, i) => {
                    image.is_requested = false
                    return this.state.selectedImages.includes(i)
                })
                //save images variable in state
                this.setState({
                    images: data
                })
            });
    }
    removeImage = (index) => {
        let data = this.state.images
        let newData = data.filter((item, i) => {
            return i !== index
        })
        this.setState({
            images: newData
        })

        console.log(index)
    }

    genderImages = (gender, filterByDevelopment) => {
        let url = `${config.URL}/talent/section?gender=${gender}`;
        if (filterByDevelopment === true) {
            url += `&development=true`
        }
        axios.get(url)
            .then((response) => {
                this.setState({
                    images: response.data.item.rows
                })
            })
    }

    requestImage = (index) => {
        console.log(index);
        let images = this.state.images;
        let image = images[index]
        image.is_requested = true;
        images[index] = image
        this.setState({ ...this.state, images: images });
        this.state.selectedImages.push(index);
        console.log("faisal", this.state.images)
    }

    deletselectAll = () => {
        let images = this.state.images
        images.map((image) => {
            image.is_requested = false;
        })
        this.setState({
            images
        })
    }

    // https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
    render() {
        const { url } = this.props.match
        const token = localStorage.getItem("token");
        const Images = this.state.images;
        const items = this.state.images;
        let rowContents = [];
        const contents = items.reduce((acc, image, i) => {
            rowContents.push(
                <div key={i} className="col-sm-3 col-xs-3 mb-6">
                    <div className="image_text">
                        <div>
                            <div style={{zIndex: 1}} className="close">
                                <i style={{cursor: 'pointer'}}  onClick={() => this.removeImage(i)} className="material-icons md-2">close</i>
                            </div>
                            <Link to={`/talents/${image.slug}`} style={{ color: "black" }} className="dodit-medium">
                                <div className="img-box">
                                    <img key={image.slug} src={`https://api.systemagency.com${image.Resources[0].route}`}
                                        alt={image.name}></img>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <p className="style_heading">
                        <Link to={`/talents/${image.slug}`} style={{ color: "black" }} className="dodit-medium"> <strong className="dodit-bold">{image.name}</strong> {image.last_name}</Link>
                    </p>
                </div>
            );
            if (i % 4 === 3) {
                acc.push(
                    <div className="row">
                        {rowContents}
                    </div>
                );
                rowContents = [];
            }

            return acc;
        }, [])

        contents.push(<div className="row">
            {rowContents}
        </div>
        );


        return (
            <div>
                <Navigation />
                <div className="Talents mt-6 pt-16">
                    {/*       <section className="helvetica-neue-italic mx-auto">
        <div className="flex justify-center mb-2 btn-gender">
          <div className="dropdown">
            <button className="focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
              id="about-button">
              <Link className="btn_link">Men</Link></button>
            <div className="dropdown-content">
              <div className="flex justify-center">
                <button onClick={()=> this.genderImages('men', false)} className="active focus:outline-none uppercase
                  text-sm hover:text-gray-500 transition duration-700" id="about-button">
                  <Link>Image</Link>
                </button>
                <button onClick={()=> this.genderImages('men', true)} className="focus:outline-none uppercase text-sm
                  hover:text-gray-500 transition duration-700" id="office-button">
                  <Link>Development</Link>
                </button>                
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="active focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
              id="office-button">
              <Link className="btn_link">Women</Link></button>
            <div className="dropdown-content">
              <div className="flex justify-center left">
                <button onClick={()=> this.genderImages('women', false)} className="active focus:outline-none uppercase
                  text-sm hover:text-gray-500 transition duration-700" id="about-button">
                  <Link>Image</Link></button>
                <button onClick={()=> this.genderImages('women', true)} className="focus:outline-none uppercase 
                  text-sm hover:text-gray-500 transition duration-700" id="office-button">
                  <Link>Development</Link></button>
                <button onClick={()=> this.genderImages('women', true)} className="focus:outline-none uppercase
                  text-sm hover:text-gray-500 transition duration-700" id="office-button">
                  <Link>Curve</Link></button>
              </div>
            </div>
          </div>

        </div>
       
      </section> */}
                    {/* <div className="side-labels">
                        <span className="" data-target="#request" data-toggle="modal" className="view-packages">
                            SAVE AND REQUEST
                        </span>
                    </div> */}

                    <div>
                        <div className="new-left-panel">
                            <button className="" data-target="#request" data-toggle="modal" className="view-packages">SAVE AND REQUEST</button>
                        </div>
                        <div className="talent-content">
                            <div className="container pad" style={{ width: '80%', marginTop: '60px' }}>
                                <div className="row">
                                    {contents}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />

                <div id="share" class="modal fade" role="dialog">
                    <div class="modal-dialog">

                        <div class="modal-content">
                            <div class="modal-body">
                                <h2>SHARE</h2>
                                <form action="">
                                    <textarea className="input-line" type="text" placeholder="EMAIL(S)*" />
                                    <textarea className="input-line textarea-input-line" placeholder="COMMENTS*"></textarea>
                                    <button>Share</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="request" class="modal fade" role="dialog">
                    <div class="modal-dialog">

                        <div class="modal-content">
                            <div class="modal-body">
                                <h2 className="helvetica-neue-regular">Request Package</h2>
                                <form action="">
                                    <textarea type="text" className="input-line" placeholder="Name(s)*" />
                                    <textarea type="text" className="input-line" placeholder="Email(s)*" />
                                    <textarea className="input-line textarea-input-line" placeholder="Comments*"></textarea>
                                    <button data-target="#request-success" data-dismiss="modal" data-toggle="modal">Request Package</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="request-success" class="modal fade" role="dialog">
                    <div class="modal-dialog">

                        <div class="modal-content">
                            <div class="modal-body">
                                <h2>PACKAGE REQUESTED</h2>
                                {/* <form action="">
                                    <input type="text" placeholder="NAME*" />
                                    <input type="text" placeholder="EMAIL(S)*" />
                                    <textarea placeholder="COMMENTS*"></textarea>
                                    <button>Share</button>
                                </form> */}
                                <form>
                                <p className="success-message">
                                    Your request has been well-received.<br/>
                                    One of our agents will be in touch with you directly via the
                                    email address provided.<br/><br/>
                                    Due to the volume of requests received, please allow upto 48 hours for correspondence.<br/><br/>
                                    All the best, from the team at SYSTEM Agency. <br/>
                                </p>
                                    <button onClick={()=>{
                                        window.close();
                                    }} style={{fontFamily:'helvetica-neue, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;'}}>Close</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default ViewPackage;