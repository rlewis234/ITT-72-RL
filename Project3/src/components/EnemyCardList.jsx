import EnemyCard from "./EnemyCard";

function EnemyCardList() {
  return (
    <section >
      <ul id="enemyCardList">
        <EnemyCard name="Skeleton" maxhealth="50" health="50" level="1" />
        <EnemyCard name="Goblin" maxhealth="25" health="25" level="1"/>
        <EnemyCard name="Zombie" maxhealth="75" health="75" level="1"/>
      </ul>
    </section>
  );
}

export default EnemyCardList;