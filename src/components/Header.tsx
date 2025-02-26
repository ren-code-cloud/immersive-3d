import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        position: "fixed",
        backgroundColor: "#96000D",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem 5rem",
        textTransform: "uppercase",
      }}
    >
      <h1 className="text-[#FDD74D] font-bold text-xl">{"<Async Dev />"}</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          textTransform: "uppercase",
        }}
        className="text-[1rem] text-white font-bold"
      >
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>Shop</span>
        </li>
        <li>
          <span>FAQ</span>
        </li>
        <li>
          <button
            className="font-bold"
            style={{
              color: "#FDD74D",
              borderRadius: "0.5rem",
              border: "2px solid #FDD74D",
              padding: "0.5rem 2rem",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
              textTransform: "uppercase",
            }}
          >
            Sign up
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
