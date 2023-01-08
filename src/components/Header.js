import React from "react";
import Search from "./Search";

function Header({toSearch}) {
  return (
    <header >
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search toSearch={toSearch}/>
    </header >
  );
}

export default Header;
