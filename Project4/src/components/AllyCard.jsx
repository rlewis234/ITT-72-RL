import Paladin from "../assets/allyportraits/paladin.png";
import Knight from "../assets/allyportraits/knight.png";
import Ranger from "../assets/allyportraits/ranger.png";
import Wizard from "../assets/allyportraits/wizard.png";

const portraits = {
  Paladin,
  Knight,
  Ranger,
  Wizard
}

function AllyCard({ id, name, allyclass, maxhealth, health, level, exp, expforlevel, onDamage, onHeal, onAddExp, onLevelUp, }) {

  const className =
  health <= maxhealth * 0.25
    ? "allycard low-health"
    : exp >= expforlevel
    ? "allycard level-ready"
    : "allycard";

  return (
    <li className={className}>
      <img src={portraits[allyclass]} alt={`${name}`} className="ally-image" />
      <h2>{name}</h2>
      <p>Class: {allyclass}</p>
      <p>Health: {health}/{maxhealth}</p>
      <p>Level: {level}</p>
      <p>EXP: {exp}/{expforlevel}</p>

      <button onClick={() => onDamage(id)}>Damage Ally</button>
      <button onClick={() => onHeal(id)}>Heal Ally</button>
      <button onClick={() => onAddExp(id)}>Add EXP</button>
      <button onClick={() => onLevelUp(id)} disabled={exp < expforlevel}>Level Up</button>
      
    </li>
  );
}

export default AllyCard;