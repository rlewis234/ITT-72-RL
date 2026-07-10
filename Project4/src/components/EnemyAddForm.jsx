import { useState } from "react";

function EnemyForm({ setEnemies, setStats }) {

  const [enemyType, setEnemyType] = useState("");
  const [level, setLevel] = useState(1);

  const enemyHealth = {
    Goblin: 25,
    Skeleton: 50,
    Zombie: 100,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!enemyType) {
      return;
    }

    const newEnemy = {
      id: crypto.randomUUID(),
      name: enemyType,
      level,
      health: level * enemyHealth[enemyType],
      maxhealth: level * enemyHealth[enemyType],
    };

    setEnemies((currentEnemies) => [
      ...currentEnemies,
      newEnemy,
    ]);

    setStats((stats) => ({
      ...stats,
      enemyencounters: stats.enemyencounters + 1,
    }));

    setEnemyType("");
    setLevel(1);

    
  }

  return (
    <div id="enemyForm">
        <form onSubmit={handleSubmit}>
            <h2>Add Enemy</h2>

            <label htmlFor="enemyType">Enemy Type:</label>
            <select id="enemyType" name="enemyType" value={enemyType} onChange={(e) => setEnemyType(e.target.value)} >
              <option value="">-- Select an Enemy --</option>
              {Object.keys(enemyHealth).map((enemy) => (
                <option key={enemy} value={enemy}>
                  {enemy}
                </option>
              ))}
            </select>

            <label htmlFor="enylvl">Level:</label>
            <input type="number" name="enemylevel" id="enylvl" min={1} value={level} onChange={(e) => setLevel(Number(e.target.value))}/>

            <button type="submit">Create Enemy</button>
        </form>
    </div>
  );
}

export default EnemyForm;