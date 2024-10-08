import React, { useState } from "react";

function Search({ setCity }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setCity(inputValue); // Update the city name in the parent component
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mx-6">
        <h1 className="my-3"> Search for a City:</h1>
        <form action="" method="post" className="mb-4">
          <label htmlFor="city"></label>
          <input
            type="text"
            name="city"
            id="cityName"
            placeholder="City"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </form>
        <div>
          <button
            onClick={handleSearch}
            type="submit"
            class="flex w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
export default Search;
