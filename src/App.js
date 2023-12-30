import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import Resume from './Resume/Resume';
import ResumeFooter from './Footer/ResumeFooter';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
     <main class="flex-shrink-0">
      <Navigation/>
    <Routes>
   
      <Route path='*' element={<AboutMe/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>}/>     
 
    </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
