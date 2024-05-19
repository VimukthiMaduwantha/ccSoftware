import './App.css';
import Footer from './components/Footer';
import NavBarComp from './components/NavBarComp';
import Home from './pages/Home';
import Team from './pages/Team';
import './styles/Navbar.css'
import './styles/HuneyComb.css'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs';

function App() {

  return (
    <>
      <NavBarComp />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/teammembers' element={<Team />} />
          <Route exact path='/contactus' element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
