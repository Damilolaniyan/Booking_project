import React from "react";

const Booking2 = (props) => {
  return (
       <div className="bg-white w-3/5 mx-auto rounded-lg shadow-md">
         <div className="flex items-center space-x-3 py-3 px-2 border-b border-gray-200">
                <div className="bg-gray-200 rounded-full w-6 h-6"></div>
                <p>Samuel Irinyemi</p>
              </div>
            <div className="flex flex-col space-y-3 py-3 px-2 justify-center">
           <span className="flex items-center"><div className="bg-gray-200 rounded-full w-6 h-6 mr-2"></div>Mon, 14 Feb, 2022</span>
           <span className="flex items-center"><div className="bg-gray-200 rounded-full w-6 h-6 mr-2"></div>14:00 &gt; 14:30</span>
           <span className="flex items-center"><div className="bg-gray-200 rounded-full w-6 h-6 mr-2"></div>Barcelona</span>
           <span className="flex items-center"><div className="bg-gray-200 rounded-full w-6 h-6 mr-2"></div>$100</span>
            </div>
       </div>
    
      )
    };

  export default Booking2;