import {taskList} from "./task.js"
import {navProjects} from "./projects.js"
import { projects, projectNames, toDos} from "./index.js";

const addTaskBtn = document.querySelector('.tasks-head span');
const overlay = document.querySelector('.overlayDiv span')
const fillDetails = document.querySelector('.fill-details');
const exitBtn = document.querySelector('.fill-details span')
const submitTask = document.querySelector('.submitTask button');
const titleWarning = document.querySelector('.title-warning');
const addProjectWarning = document.querySelector('.projectAddWarning')

export const taskUnavailabe = document.querySelector('.tasks-unavailable')
const clickOnProject = document.querySelector(".clickOnProject")
const clickOnProject1 = document.querySelector(".clickOnProject1")


export const addProject = document.querySelector('.nav-head span');


taskList.addEventListener("click", (e)=>{
    if(e.target.parentElement.classList.contains('task')){
        e.target.parentElement.classList.toggle('completed');
    }
})

const addTaskView = ()=>{
    overlay.classList.add('overlay')
    document.querySelector('body').appendChild(overlay)
    fillDetails.style.display = 'block';
    
} 

const exitAddTaskView = () =>{
    fillDetails.style.display = "none";
    overlay.classList.remove("overlay")
}

const titleInputWarning = () =>{
    titleWarning.style.display = "block"
}

const removeTitleInputWarning = () =>{
    titleWarning.style.display = "none"
}

export const projectAddWarning = () => {
        addProjectWarning.style.display = 'block'
}

export const clearedWarning = () => {
    addProjectWarning.style.display = 'none'
}


export const wipeMainContent = ()=>{
    taskList.innerHTML = ''
}

export const showProjects = ()=>{
    projects.forEach(project=>{
        let projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');
        let projectFolder = document.createElement('li');
        projectFolder.classList.add("project")
        projectFolder.innerText = project.name;
        let delBtn = document.createElement('span')
        delBtn.innerText = "X";
        delBtn.classList.add('delete');
        projectContainer.appendChild(projectFolder)
        projectContainer.appendChild(projectFolder)
        projectContainer.appendChild(delBtn)
        navProjects.appendChild(projectContainer)
    })
}


export const showDefaultTasks = ()=>{
        projects.forEach(project=>{
            project.tasks.forEach(task=>{
                toDos.push(task)
            })
        })        
        projects[0].tasks.forEach(task=>{
        let tsk = document.createElement('li');
        tsk.classList.add("task");
        taskList.appendChild(tsk)
        tsk.innerHTML = `
        <p>${task.title}</p>
        <div class="details">
            <form action="#">
                <input type="date" name="date" id="dueDate" value="2021-05-31">
            </form>
            <span class= "delete">X</span>
        </div>
        `})
}

const showTasks = i =>{
    
    let idx = projectNames.indexOf(i.target.innerText)

    if(projectNames[idx] && projects[idx].tasks.length > 0){
        try {
            projects[idx].tasks.forEach(task=>{
                let tsk = document.createElement('li');
                tsk.classList.add("task");
                taskList.appendChild(tsk)
                tsk.innerHTML = `
                <p>${task.title}</p>
                <div class="details">
                    <form action="#">
                        <input type="date" name="date" id="dueDate" value="2021-05-31">
                    </form>
                    <span class= "delete">X</span>
                </div>
                    `
                taskUnavailabe.style.display = 'none'
            })
        } catch (error) {
            console.log('no tasks available');
            taskUnavailabe.style.display = 'block'
        }  
    }else{
        console.log('no tasks available');
            taskUnavailabe.style.display = 'block'
    }
    
}

export const clickToCreateProject = () =>{
    taskList.classList.add("clkPr");
    clickOnProject.style.display = "block"
}

export const removeClickToCreateProject = () =>{
    taskList.classList.remove("clkPr");
    clickOnProject.style.display = "none"
}

export const createProject = ()=>{
    taskList.classList.add("clkPr");
    clickOnProject1.style.display = "block"
}

export const removeCreateProject = ()=>{
    taskList.classList.remove("clkPr");
    clickOnProject1.style.display = "none"
}

export {addTaskBtn, addTaskView, exitBtn, 
    exitAddTaskView, submitTask, titleInputWarning, removeTitleInputWarning,
    showTasks

}
