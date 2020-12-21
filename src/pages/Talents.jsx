import React, { Component } from 'react';
import { Link} from "react-router-dom";
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import config from "../config"

class Talents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      hidden: true,
      activeIndex: "",
      selectedImages:[],
      isActiveWomen: false,
      isActiveMen: false,
      currentActive: ''
    }
    this.loadimages = this.loadimages.bind(this);
    this.genderImages = this.genderImages.bind(this);
  }

  componentDidMount() {
    this.loadimages();
    // this.deletselectAll();
  }

  loadimages = () => {
    axios.get(`${config.URL}/talent/section`)
      .then((response) => {
        let images = response.data.item.rows;
       
        images.map((image)=>{
          image.is_requested = false
        }) 
          //save images variable in state
        this.setState({
          images
        })
      });
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

  requestImage=(index)=> {
    console.log(index);
    let images = this.state.images;
    let image = images[index]
    image.is_requested = true;
    images[index] = image
    this.setState({...this.state, images: images});
    this.state.selectedImages.push(index);
    console.log("faisal",this.state.images)
  }

  selectAll=()=>{
    let images =this.state.images
    images.map((image)=>{
      image.is_requested=true;
    })
    this.setState({
      images:images,
    })
  }

  deletselectAll=()=> {
    let images =this.state.images
    images.map((image)=>{
      image.is_requested=false;
    })
    this.setState({
      images:images,
      selectedImages:[]
    })
  }

  removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

  openTab=(url)=>{
    window.open(url,'_blank');
  }

// https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
render() {
      const {url}=this.props.match
      const token=localStorage.getItem("token");
      const Images = this.state.images;
      const items = this.state.images;
      let rowContents = [];
      const contents = items.reduce((acc, image, i) => {
      rowContents.push(
      <div key={i} className="col-sm-3 col-xs-3 mb-6">
        <div className="image_text">




            <div>
            {image.is_requested ?

              <div style={{zIndex: 1}} className="talents-close">
                <i style={{cursor: 'pointer'}} onClick={() => {
                  items[i].is_requested=false;
                  const selectedImages = this.state.selectedImages;
                  const newSelectedImages = this.removeItemAll(selectedImages,i);
                  this.setState({...this.state,image:items,selectedImages:newSelectedImages});
    
                }}  className="material-icons md-1"> clear</i>
              </div>
              :<div></div>
            }

                <div className="img-box">
                  <a href={`${url}/${image.slug}`}>

                    <div className="" className={(image.is_requested ? 'image_text_faded' : '')}>
                      <img  key={image.slug} src={`https://api.systemagency.com${image.Resources[0].route}`}
                      alt={image.name}></img>
                    </div>

                  </a>
                </div>
            
            {image.is_requested ?

               <div className="top-right top-right-fix">
                <h4 className="">ADDED</h4>
                </div>
                :
                <div className="top-right top-right-fix">
                  <button className="" data-target="#share" data-toggle="modal" className="share">
                    <Link >Share</Link></button>
                  <button onClick={()=>this.requestImage(i)}>
                    <Link  className="">ADD TO PACKAGE</Link></button>
                </div>
            }

            </div>
            

            {/* <div>
                <div className="img-box">
                  <a href={`${url}/${image.slug}`}>
                    <img key={image.slug} src={`https://api.systemagency.com${image.Resources[0].route}`}
                    alt={image.name}></img>
                  </a>
                </div>
                <div className="top-right top-right-fix">
                  <button>
                    <Link className="" data-target="#share" data-toggle="modal">Share</Link></button>
                  <button onClick={()=>this.requestImage(i)}>
                    <Link  className="">Request</Link></button>
                </div>
            </div> */}
          





        </div>
        <p className="style_heading">
          <Link to={`${url}/${image.slug}`} style={{color:"black"}} className="dodit-medium"> <strong className="dodit-bold">{image.name}</strong> {image.last_name}</Link>
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
      },[])

      contents.push(<div className="row">
        {rowContents}
      </div>
      );


  return (
  <div>
    <Navigation />
    <div className="Talents mt-6 pt-16">
      <section className="helvetica-neue-italic mx-auto">
        <div className="flex justify-center mb-2 btn-gender">
          <div className="dropdown">
            <div className="men-button">

            <button 
              className={this.state.isActiveMen? 
                "active focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
                : "focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
              }
              id="about-button">
              <Link 
                onClick={() => { this.setState({...this.state, isActiveWomen: false, isActiveMen: true}) }} 
                className="btn_link"
              >Men</Link>
            </button>
            
            </div>

            <div className="men-dropdown">
              

            <div className="dropdown-content">
              <div className="flex justify-center">
                <button onClick={()=> {this.genderImages('men', false)
                  this.setState({...this.state, currentActive: 'men image', isActiveMen: true, isActiveWomen: false})  
                  }}
                  className={this.state.currentActive == 'men image'? 
                      "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                      "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"} 
                      id="about-button"
                >
                  <Link activeClassName='active'>Image</Link>
                </button>
                <button onClick={()=> {
                  this.genderImages('men', true)
                  this.setState({...this.state, currentActive: 'men development', isActiveMen: true, isActiveWomen: false})
                }} 
                className={this.state.currentActive == 'men development'? 
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"} 
                 id="office-button">
                  <Link>Development</Link>
                </button>                
              </div>
            </div>
            </div>

          
          </div>
          <div className="dropdown">
          <div className="women-button">

            <button
              className={this.state.isActiveWomen? 
                "active focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
                : "focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
              }
              id="office-button">
              <Link onClick={() => { this.setState({...this.state, isActiveWomen: true, isActiveMen: false}) }} className="btn_link">Women</Link></button>
              </div>

            <div className="women-dropdown">

            
            <div className="dropdown-content">
              <div className="flex justify-center left">
                <button onClick={()=> {
                  this.genderImages('women', false)
                  this.setState({...this.state, currentActive: 'women image', isActiveMen: false, isActiveWomen: true})
                }} 
                className={this.state.currentActive == 'women image'? 
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"}

                id="about-button">
                  <Link>Image</Link></button>
                  <button onClick={()=> {
                  this.genderImages('women', false)
                  this.setState({...this.state, currentActive: 'women development', isActiveMen: false, isActiveWomen: true})
                }} 
                className={this.state.currentActive == 'women development'? 
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"}

                  id="office-button">
                  <Link>Development</Link></button>
                  <button onClick={()=> {
                  this.genderImages('women', false)
                  this.setState({...this.state, currentActive: 'women curve', isActiveMen: false, isActiveWomen: true})
                }} 
                className={this.state.currentActive == 'women curve'? 
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"}

                  
                  id="office-button">
                  <Link>Curve</Link></button>
              </div>
            </div>
            </div>

          </div>

        </div>
       
      </section>
      {/* <div className="side-labels">
        <span className="view-packages"> 
         <button onClick={()=>{   
           this.openTab(`/viewpackage/${this.state.selectedImages.join(',')}`);
           //page reloads and selected images disappears
           this.deletselectAll();
        }} style={{color:"#333",textDecoration:"none",fontsize:"14px"}} > VIEW PACKAGE</button>
        </span>
        <span className="deselect-all" onClick={()=>this.deletselectAll()}>
          DESELECT ALL
        </span>
      </div> */}

      <div>
        <div className="new-left-panel">
          <button className="view-package"
            onClick={()=>{   
              this.openTab(`/viewpackage/${this.state.selectedImages.join(',')}`);
              //page reloads and selected images disappears
              // this.selectAll();
              // this.deletselectAll();
              // window.location.reload();
              
            }} 
          >VIEW PACKAGE</button>
          <button className="deselect-all"
          onClick={()=>this.deletselectAll()}
          >DESELECT ALL</button>

        </div>
        <div className="talent-content">
          <div className="container pad" style={{ width: '80%', marginTop: '60px'}}>
              {contents}
          </div>
        </div>
      </div>

    </div>
    
    <Footer />
    {/* <div className="middle"> */}
      <div id="share" class="modal fade" role="dialog">
        <div class="modal-dialog">

          <div class="modal-content">          
            <div class="modal-body">
              <h2>Share</h2>
              <form action="">
                <textarea className="input-line" type="text" placeholder="Email(s)*" />
                <textarea className="input-line textarea-input-line" placeholder="Comments*"></textarea>
                <button href="#share-confirm" data-dismiss="modal" data-toggle="modal" >Share</button>
              </form>
            </div>                 
          </div>

        </div>
      </div>

    {/* </div> */}
    

    <div id="share-confirm" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <div class="modal-content">          
          <div class="modal-body">
            <h2>Share</h2>
            <form action="">
            <p className="success-message-big" style={{color:"black"}}>
                SHARED
            </p>
              <button data-dismiss="modal">CLOSE</button>
            </form>
          </div>                 
        </div>

      </div>
    </div>


    <div id="request" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">          
          <div class="modal-body">
            <h2 className="helvetica-neue-regular">Request Package</h2>
            <form action="">
              <textarea type="text" placeholder="Name*" />
              <textarea type="text" placeholder="Emails*" />
              <textarea className="textarea-input-line" placeholder="Comments*"></textarea>
              <button>Request Package</button>
            </form>
          </div>                 
        </div>

      </div>
    </div>
  </div>
  );
  }}

export default Talents;