import skeleton from "../assets/enemyportraits/skeleton.png";

function EnemyCard({ name, maxhealth, health, level }) {
  return (
    <li className="enemycard">
      <img src={skeleton} alt={`${name}`} className="enemy-image" />
      <h2>{name}</h2>
      <p>Health: {health}/{maxhealth}</p>
      <p>Level: {level}</p>
      <button>Damage Enemy</button>
      <button>Heal Enemy</button>
    </li>
  );
}

export default EnemyCard;