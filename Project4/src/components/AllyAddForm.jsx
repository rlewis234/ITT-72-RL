import { useState } from "react";

function AllyForm({ setAllies, setStats }) {

  const [allyName, setAllyName] = useState("");
  const [allyType, setAllyType] = useState("");
  const [level, setLevel] = useState(1);

  const classHealth = {
    Paladin: 150,
    Knight: 125,
    Ranger: 75,
    Wizard: 50,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!allyName || !allyType) {
      return;
    }

    const newAlly = {
      id: crypto.randomUUID(),
      name: allyName,
      allyclass: allyType,
      level,
      health: level * classHealth[allyType],
      maxhealth: level * classHealth[allyType],
      exp: 0,
      expforlevel: 100 * level,
    };

    setAllies((currentAllies) => [...currentAllies, newAlly]);
    
    setStats((stats) => ({
      ...stats,
      alliesgained: stats.alliesgained + 1,
    }));

    setAllyName("");
    setAllyType("");
    setLevel(1);
  }

  return (
    <div id="allyForm">
        <form onSubmit={handleSubmit}>
            <h2>Add Ally</h2>

            <label htmlFor="allyName">Name:</label>
            <input type="text" name="allyName" id="allyName" value={allyName} onChange={(e) => setAllyName(e.target.value)}></input>

            <label htmlFor="allyType">Class:</label>
            <select id="allyType" name="allyType" value={allyType} onChange={(e) => setAllyType(e.target.value)}>
              <option value="">-- Select a Class --</option>
              {Object.keys(classHealth).map((allyClass) => (
                <option key={allyClass} value={allyClass}>
                  {allyClass}
                </option>
              ))}
            </select>

            <label htmlFor="allylvl">Level:</label>
            <input type="number" name="allylevel" id="allylvl" min={1} value={level} onChange={(e) => setLevel(Number(e.target.value))}/>

            <button type="submit">Create Ally</button>
        </form>
    </div>
  );
}

export default AllyForm;