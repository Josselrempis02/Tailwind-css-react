import React from "react";

function App() {
  return (
   <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="https://source.unsplash.com/random" alt="" 
    className="w-full"/>
    <div className="font-bold text-red-500 text-xl mb-2">
      Photo by sipmer
    </div>
    <ul>
      <li>
        <strong>Views: </strong>
        4000
      </li>
      <li>
        <strong>Downloads: </strong>
        4000
      </li>
      <li>
        <strong>likes: </strong>
        1.2M
      </li>
    </ul>
    <div className="py-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-7">
        #TAG1
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-7">
        #TAG1
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-7">
        #TAG1
      </span>
    </div>
   </div>
  );
}

export default App;
