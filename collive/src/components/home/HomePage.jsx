import React, { useState } from "react";
import "./index.css";
const HomePage = () => {
  // State to store the selected value
  const [selectedOption, setSelectedOption] = useState("");

  // Handle change event for dropdown
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div>
        <h1>Submit a Classified</h1>
      </div>

      <div className="navContainer">
        <div className="navigation">
          <p>Information</p>
          <p className="num">1</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          style={{ height: "3rem " }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>

        <div className="navigation">
          <p>Cart</p>
          <p className="num">2</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          style={{ height: "3rem " }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>

        <div className="navigation">
          <p>Checkout</p>
          <p className="num">3</p>
        </div>
      </div>

      <div className="info">
        <div>
          <label htmlFor="myDropdown">Select a Category*</label>
          <select
            id="myDropdown"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="">For Rent -$9.99</option>
            <option value="option1">For Rent -$9.99</option>
            <option value="option2">For Rent -$9.99</option>
            <option value="option3">For Rent -$9.99</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default HomePage;
