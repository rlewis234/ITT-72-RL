import StatsCard from "./StatsCard";

function Stats() {
  return (
    <div id="stats">
      <StatsCard enemyencounters="0" enemydefeated="0" alliesgained="0" expearned="0" dmgdealt="0" dmgrecived="0" allieslost="0" />
    </div>
  );
}

export default Stats;