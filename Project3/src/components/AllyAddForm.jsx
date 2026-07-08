
function AllyForm() {
  return (
    <div id="allyForm">
        <form >
            <h2>Add Ally</h2>
            <input type="radio" name="allytype" value="Paladin"/>
            <label htmlFor="allyType">Paladin</label>

            <input type="radio" name="allyType" value="Knight"/>
            <label htmlFor="allyType">Knight</label>

            <input type="radio" name="allyType" value="Ranger"/>
            <label htmlFor="allyType">Ranger</label>

            <input type="radio" name="allyType" value="Wizard"/>
            <label htmlFor="allyType">Wizard</label>

            <label htmlFor="allylevel">Ally Level:</label>
            <input type="number" name="allylevel"/>

            <button>Create Ally</button>
        </form>
    </div>
  );
}

export default AllyForm;