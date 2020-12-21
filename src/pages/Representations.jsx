import React, { Component } from 'react'
import Footer from '../components/Footer.jsx';
import OfficeButtons from '../components/OfficeButtons.jsx';
import config from "../config"
import Navigation from '../components/Navigation.jsx';
import axios from "axios";

class Representations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      applicant_name:"",
      age:"",
      pkid:"",
      email:"",
      mobile_number:"",
      country:"",
      nearest_major_city:"",
      height:"",
      bust:"",
      waist:"",
      hips:"",
      shoes:"",
      hair_colour:"",
      eye_colour:"",
      comments:"",
      attachment: [],
      submitLabel: "Submit Details"

    }
    this.handleInput=this.handleInput.bind(this)
    this.onFileChange=this.onFileChange.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
  }

  handleInput = (e) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  onFileChange=event=>{
    let files = event.target.files;
    let _accum = 0; 
    
    for(let i = 0; i < files.length; i++){
      let _t = files[i].size
      if(_t != NaN) _accum += _t;  
    }

    _accum /= 1000000;

    let tag = document.getElementById('submit_button');
    if(_accum < 7.4) {
      tag.removeAttribute('style');
      this.setState({...this.state, submitLabel: 'Submit Details', attachment: event.target.files });
    }
    else {
        tag.setAttribute('style', 'pointer-events: none; background: #B22222;');
        this.setState({...this.state, submitLabel: 'Please upload less than 7mb.'});
    }
 
  }


submitHandler = (e) => {
  e.preventDefault();
 const formdata=new FormData();
 formdata.append('applicant_name',this.state.applicant_name);
 formdata.append('age',this.state.age);
 formdata.append('pkid',this.state.pkid);
 formdata.append('email',this.state.email);
 formdata.append('mobile_number',this.state.mobile_number);
 formdata.append('country',this.state.country);
 formdata.append('nearest_major_city',this.state.nearest_major_city);
 formdata.append('height',this.state.height);
 formdata.append('bust',this.state.bust);
 formdata.append('waist',this.state.waist);
 formdata.append('hips',this.state.hips);
 formdata.append('shoes',this.state.shoes);
 formdata.append('hair_colour',this.state.hair_colour);
 formdata.append('eye_colour',this.state.eye_colour);
 formdata.append('comments)',this.state.comments);
 for(var x = 0; x < this.state.attachment.length; x++) {
  formdata.append('attachment', this.state.attachment[x])
 }
  axios.post(`${config.URL}/representation`, formdata)
    .then((response) => {
      console.log(response)
      document.getElementById('attachment').value = null;
    })
    .then(this.setState({
      applicant_name:"",
      age:"",
      pkid:"",
      email:"",
      mobile_number:"",
      country:"",
      nearest_major_city:"",
      height:"",
      bust:"",
      waist:"",
      hips:"",
      shoes:"",
      hair_colour:"",
      eye_colour:"",
      comments:"",
      attachment: []
    }))
    .catch(error=>{
      console.log(error);
    })

}

  render() {
    return (
      <div>
        <Navigation />
        <section className="pt-7">
          <div className="w-full container mx-auto px-10 sm:px-6 md:px-32" style={{ 'min-height': '341px' }}>
                    <div className="representation_form">
            <div className="representation_form_inner aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
              <h1 className="form_heading font-Forum">Submit your Details</h1>
              <form enctype="multipart/form-data" onSubmit={this.submitHandler} ><input name="utf8" type="hidden" value="✓" />
                <input className="representations-input-line" type="hidden" name="authenticity_token" value="MtjUymVHKU1pyGXyMejNYz8YUkG6KxG6lYE7BLEwHE1wRaMA9Gc2ToroozprnaZJWNLtxhE2LFm/gNJn8VNwnw==" />
            <input type="text" name="applicant_name" id="_new_contactname" placeholder="NAME*" required="required" value={this.state.applicant_name} onChange={this.handleInput}  />
                <input type="number" name="age" id="_new_contactage" placeholder="AGE*" required="required" value={this.state.age} onChange={this.handleInput} />
                <input type="text" name="pkid" id="_new_contactinstagram_id" placeholder="INSTAGRAM ID*" required="required" value={this.state.pkid} onChange={this.handleInput} />
                <input type="email" name="email" id="_new_contactemail" placeholder="EMAIL*" required="required" value={this.state.email} onChange={this.handleInput} />
                <input type="tel" name="mobile_number" id="_new_contactmobile_number" placeholder="MOBILE NUMBER*" required="required" value={this.state.mobile_number}  onChange={this.handleInput}  />
                <input type="text" name="country" id="_new_contactcountry" placeholder="COUNTRY*" required="required" value={this.state.country}  onChange={this.handleInput}  />
                <input type="text" name="nearest_major_city" id="_new_contactnearest_major_city" placeholder="NEAREST MAJOR CITY" value={this.state.nearest_major_city}  onChange={this.handleInput}  />
                <input type="text" name="height" id="_new_contactheight" placeholder="HEIGHT*" required="required" value={this.state.height}  onChange={this.handleInput}  />
                <input type="text" name="bust" id="_new_contactbust" placeholder="BUST / CHEST" value={this.state.bust}  onChange={this.handleInput}  />
                <input type="text" name="waist" id="_new_contactwaist" placeholder="WAIST" value={this.state.waist}  onChange={this.handleInput}  />
                <input type="text" name="hips" id="_new_contacthips" placeholder="HIPS" value={this.state.hips}  onChange={this.handleInput}  />
                <input type="text" name="shoes" id="_new_contactshoes" placeholder="SHOES" value={this.state.shoes}  onChange={this.handleInput} />
                <input type="text" name="hair_colour" id="_new_contacthair_colour" placeholder="HAIR*" required="required" value={this.state.hair_colour}  onChange={this.handleInput}  />
                <input type="text" name="eye_colour" id="_new_contacteye_colour" placeholder="EYE COLOUR*" required="required" value={this.state.eye_colour} onChange={this.handleInput}  />
                <input name="comments" id="_new_contactcomments" placeholder="COMMENTS" value={this.state.comments} onChange={this.handleInput}  ></input>
                <div className="file_upload fileupload-css-ak">
                  <font class="attachment-limit-label" style= {{"fontSize": "11px"}}>LIMIT 7MB</font>
                  <input type="file" name="attachment" id="attachment"  required="required" multiple onChange={this.onFileChange} />
                </div>
                <div className="re_submit">
                  <input type="submit" name="commit" value={this.state.submitLabel} id="submit_button" data-disable-with="Submit Details" />
                </div>
          </form> 
           </div>
          </div>
          </div>
        </section>
        {/* <OfficeButtons /> */}
        <Footer />
      </div>
    );
  }
}

export default Representations;
