import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/pages/Home';
import Connexion from './components/pages/Connexion'
import Contact from './components/pages/Contact';
import Panier from './components/pages/Panier';
import Logout from './components/pages/Logout';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="./" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="Connexion" element={<Connexion/>}/>
        <Route path="Contact" element={<Contact/>} />
        <Route path="Panier" element={<Panier/>} />
        <Route path ="Logout" element={<Logout/>}/>
        
      </Routes>
    
    </div>
  );
}

export default App;

