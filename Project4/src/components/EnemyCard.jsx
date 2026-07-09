import Skeleton from "../assets/enemyportraits/skeleton.png";
import Goblin from "../assets/enemyportraits/goblin.png";
import Zombie from "../assets/enemyportraits/zombie.png";

const images = {
  Skeleton,
  Goblin,
  Zombie,
};

function EnemyCard({ id, name, maxhealth, health, level, onDamage, onHeal }) {

  const isLowHealth = health <= maxhealth * 0.25;

  return (
    <li className={`enemycard ${isLowHealth ? "low-health" : ""}`}>
      <img src={images[name]} alt={`${name}`} className="enemy-image" />
      <h2>{name}</h2>
      <p>Health: {health}/{maxhealth}</p>
      <p>Level: {level}</p>
      <button onClick={() => onDamage(id)}>Damage Enemy</button>
      <button onClick={() => onHeal(id)}>Heal Enemy</button>
    </li>
  );
}

export default EnemyCard;