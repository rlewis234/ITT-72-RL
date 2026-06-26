(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Welcome to my Web Scripting 2 starter app!`,t=`My name is Ryan Lewis. I first starting coding in 4-H. I have used python, html, css, and js. I have experince devoping games using Unity. My favorite color is purple.`,n=[`Become more proficient in JS`,`Learn more about modern development processes`,`Build more polished projects`,`Improve project organization`],r=[`Writing more organized JavaScript`,`More Advanced JS`,`Better Project organization`],i=[{projectName:`State-Driven Dashboard`,desc:`A state driven dashboard app`,duedate:`6/12/2026`,grade:`50/50`,profNotes:`liked the dark mode`}];function a(){o(),s(),c()}function o(){let e=document.getElementById(`goalsList`);e.innerHTML=``,n.forEach(t=>{let n=document.createElement(`li`);n.textContent=t,e.appendChild(n)})}function s(){let e=document.getElementById(`skillList`);e.innerHTML=``,r.forEach(t=>{let n=document.createElement(`li`);n.textContent=t,e.appendChild(n)})}function c(){let e=document.getElementById(`projects`);e.innerHTML=``,i.forEach((t,n)=>{let r=document.createElement(`li`),o=document.createElement(`div`),s=document.createElement(`h3`);s.textContent=t.projectName;let c=document.createElement(`p`);c.textContent=t.desc;let l=document.createElement(`p`);l.textContent=`Due Date: ${t.duedate}`;let u=document.createElement(`p`);u.textContent=`Grade: ${t.grade}`;let d=document.createElement(`p`);d.textContent=`Professor Notes: ${t.profNotes}`;let f=document.createElement(`button`);f.textContent=`Delete`,f.addEventListener(`click`,()=>{i.splice(n,1),a()}),o.appendChild(s),o.appendChild(c),o.appendChild(l),o.appendChild(u),o.appendChild(d),o.appendChild(f),r.appendChild(o),e.appendChild(r)})}function l(){document.body.classList.toggle(`dark`);let e=document.getElementById(`toggle-theme`);document.body.classList.contains(`dark`)?e.textContent=`Light`:e.textContent=`Dark`}function u(e,t,n,r,o){if(!e.trim()){error.textContent=`Project name is required.`;return}error.innerHTML=``;let s={projectName:e,desc:t,duedate:n,grade:r,profNotes:o};i.push(s),a()}document.querySelector(`#app`).innerHTML=`
<section id="welcome">
  <h1> Web Scripting 2 Portfolio Starter App</h1>
  <p>${e}</p>
  <button id="toggle-theme">Dark</button>
</section>

<section id="aboutMeSect">
  <h2>About Me</h2>
  <p>${t}</p>
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

`,document.getElementById(`projectSubmit`).addEventListener(`click`,e=>{e.preventDefault();let t=document.getElementById(`projectNameInput`),n=document.getElementById(`projectDescInput`),r=document.getElementById(`projectDueDateInput`),i=document.getElementById(`projectGradeInput`),a=document.getElementById(`projectProfNoteInput`);u(t.value.trim(),n.value.trim(),r.value,i.value.trim(),a.value.trim()),t.value=``,n.value=``,r.value=``,i.value=``,a.value=``}),document.getElementById(`toggle-theme`).addEventListener(`click`,l),a();