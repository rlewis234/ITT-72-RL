function EnemySortBy({ sortBy, setSortBy }) {
  return (
    <div id="enemySort">
      <label htmlFor="enemysortby">Sort Enemies by:</label>

      <select
        id="enemysortby"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="level">Level</option>
        <option value="health">Health</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}

export default EnemySortBy;