import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';

function App() {
  return (
    <>
    <div >
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/student' element={<Student />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/student/desc-3' element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
