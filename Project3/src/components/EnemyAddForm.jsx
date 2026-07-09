
function EnemyForm() {
  return (
    <div id="enemyForm">
        <form >
            <h2>Add Enemy</h2>
            <input type="radio" id="enemyTypeG" name="enemyType" value="Goblin"/>
            <label htmlFor="enemyTypeG">Goblin</label>

            <input type="radio" id="enemyTypeZ" name="enemyType" value="Zombie"/>
            <label htmlFor="enemyTypeZ">Zombie</label>

            <input type="radio" id="enemyTypeS" name="enemyType" value="Skeleton"/>
            <label htmlFor="enemyTypeS">Skeleton</label>

            <label htmlFor="enemylevel">Enemy Level:</label>
            <input type="number" id="enemylevel" name="enemylevel"/>

            <button>Create Enemy</button>
        </form>
    </div>
  );
}

export default EnemyForm;