import './App.css';
// import User from './User';
// import Person from './Person';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Page404 from './Components/Page404'; 
import User from './Components/User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/user/:namer" element={<User />} />
        {/* <Route path="/*" element={<Navigate to="/" />}/> */}
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;