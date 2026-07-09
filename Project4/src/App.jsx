import Header from "./components/Header";
import Intro from "./components/Intro";
import EnemySortBy from "./components/EnemySortBy";
import AllySortBy from "./components/AllySortBy";
import EnemyCardList from "./components/EnemyCardList";
import AllyCardList from "./components/AllyCardList";
import EnemyForm from "./components/EnemyAddForm";
import AllyForm from "./components/AllyAddForm";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

import { useState } from "react";

const initialEnemies = [
  {
    id: crypto.randomUUID(),
    name: "Skeleton",
    health: 50,
    maxhealth: 50,
    level: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Goblin",
    health: 25,
    maxhealth: 25,
    level: 1,
  },
  {
    id: crypto.randomUUID(),
    name: "Zombie",
    health: 75,
    maxhealth: 75,
    level: 1,
  },
];

const initialAllies = [
  {
    id: crypto.randomUUID(),
    name: "Steven",
    allyclass: "Paladin",
    maxhealth: 150,
    health: 150,
    level: 1,
    exp: 0,
    expforlevel: 100,
  },
  {
    id: crypto.randomUUID(),
    name: "Allison",
    allyclass: "Ranger",
    maxhealth: 75,
    health: 75,
    level: 1,
    exp: 0,
    expforlevel: 100,
  },
  {
    id: crypto.randomUUID(),
    name: "Harry",
    allyclass: "Wizard",
    maxhealth: 50,
    health: 50,
    level: 1,
    exp: 0,
    expforlevel: 100,
  },
];

function App() {

  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    setDarkMode((currentMode) => !currentMode);
  }

  const [enemies, setEnemies] = useState(initialEnemies);
  const [enemySortBy, setEnemySortBy] = useState("level");

  const sortedEnemies = [...enemies].sort((a, b) => {
  switch (enemySortBy) {
    case "name":
      return a.name.localeCompare(b.name);

    case "health":
      return b.health - a.health;

    case "level":
      return b.level - a.level;

    default:
      return 0;
  }
  });

  const [allies, setAllies] = useState(initialAllies);
  const [allySortBy, setAllySortBy] = useState("level");
  
  const [stats, setStats] = useState({
    enemyencounters: initialEnemies.length,
    enemydefeated: 0,
    alliesgained: initialAllies.length,
    expearned: 0,
    dmgdealt: 0,
    dmgrecived: 0,
    allieslost: 0,
  });

  const sortedAllies = [...allies].sort((a, b) => {
  switch (allySortBy) {
    case "name":
      return a.name.localeCompare(b.name);

    case "class":
      return a.allyclass.localeCompare(b.allyclass);

    case "health":
      return b.health - a.health;

    case "level":
      return b.level - a.level;

    default:
      return 0;
  }
  });

  function damageAlly(id) {
    const ally = allies.find((ally) => ally.id === id);

    if (!ally) return;

    const damage = Math.min(10, ally.health);
    const died = ally.health - damage <= 0;

    setAllies((allies) =>
      allies
        .map((ally) =>
          ally.id === id
            ? { ...ally, health: ally.health - damage }
            : ally
        )
        .filter((ally) => ally.health > 0)
    );

    setStats((stats) => ({
      ...stats,
      dmgrecived: stats.dmgrecived + damage,
      allieslost: died ? stats.allieslost + 1 : stats.allieslost,
    }));
  }

  function healAlly(id) {
    setAllies((allies) =>
      allies.map((ally) =>
        ally.id === id
          ? {
            ...ally,
            health: Math.min(ally.maxhealth, ally.health + 10),
          }
        : ally
      )
    );
  }

  function addExp(id) {
    setAllies((allies) =>
      allies.map((ally) =>
        ally.id === id
          ? { ...ally, exp: ally.exp + 25 }
          : ally
      )
    );

    setStats((stats) => ({
      ...stats,
      expearned: stats.expearned + 25,
    }));
  }

  function levelUp(id) {
    setAllies(allies =>
      allies.map(ally => {
        if (ally.id !== id) return ally;

        if (ally.exp < ally.expforlevel) return ally;

        return {
          ...ally,
          level: ally.level + 1,
          exp: ally.exp - ally.expforlevel,
          expforlevel: (ally.level + 1) * 100,
          maxhealth: ally.maxhealth + 50,
          health: ally.maxhealth + 50,
        };
      })
    );
  }

  function damageEnemy(id) {
    const enemy = enemies.find((enemy) => enemy.id === id);

    if (!enemy) return;

    const damage = Math.min(10, enemy.health);
    const defeated = enemy.health - damage <= 0;

    setEnemies((enemies) =>
      enemies
        .map((enemy) =>
          enemy.id === id
            ? { ...enemy, health: enemy.health - damage }
            : enemy
        )
        .filter((enemy) => enemy.health > 0)
    );

    setStats((stats) => ({
      ...stats,
      dmgdealt: stats.dmgdealt + damage,
      enemydefeated: defeated
        ? stats.enemydefeated + 1
        : stats.enemydefeated,
    }));
  }

  function healEnemy(id) {
    setEnemies((enemies) =>
      enemies.map((enemy) =>
        enemy.id === id
          ? {
            ...enemy,
            health: Math.min(enemy.maxhealth, enemy.health + 10),
          }
        : enemy
      )
    );
  }


  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header toggleTheme={toggleTheme} />

      <main>
        <Intro />
        <EnemySortBy sortBy={enemySortBy} setSortBy={setEnemySortBy}/>
        <AllySortBy sortBy={allySortBy} setSortBy={setAllySortBy}/>
        <EnemyCardList enemies={sortedEnemies} onDamage={damageEnemy} onHeal={healEnemy}/>
        <AllyCardList allies={sortedAllies} onDamage={damageAlly} onHeal={healAlly} onAddExp={addExp} onLevelUp={levelUp} />
        <EnemyForm setEnemies={setEnemies} setStats={setStats}/>
        <AllyForm setAllies={setAllies} setStats={setStats}/>
        <Stats stats={stats} />
      </main>

      <Footer />
    </div>
  );
}

export default App;