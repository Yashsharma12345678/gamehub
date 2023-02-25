import Navbar from './components/Navbar'
import HomePage from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Games from './components/Games';
import Contacts from './components/Contacts';

function App() {

  return (
    <>
  <div className='bg-gray-900 h-screen w-screen scrollbar-hide overflow-x-hidden overflow-y-scroll '>
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
    
    

      <footer className=''>
        <Footer/>
      </footer> 
     </div>
      {/* </div> */}
    
    
    </>
  );
}

export default App;
