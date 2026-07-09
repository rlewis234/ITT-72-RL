function AllySortBy({ sortBy, setSortBy }) {
  return (
    <div id="allySort">
      <label htmlFor="allysortby">Sort Allies by:</label>

      <select
        id="allysortby"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="level">Level</option>
        <option value="health">Health</option>
        <option value="name">Name</option>
        <option value="class">Class</option>
      </select>
    </div>
  );
}

export default AllySortBy;