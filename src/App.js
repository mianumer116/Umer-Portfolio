import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './com/nav.js';
import Home from './com/home.js';
import Courses from './com/courses.js';
import Footer from './com/footer.js';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/Umer-Portfolio"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/courses"
            element={<Courses />}
            onClick={scrollToTop}
          />
          <Route
            path="/contact"
            element={<Footer />}
            onClick={scrollToTop}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
