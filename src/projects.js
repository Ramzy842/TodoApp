import {projects, Project, projectNames} from "./index.js"
export const navProjects = document.querySelector('#navigation ul')
export const addProjectInput = document.querySelector('#addProject')


export const newProject = () =>{
    
    let projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    let newProjectFolder = document.createElement('li');
    newProjectFolder.classList.add("project")
    newProjectFolder.innerText = addProjectInput.value;
    let delBtn = document.createElement('span')
    delBtn.innerText = "X";
    delBtn.classList.add('delete');
    projectContainer.appendChild(newProjectFolder)
    projectContainer.appendChild(newProjectFolder)
    projectContainer.appendChild(delBtn)
    navProjects.appendChild(projectContainer)
    let newPr = new Project(`${newProjectFolder.innerText}`, [])
    projects.push(newPr)
    projectNames.push(addProjectInput.value)
}

export const deleteProject = i =>{
        i.target.parentElement.remove()   
}

export const deleteProjectFromProjects = i =>{
    let parentEl = i.target.parentElement;

    projects.forEach(project=>{
        if(project.name === parentEl.children[0].innerText){
            //console.log('found', project.name, 'in projects')
            projects.splice(projects.indexOf(project), 1);
            projectNames.splice(projectNames.indexOf(project.name), 1)
            //console.log(projects)
        }
    })
        
}











