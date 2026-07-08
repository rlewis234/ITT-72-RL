import AllyCard from "./AllyCard";

function AllyCardList() {
  return (
    <section >
      <ul id="allyCardList">
        <AllyCard name="Steven" allyclass="Paladin" maxhealth="150" health="150" level="1" exp="0" expforlevel="100"/>
        <AllyCard name="Allison" allyclass="Ranger" maxhealth="75" health="75" level="1" exp="0" expforlevel="100"/>
        <AllyCard name="Harry" allyclass="Wizard" maxhealth="50" health="50" level="1" exp="0" expforlevel="100"/>
      </ul>
    </section>
  );
}

export default AllyCardList;