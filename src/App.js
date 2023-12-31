import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useActionData, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Magazine from "./pages/Magazine";
import Map from "./pages/Map";
import SignUp from "./pages/SignUp";
function App() {
  const location = useLocation();

  const isSignUpPage = location.pathname === '/signup';
  const showNavbar = !isSignUpPage

  return (
    <>
    {showNavbar && <Navbar />}
    <div className="page">
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/aboutus" element = {<AboutUs />} />
        <Route path = "/magazine" element = {<Magazine />} />
        <Route path = "/map" element = {<Map />} />
        <Route path = "/signup" element = {<SignUp />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
