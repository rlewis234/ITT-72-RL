import paladin from "../assets/allyportraits/paladin.png";

function AllyCard({ name, allyclass, maxhealth, health, level, exp, expforlevel }) {
  return (
    <li className="allycard">
      <img src={paladin} alt={`${name}`} className="ally-image" />
      <h2>{name}</h2>
      <p>Class: {allyclass}</p>
      <p>Health: {health}/{maxhealth}</p>
      <p>Level: {level}</p>
      <p>EXP: {exp}/{expforlevel}</p>
      <button>Damage Ally</button>
      <button>Heal Ally</button>
      <button>Add Exp</button>
      <button>Level Up</button>
    </li>
  );
}

export default AllyCard;