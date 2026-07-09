import AllyCard from "./AllyCard";

function AllyCardList({ allies, onDamage, onHeal, onAddExp, onLevelUp, }) {
  return (
    <section>
      <ul id="allyCardList">
        {allies.map((ally) => (
          <AllyCard
            key={ally.id}
            {...ally}
            onDamage ={onDamage}
            onHeal = {onHeal}
            onAddExp={onAddExp}
            onLevelUp={onLevelUp}
          />
        ))}
      </ul>
    </section>
  );
}

export default AllyCardList;