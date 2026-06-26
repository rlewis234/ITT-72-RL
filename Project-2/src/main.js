import "./style.css";

import { welcomeMessage } from "./messages.js";
import { aboutMe } from "./messages.js";
import { render } from "./rendering.js";
import { toggleTheme } from "./rendering.js";
import { createProject } from "./create.js";



document.querySelector('#app').innerHTML = `
<section id="welcome">
  <h1> Web Scripting 2 Portfolio Starter App</h1>
  <p>${welcomeMessage}</p>
  <button id="toggle-theme">Dark</button>
</section>

<section id="aboutMeSect">
  <h2>About Me</h2>
  <p>${aboutMe}</p>
</section>

<section id="goals">
  <h2>Goals for this Semester</h2>
  <ul id="goalsList"></ul>
</section>

<section id="skillsWantToLearn">
  <h2>Skills I want to learn</h2>
  <ul id="skillList"></ul>
</section>

<section id="finishedProjects">
  <h2>Finished Projects</h2>
  <p id="error"></p>
  <form>
    <input type="text" id="projectNameInput" placeholder="Enter Name of Project"></input>
    <input type="text" id="projectDescInput" placeholder="Enter Description of Project"></input>
    <input type="date" id="projectDueDateInput"></input>
    <input type="text" id="projectGradeInput" placeholder="Enter grade reciveded on the project"></input>
    <input type="text" id="projectProfNoteInput" placeholder="Enter any notes the professor gave"></input>
    <button id="projectSubmit">Add Project</button>
  </form>
  <ul id="projects"></ul>
</section>

`

document.getElementById("projectSubmit").addEventListener("click", (event) => {
  event.preventDefault();

  const projectNameInp = document.getElementById("projectNameInput");
  const projectDescInp = document.getElementById("projectDescInput");
  const projectDueDateInp = document.getElementById("projectDueDateInput");
  const projectGradeInp = document.getElementById("projectGradeInput");
  const projectProfNoteInp = document.getElementById("projectProfNoteInput");

  createProject(projectNameInp.value.trim(), projectDescInp.value.trim(), projectDueDateInp.value, projectGradeInp.value.trim(), projectProfNoteInp.value.trim())

  projectNameInp.value = "";
  projectDescInp.value = "";
  projectDueDateInp.value = "";
  projectGradeInp.value = "";
  projectProfNoteInp.value = "";

})

document.getElementById("toggle-theme").addEventListener("click", toggleTheme);


render()