import React, { useState } from "react";
import { Users } from "../../users";
import "./searchbar.css";
import Table from "../table/Table";

export default function Searchbar() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => item.first_name.toLowerCase().includes(query));
  };

  // console.log(query);

  // console.log(
  //   Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  // );
  return (
    <div className="search_container">
      <div className="searchbar">
        <div className="inputbox">
          <input
            type="text"
            placeholder="Enter search text"
            className="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">SEARCH</button>
        </div>
      </div>

      <div>
        <Table data={search(Users)} />
      </div>
    </div>
  );
}
