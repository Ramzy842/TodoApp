const titleInput = document.querySelector('.titleInput input');
const priorityOption = document.querySelector('#priority')
const dueDateInput = document.querySelector('.dateInput input');
const taskList = document.querySelector(".tasksList");
const deleteBtn  = document.querySelector('.details span')


import Todo, {toDos, projects, isActive} from "./index"
import {taskUnavailabe} from "./controller.js"

const createToDo = i=>{
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('task');
    taskListItem.innerHTML = `
    <p>${titleInput.value}</p>
    <div class="details">
        <form action="#">
            <input type="date" name="date" id="dueDate" value="${dueDateInput.value}">
        </form>
        <span class= "delete">X</span>
    </div>
    `
    let newToDo = new Todo(titleInput.value, dueDateInput.value)
    toDos.push(newToDo);
    taskList.appendChild(taskListItem)
    taskUnavailabe.style.display = "none"
    
    //clear Input Fields
    titleInput.value = "";
    dueDateInput.value = ""

    //In case projects only contains 1 project
    if(projects.length === 1){
        isActive = projects[0].name;
    }
    //send task to active Project
    for (let index = 0; index < projects.length; index++) {
        if(projects[index].name === isActive){
            projects[index].tasks.push(newToDo);
        }    
    }
    
}

const deleteTodo = i => {
    if(i.target.classList.contains('delete')){
        
        i.target.parentElement.parentElement.remove();
        removeTaskFromToDos(i)
    }
}

export const removeTaskFromToDos = (i) =>{
    let parentEl = i.target.parentElement.parentElement;

    const mappedArr = projects.map(project=>{
        return project.tasks.map(task=>{
            return task.title
        })
    })
   
    if(mappedArr.some(arr=> arr.includes(parentEl.children[0].innerText))){
       
        toDos.some(todo=>{
           if(todo.title === parentEl.children[0].innerText){
               toDos.splice(toDos.indexOf(todo), 1)
           }
        })

       projects.some(project=>{
           project.tasks.some(task=>{
            if(task.title === parentEl.children[0].innerText){
                project.tasks.splice(project.tasks.indexOf(task), 1)
            }
            })
        })
    }
    
   
}



export{
    createToDo,
    titleInput,
    dueDateInput,
    priorityOption,
    deleteBtn,
    deleteTodo, taskList

}
