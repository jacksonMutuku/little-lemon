import React from 'react';
import { useState } from 'react';

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("")

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e)
  };


  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Book Now</h1>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={date} onChange={(e) => handleChange(e.target.value)} required/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={times} onChange={(e) => setTimes(e.target.value)} required>
        {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={occasion} key={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit" value={"Make Your Reservation"} aria-label="On Click">Make Your Reservation</button>
    </form>
  );
};


export default BookingForm;
