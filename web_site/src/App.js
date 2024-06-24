import './App.css';
import Footer from './components/Footer';
import NavBarComp from './components/NavBarComp';
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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
