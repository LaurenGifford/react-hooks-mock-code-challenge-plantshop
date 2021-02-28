import React, {useState} from "react";

function Search({onSearchChange}) {
  const [searchedName, setSearchedName] = useState("")

  function handleSearch(e) {
    e.preventDefault()
    console.log("searching")
    onSearchChange(searchedName)
  }

  return (
    <div className="searchbar">
      <form onSubmit={(e) => handleSearch(e)}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchedName}
        placeholder="Type a name to search..."
        onChange={(e) => setSearchedName(e.target.value)}
      />
      </form>
    </div>
  );
}

export default Search;
