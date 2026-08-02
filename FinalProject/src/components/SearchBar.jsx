import { useState } from "react";

function SearchBar({ search, setSearch, onSearch }) {
  const [inputError, setInputError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!search.trim()) {
      setInputError("Input cannot be blank. ");
      return;
    }

    setInputError("");
    onSearch();
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search TV shows..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);

            if (e.target.value.trim()) {
              setInputError("");
            }
          }}
        />

        <button type="submit">Search</button>
      </form>

      {inputError && <p className="search-error">{inputError}</p>}
    </>
  );
}

export default SearchBar;
