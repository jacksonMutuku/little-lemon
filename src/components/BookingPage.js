import React from 'react';
import { useState } from 'react';

const BookingPage = ({ availableTimes, onSubmitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const timesToDisplay = availableTimes?.length ? availableTimes : [];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm(formData); // Call onSubmitForm function passed from parent component
    // Reset form data
    setFormData({
      date: '',
      time: '',
      guests: '',
      occasion: ''
    });
  };

  // Function to check if form is valid
  const isFormValid = () => {
    // Check if all required fields are filled
    return formData.date && formData.time && formData.guests && formData.occasion;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <h1>Book Now</h1>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleInputChange} required/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleInputChange} required>
        {timesToDisplay.map((timeOption, index) => (
          <option key={index}>{timeOption}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleInputChange} required/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleInputChange} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit" disabled={!isFormValid()} aria-label="On Click">Make Your Reservation</button>
    </form>
  );
};
// const BookingPage = ({ availableTimes, onDateChange, onSubmitForm}) => {
  
//   const [formData, setFormData] = useState({
//     date: '',
//     time: '',
//     guests: '',
//     occasion: ''
//   });

//   // const [date, setDate]= useState('');
//   // const [time, setTime] = useState('');
//   // const [guests, setGuests] = useState('');
//   // const [occasion, setOccasion] = useState('')
  
//   const timesToDisplay = availableTimes?.length ? availableTimes : [];


//   // const handleDateChange = (event) => {
//   //   const selectedDate = event.target.value;
//   //   onDateChange(selectedDate); // Call prop function to update availableTimes in Main.js
//   //   setDate(selectedDate); // Update local state for display
//   //   // dispatch({ type: 'UPDATE_TIMES', payload: { selectedDate } });

//   // };
  

//   // const handleTimeChange = (event) => {
//   //     setTime(event.target.value);
//   // };

//   // const handleGuestsChange = (event) => {
//   //     setGuests(event.target.value);
//   // };

//   // const handleOccasionChange = (event) => {
//   //     setOccasion(event.target.value);
//   // };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log('Form submitted:', { date, time, guests, occasion });
//     onSubmitForm(formData); // Call onSubmitForm function passed from parent component
//     // Reset form data
//     setFormData({
//       date: '',
//       time: '',
//       guests: '',
//       occasion: ''
//     });
//     // setDate('');
//     // setTime('');
//     // setGuests('');
//     // setOccasion('');
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
//       <h1>Book Now</h1>
//       <label htmlFor="res-date">Choose date</label>
//       <input type="date" id="res-date" name="date" value={formData.date} onChange={handleInputChange}/>
//       <label htmlFor="res-time">Choose time</label>
//       <select id="res-time" name="time" value={formData.time} onChange={handleInputChange}>
//         {timesToDisplay.map((timeOption, index) => (
//           <option key={index}>{timeOption}</option>
//         ))}
//       </select>
//       <label htmlFor="guests">Number of guests</label>
//       <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleInputChange} />
//       <label htmlFor="occasion">Occasion</label>
//       <select id="occasion" name="occasion" value={formData.occasion} onChange={handleInputChange}>
//         <option>Birthday</option>
//         <option>Anniversary</option>
//       </select>
//       <button type="submit">Make Your Reservation</button>
//     </form>
//     // <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
//     //   <h1>Book Now</h1>
//     //   <label htmlFor="res-date">Choose date</label>
//     //   <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
//     //   <label htmlFor="res-time">Choose time</label>
//     //   <select id="res-time"  value={time} onChange={handleTimeChange}>
//     //     {timesToDisplay.map((timeOption, index) => (
//     //       <option key={index}>{timeOption}</option>
//     //     ))}
//     //   </select>
//     //   <label htmlFor="guests">Number of guests</label>
//     //   <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />
//     //   <label htmlFor="occasion">Occasion</label>
//     //   <select id="occasion" value={occasion} onChange={handleOccasionChange}>
//     //     <option>Birthday</option>
//     //     <option>Anniversary</option>
//     //   </select>
//     //   <button type="submit">Make Your Reservation</button>
//     // </form>
//   );
// };

export default BookingPage;
