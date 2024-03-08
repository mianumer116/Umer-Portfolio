import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './com/nav.js'
import Home from './com/home.js'
import Courses from './com/courses.js'


function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element ={<Home/>}/>
        <Route path='/courses' element ={<Courses/>}/>
     
      </Routes>
    </Router>
    </>
  );
}

export default App;
