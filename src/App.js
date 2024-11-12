import './App.css';
import {  BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import LICPage from './components/Lic';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={Home} />  
    <Route path='/Lic' Component={LICPage} />  
    <Route path='/about' Component={About} />  
    <Route path='/Contact' Component={Contact} /> 
    </Routes>
    
    </BrowserRouter>
    </> 
  );
}

export default App;
