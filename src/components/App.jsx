import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Blogpage from './pages/Blogpage';
import Home from './pages/Home';
import Notfoundpages from './pages/Notfoundpages';

export const App = () => {
  return (
    <>
      <header>
        <Link to="/"></Link>
        <Link to="/posts"></Link>
        <Link to="/about"></Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Blogpage />} />
        <Route path="*" element={<Notfoundpages />} />
      </Routes>
    </>
  );
};
