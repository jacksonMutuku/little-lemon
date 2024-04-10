import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Nav';
import Header from './components/Header'
import Footer from './components/Footer'
// import Reserve from './components/Main';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/confirmedBooking';
import Reserve from './components/Reserve';
import Main from './components/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </>
  );
}

export default App;
