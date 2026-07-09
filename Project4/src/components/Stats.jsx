import StatsCard from "./StatsCard";

function Stats({ stats }) {
  return (
    <div id="stats">
      <StatsCard 
        enemyencounters={stats.enemyencounters} 
        enemydefeated={stats.enemydefeated} 
        alliesgained={stats.alliesgained} 
        expearned={stats.expearned} 
        dmgdealt={stats.dmgdealt} 
        dmgrecived={stats.dmgrecived} 
        allieslost={stats.allieslost} />
    </div>
  );
}

export default Stats;