import React from "react";

function Search({toSearch}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Calling search with:")
    console.log(e.target.elements[0].value);
    toSearch(e.target.elements[0].value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e)=>console.log(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
