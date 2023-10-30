import './App.css';
import { Route, Routes } from 'react-router-dom';
import logo from './Assets/Logo .svg';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import BookingPage from './Components/BookingPage';
import Footer from './Components/Footer';
import ConfirmedBooking from './Components/ConfirmedBooking';


function App() {
  return (
    <>
    <header>
      <img src={logo} />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path='/booking-confirmed' element={<ConfirmedBooking/>}></Route>
      </Routes>
    </header>
    <Footer />

    </>
  );
}

export default App;
