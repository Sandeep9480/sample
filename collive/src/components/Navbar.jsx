import React from "react";
import "./global.css";

const Navbar = ({ childern }) => {
  return (
    <>
      <div
        className="navbarContainer"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "40%",
          gap: "70%",
          maxHeight: "120px",
          padding: "20px 20px",
          height: "40px",
          //   position: "fixed",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5%",
          }}
        >
          {" "}
          <img src="download.png" alt="" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          style={{
            height: "3rem",
            width: "30rem",
            opacity: "0.3",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        {childern}
      </div>
      <hr style={{ color: "silver", opacity: "0.3" }} />
    </>
  );
};

export default Navbar;
