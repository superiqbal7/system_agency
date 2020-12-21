import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';
import About from '../src/pages/About.jsx';
import Office from '../src/pages/Office.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Talents from './pages/Talents.jsx';
import Flash from './components/Flash';
import Representations from '../src/pages/Representations.jsx';
import Detail from '../src/pages/Detail';
import ViewPackage from './pages/ViewPackage.jsx';
import Work from "./pages/Work";
import Home from './pages/Home.jsx';
// import TalentEdit from '../src/pages/TalentEdit'

const Index = () => (
  <BrowserRouter>
  
    <React.Fragment>
    <Switch>
      <Route exact path="/">
        <Redirect to="/about" />
      </Route>
      <Route path="/About" component={ About }/>
      <Route path="/Office" component={ Office }/>
      <Route path="/login" component={ LoginPage }/>
      <Route path="/landingpage" component={ LandingPage }/>
      <Route exact path="/talents" component={ Talents }/>
      <Route path="/flash" component={ Flash }/>
      <Route path="/representations" component={ Representations }/>
      <Route exact path="/talents/:slug" component={Detail}/>
      <Route exact path="/work" component = {Work} />
      <Route exact path="/viewpackage/:selectedImages" component={ViewPackage}/>
      <Route exact path="/home" component={Home}/>
      {/* <Route  path="/talents/:slug/edit" component={TalentEdit}/> */}
     </Switch>
    </React.Fragment>
  
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));