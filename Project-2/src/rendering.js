import { goals } from "./data.js";
import { skills } from "./data.js";
import { projects } from "./data.js";

export function render(){
  drawGoals()
  drawSkills()
  drawProjects()
}

function drawGoals(){
  const goalListVar = document.getElementById("goalsList");
  goalListVar.innerHTML = "";

  goals.forEach(goal =>{
    const gli = document.createElement("li");
    gli.textContent = goal
    
    goalListVar.appendChild(gli);
  })
}

function drawSkills(){
  const skillListVar = document.getElementById("skillList");
  skillListVar.innerHTML = "";

  skills.forEach(skill =>{
    const sli = document.createElement("li");
    sli.textContent = skill

    skillListVar.appendChild(sli);
  })
}

function drawProjects(){
  const projectList = document.getElementById("projects");
  projectList.innerHTML = "";

  projects.forEach((project, index) =>{
    const pli = document.createElement('li')
    const projectCard = document.createElement('div');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.projectName;

    const projectDesc = document.createElement('p');
    projectDesc.textContent = project.desc;

    const dueDate = document.createElement('p');
    dueDate.textContent = `Due Date: ${project.duedate}`;

    const grade = document.createElement('p');
    grade.textContent = `Grade: ${project.grade}`;

    const profNotes = document.createElement('p');
    profNotes.textContent = `Professor Notes: ${project.profNotes}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      projects.splice(index, 1);
      render();              
    });

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDesc);
    projectCard.appendChild(dueDate);
    projectCard.appendChild(grade);
    projectCard.appendChild(profNotes);
    projectCard.appendChild(deleteButton);

    pli.appendChild(projectCard)
    projectList.appendChild(pli)

  })
}

export function toggleTheme() {
  document.body.classList.toggle("dark");

  const button = document.getElementById("toggle-theme");

  if (document.body.classList.contains("dark")) {
    button.textContent = "Light";
  } else {
    button.textContent = "Dark";
  }
}