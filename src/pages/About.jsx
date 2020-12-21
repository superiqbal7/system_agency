import React, { Component } from 'react'
import Footer from '../components/Footer.jsx';
import OfficeButtons from '../components/OfficeButtons.jsx';
import Navigation from '../components/Navigation.jsx';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Navigation />
          <div  className="about-page" >
            <section className="pt-48">
              <div className="w-full container mx-auto px-10 sm:px-6 md:px-32" style={{ 'min-height': '341px' }}>
                <div style={{width:'98%'}}>
                  <p className="mt-8 text-justify helvetica-neue-light" style={{ 'font-size': '14px',fontStyle:'italic', textAlign:'center' }}>
                    Founded in 2009: SYSTEM’s ethos for iconic excellence in talent management, public relations, and creative innovation runs in alignment with the vision of co-founder, John Casablancas, after he built Elite Model Management and the supermodel careers of Gisele Bündchen, Carol Alt, Linda Evangelista, Cindy Crawford, Naomi Campbell, Stephanie Seymour, Heidi Klum, and Claudia Schiffer.
                  </p>
                  <p className="mt-8 text-justify helvetica-neue-light" style={{ 'font-size': '14px',fontStyle:'italic' , textAlign:'center' }}>
                    SYSTEM is a high-fashion talent agency that designs and develops unique brand identities and the tailor-made careers of today’s most coveted faces and artists. With a shared passion for visual identity and talent development, the team strives to provide relevant, timely, and creative solutions to meet the objectives of our clients. With core competencies across Public Relations, Communications, Social Media, Branding, Client Relations, and A&R, SYSTEM’S dedication to precision combined with a high-performance workflow augmented by technology has earned us prestigious acclaim.
                  </p>
                </div>
              </div>
            </section>
            <div className="footer-zone">
              <OfficeButtons />
              <Footer />    
            </div>
          </div>
      </div>
    );
  }
}

export default About;
