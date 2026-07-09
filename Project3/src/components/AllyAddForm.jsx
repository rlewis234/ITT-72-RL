
function AllyForm() {
  return (
    <div id="allyForm">
        <form >
            <h2>Add Ally</h2>
            <input type="radio" id="allyTypeP" name="allyType" value="Paladin"/>
            <label htmlFor="allyTypeP">Paladin</label>

            <input type="radio" id="allyTypeK" name="allyType" value="Knight"/>
            <label htmlFor="allyTypeK">Knight</label>

            <input type="radio" id="allyTypeR" name="allyType" value="Ranger"/>
            <label htmlFor="allyTypeR">Ranger</label>

            <input type="radio" id="allyTypeW" name="allyType" value="Wizard"/>
            <label htmlFor="allyTypeW">Wizard</label>

            <label htmlFor="allylevel">Ally Level:</label>
            <input type="number" id="allylevel" name="allylevel"/>

            <button>Create Ally</button>
        </form>
    </div>
  );
}

export default AllyForm;