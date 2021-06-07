import {addTaskBtn, addTaskView, submitTask, 
    exitBtn, exitAddTaskView, titleInputWarning,
    removeTitleInputWarning, addProject, projectAddWarning, clearedWarning, showTasks,
    showProjects,wipeMainContent, showDefaultTasks, clickToCreateProject, removeClickToCreateProject,
    createProject, removeCreateProject
} from "./controller.js"

import{createToDo, titleInput, deleteTodo, taskList, removeTaskFromToDos} from "./task"
import{newProject, addProjectInput, navProjects, deleteProject, deleteProjectFromProjects} from "./projects.js"

window.addEventListener('DOMContentLoaded', showProjects)
window.addEventListener('DOMContentLoaded', showDefaultTasks)


export default class Todo{
    constructor(title, dueDate){
        this.title = title;
        this.dueDate = dueDate;
    }

}

export class Project{
    constructor(name, tasks){
        this.name = name;
        this.tasks = tasks;
    }
}
export const toDos = [];


export const projects = [new Project('Default', [{title: "Go swimming", dueDate: "2021-5-31"}, {title: "Workout", dueDate: "2021-5-31"}]),
        new Project('other', [{title: "sleep", dueDate: "2021-5-31"}, {title: "drive", dueDate: "2021-5-31"}, {title: "Study", dueDate: "2021-5-31"}])];
export let projectNames = projects.map(obj => obj.name)
export let projectTasks = projects.map(obj => obj.tasks)

let projectItem = document.getElementsByClassName('project')
console.log(projectItem);



const projectFormInput = document.querySelector("#navigation form");



export let isActive = "Default";

addTaskBtn.addEventListener('click', addTaskView)
exitBtn.addEventListener('click', exitAddTaskView);

submitTask.addEventListener('click', e =>{
    e.preventDefault();
    if(titleInput.value === ""){
        titleInputWarning();
        
    }else{
        removeTitleInputWarning()
        createToDo();
    }
});

taskList.addEventListener('click', e =>{
    deleteTodo(e);
    //removeTaskFromToDos(e)
})


addProject.addEventListener('click', ()=>{
    
    if(addProjectInput.value === ""){
        projectAddWarning();
        setTimeout(clearedWarning, 3000)
    }else{
        newProject();
        addProjectInput.value = ""
        console.log(projects)
    }
   
})


projectFormInput.addEventListener("submit", e => {
    e.preventDefault();
})

projectFormInput.addEventListener("keyup", e => {
   
    if(e.keyCode === 13){
        if(addProjectInput.value === ""){
            projectAddWarning();
            setTimeout(clearedWarning, 3000)
        }else{
            newProject();
            addProjectInput.value = ""
            console.log(projects)
        }
    }
})


navProjects.addEventListener('click', e =>{
    
    if(e.target.classList.contains("project")){
        isActive = e.target.innerText;
        removeClickToCreateProject()
        console.log(isActive)
        wipeMainContent()
        showTasks(e)
        removeCreateProject()
        
    }else if(e.target.classList.contains('delete')){
        deleteProject(e)
        deleteProjectFromProjects(e)
        wipeMainContent();
        clickToCreateProject()
        if(projects.length === 0){
            removeClickToCreateProject()
            console.log("projects are ", projects)
            createProject()
            //console.log(projects.length)
            console.log(projects)
        }
    }
})



//FIND DUPLICATES IN AN ARRAY
/*
let numbers = [8, 1, 2, 1, 4, 4, 7, 8, 5, 5, 10, 7 ]
let dups = []
let uniqueNums = []

numbers.forEach(el=>{
        
        if(uniqueNums.includes(el)){
            dups.push(el);
        }else{
            uniqueNums.push(el);
        }
})

console.log(dups)
console.log(uniqueNums)
*/


//FIGURE OUT HOW TO MAKE A PROJECT ACTIVE
// WHEN A PROJECT IS ACTIVE 
// WHEN YOU ADD TASKS
// TASKS GET ADDED TO THE PROJECT TASKS 
