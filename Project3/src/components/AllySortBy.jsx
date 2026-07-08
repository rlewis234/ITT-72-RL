function AllySortBy() {
  return (
    <div id="allySort">
        <label htmlFor="allysortby">Sort Allies by:</label>
        <select name="allysortby" id="allysortby">
            <option value="Level">Level</option>
            <option value="Health">Health</option>
            <option value="Name">Name</option>
        </select>
    </div>
  );
}

export default  AllySortBy;