function StatsCard({ enemyencounters, enemydefeated, alliesgained, expearned, dmgdealt, dmgrecived, allieslost }) {
  return (
    <div id="statsCard">
      <h2>Stats</h2>
      <p>Enemies Encountered: {enemyencounters}</p>
      <p>Enemies Defeated: {enemydefeated}</p>
      <p>Allies Gained: {alliesgained}</p>
      <p>EXP Earned: {expearned}</p>
      <p>Damage Dealt: {dmgdealt}</p>
      <p>Damage Recived: {dmgrecived}</p>
      <p>Allies Lost: {allieslost}</p>
    </div>
  );
}

export default StatsCard;