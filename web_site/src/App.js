import './App.css';
import Footer from './components/Footer';
// import NavBarComp from './components/NavBarComp';
import NavBarCompNew from './components/NavBarCompNew';
import Home from './pages/Home';
import Team from './pages/Team';
import './styles/Navbar.css'
import './styles/HuneyComb.css'
import './styles/Contact.css'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import WebDev from './pages/WebDev'
import MobileDev from './pages/MobileDev'
import DIgitalMarketing from './pages/DIgitalMarketing'
import PrductDesign from './pages/PrductDesign'
import SocialMedia from './pages/SocialMedia';
import EmailMarketing from './pages/EmailMarketing';
import SearchEngin from './pages/SearchEngin';
import GraphicDesign from './pages/GraphicDesign';
import ContentMarketing from './pages/ContentMarketing';

function App() {

  return (
    <>
      {/* <NavBarComp /> */}
      <NavBarCompNew />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/teammembers' element={<Team />} />
          <Route exact path='/contactus' element={<ContactUs />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/webDevelopment' element={<WebDev />} />
          <Route exact path='/mobileDevelopment' element={<MobileDev />} />
          <Route exact path='/digitalMarketing' element={<DIgitalMarketing />} />
          <Route exact path='/productDesign' element={<PrductDesign />} />
          <Route exact path='/socialMedia' element={<SocialMedia />} />
          <Route exact path='/emailMarketing' element={<EmailMarketing />} />
          <Route exact path='/serachEngineOptimization' element={<SearchEngin />} />
          <Route exact path='/graphicDesign' element={<GraphicDesign />} />
          <Route exact path='/contentMarketing' element={<ContentMarketing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
