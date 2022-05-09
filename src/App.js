import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import NavReact from './components/NavReact';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Memes from './Pages/Memes';
import Perfil from './Pages/Perfil';
import { leerDeLocalStorage } from './utils/localStorage';

const memesLocal = leerDeLocalStorage("memes") || [];

function App() {
  const [section, setSection] = useState('memes');
  const [memes, setMemes] = useState(memesLocal);



  return (
    <div className="footer-fix" >
      <NavReact setSection={setSection} />
      <Container>
        {section === 'memes' && <Memes memes={memes} />}
        {section === 'login' &&  <Login />}
        {section === 'perfil' &&  <Perfil />}
        {section === 'admin' && <Admin memes={memes} setMemes={setMemes} />}        
      </Container>
      <Footer />
    </div>
  );
}

export default App;
