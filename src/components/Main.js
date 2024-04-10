import React, { useReducer } from 'react';
import ConfirmedBooking from './confirmedBooking';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';

const Main = () => {
    const seededRandom = function (seed) {
      var m = 2**35 - 31;
      var a = 185852;
      var s = seed % m;
      return function () {
          return (s = s * a % m) / m;
      };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };
  const submitAPI = function(formData) {
      return true;
  };

  const initialState = {availableTimes:  fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
      return {availableTimes: fetchAPI(new Date(date))}
  }
  const navigate = useNavigate();
  function submitForm (formData) {
      if (submitAPI(formData)) {
          navigate("/confirmed")
      }
  }

  return (
    <div>
      <Layout>
        <Routes> 
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
            <Route path="/reservation" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} ></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default Main;