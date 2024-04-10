import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Nav';
import Header from './components/Header'
import Footer from './components/Footer'
// import Reserve from './components/Main';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/confirmedBooking';

function App() {
  return (
    <>
      <Routes> 
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      {/* <header>
        <div className="logo-nav">
          <Header/>
          <Navigation/>
          <HomePage/>
        </div>
      </header>
      <main>
        <div className="main-section"><Reserve/></div>
      </main>
      <footer><Footer/></footer> */}
    </>
  );
}

export default App;
