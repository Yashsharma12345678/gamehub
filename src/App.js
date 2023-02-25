import Navbar from './components/Navbar'
import HomePage from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Games from './components/Games';
import Contacts from './components/Contacts';

function App() {

  return (
    <>
  <div className='bg-gray-900'>
    <Navbar/>
    
    <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
    <Routes>
        <Route path="/games" element={<Games/>}/>
    </Routes>
    <Routes>
        <Route path="/contact" element={<Contacts/>}/>
    </Routes>
    
    <div className="h-96"></div>

      <footer id="footer">
        <Footer/>
      </footer>
      {/* </div> */}
      </div>
    
    
    </>
  );
}

export default App;
