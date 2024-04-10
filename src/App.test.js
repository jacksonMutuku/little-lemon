import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './components/BookingPage';
import Main from './components/Main';

// test('initializeTimes returns the correct inital available times', ()=>{
//   const {initializeTimes} = render (<Main/>).getInstance();
//   const expectedTimes =  ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//   const actualTimes = initializeTimes();
//   expect(actualTimes).toEqual(expectedTimes);
// })

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})