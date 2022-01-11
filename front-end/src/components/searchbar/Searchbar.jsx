import React from "react";
import "./searchbar.css";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <div className="inputbox">
        <input type="text" placeholder="Enter search text" />
        <button type="submit">SEARCH</button>
      </div>
    </div>
  );
}
