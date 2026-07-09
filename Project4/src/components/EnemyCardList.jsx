import EnemyCard from "./EnemyCard";

function EnemyCardList({ enemies, onDamage, onHeal }) {
  return (
    <section>
      <ul id="enemyCardList">
        {enemies.map((enemy) => (
          <EnemyCard
            key={enemy.id}
            {...enemy}
            onDamage={onDamage}
            onHeal={onHeal}
          />
        ))}
      </ul>
    </section>
  );
}

export default EnemyCardList;