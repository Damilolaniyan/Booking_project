import React from "react";

const Booking = (props) => {
  return (
       <div className="bg-white w-3/5 mx-auto rounded-lg shadow-md">
         <div className="flex items-center space-x-20 py-3 px-2 justify-center">
           <span className="flex items-center"><div className="bg-gray-200 rounded-full w-6 h-6 mr-2"></div>Mon, 14 Feb, 2022</span>
           <span className="flex items-center"><div className="bg-gray-200 rounded-full w-6 h-6 mr-2"></div>14:00 &gt; 14:30</span>
           <span className="flex items-center"><div className="bg-gray-200 rounded-full w-6 h-6 mr-2"></div>Barcelona</span>
           <span className="flex items-center"><div className="bg-gray-200 rounded-full w-6 h-6 mr-2"></div>$100</span>
            </div>
            <div className="flex items-center justify-between py-6 px-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-200 rounded-full w-6 h-6"></div>
                <p>Samuel Irinyemi</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="py-2 px-4 bg-blue-500 text-white text-sm rounded">Accept</button>
                <button className="py-2 px-4 text-blue border-blue-500 border text-sm rounded">Can't Make it</button>
              </div>
            </div>
       </div>
    
      )
    };

  export default Booking;
  