import React, { useReducer } from 'react';
import BookingPage from './BookingPage';
import ConfirmedBooking from './confirmedBooking';

const API_URL = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';

// Function to fetch available times from API for a given date
const fetchAvailableTimes = async (date) => {
  try {
    const response = await fetch(`${API_URL}?date=${date}`);
    const data = await response.json();
    return data.availableTimes || [];
  } catch (error) {
    console.error('Error fetching available times:', error);
    return [];
  }
};
// Initialize available times for today's date
const initializeTimes = async () => {
  const today = new Date().toISOString().slice(0, 10); // Format today's date (YYYY-MM-DD)
  return await fetchAvailableTimes(today);
};

// Update available times for the selected date
const updateTimes = async (selectedDate) => {
  return await fetchAvailableTimes(selectedDate);
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return updateTimes(action.payload.selectedDate);
    default:
      return state;
  }
};


const Main = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const history = history();

  const submitForm = async (formData) => {
    try {
      const isSubmitted = await submitAPI(formData);
      if (isSubmitted) {
        setBookingConfirmed(true);
        history.push('/confirmed'); // Navigate to confirmation page if booking is successful
      } else {
        console.error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };
  const handleDateChange = async (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', payload: { selectedDate } });
  };
  return (
    <div>
      <BookingPage availableTimes={availableTimes} onDateChange={handleDateChange} onSubmitForm={submitForm}/>
    </div>
  );
};

export default Main;