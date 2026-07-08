
function EnemyForm() {
  return (
    <div id="enemyForm">
        <form >
            <h2>Add Enemy</h2>
            <input type="radio" name="enemyType" value="Goblin"/>
            <label htmlFor="enemyType">Goblin</label>

            <input type="radio" name="enemyType" value="Zombie"/>
            <label htmlFor="enemyType">Zombie</label>

            <input type="radio" name="enemyType" value="Skeleton"/>
            <label htmlFor="enemyType">Skeleton</label>

            <label htmlFor="enemylevel">Enemy Level:</label>
            <input type="number" name="enemylevel"/>

            <button>Create Enemy</button>
        </form>
    </div>
  );
}

export default EnemyForm;