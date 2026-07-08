function EnemySortBy() {
  return (
    <div id="enemySort">
      <label htmlFor="enemysortby">Sort Enemies by:</label>
      <select name="enemysortby" id="enemysortby">
          <option value="Level">Level</option>
          <option value="Health">Health</option>
          <option value="Name">Name</option>
      </select>
    </div>
  );
}

export default EnemySortBy;
