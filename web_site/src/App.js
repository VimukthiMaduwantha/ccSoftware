import './App.css';
import NavBarComp from './components/NavBarComp';
import Home from './pages/Home';
import './styles/Navbar.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBarComp />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
