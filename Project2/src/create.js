import { projects } from "./data";
import { render } from "./rendering";

export function createProject(projectName, desc, duedate, grade, profNotes){
    if (!projectName.trim()) {
        error.textContent = "Project name is required.";
        return;
    }

    error.innerHTML = "";
  
    const newProject = {
    projectName,
    desc,
    duedate,
    grade,
    profNotes
  };

  projects.push(newProject);

  render();
}