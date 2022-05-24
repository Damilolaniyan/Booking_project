import React from 'react';
import './App.css';
import Booking from './components/booking';
import Booking2 from './components/booking2';


function App() {
  return (
    <div className='space-y-6'>
      <p className='mt-4 ml-64 font-semibold text-black'>New Booking for you.</p>
      <Booking/>      
      <Booking/>  
      <Booking/>    
      <Booking2/>
      <Booking2/>
      <Booking2/>
    </div>
  );
}

export default App;