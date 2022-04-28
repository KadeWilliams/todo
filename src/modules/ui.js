import { Project } from "./project";
import { Task } from "./tasks";

// let existing = localStorage.getItem('projects');

// let existingData = localStorage.getItem('projects');



/* should only contain UI elements generate UI elements
when new tasks and projects are created within their own modules
do all the necessary generation of each project (objects) and tasks (objects) in their modules
*/

const getLocal = () => {
    let projects;
    if (localStorage.getItem('projects') == "{}") {

        projects = {}
        const defaultProject = Project('Default');
        const defaultTask = Task('Default Task');
        defaultProject.addTask(defaultTask);
        projects[defaultProject.getName()] = defaultProject.getTasks();

    } else {
        projects = localStorage.getItem('projects')
        projects = JSON.parse(projects)
    }
    return projects;
}

const deleteProject = (projects, project) => {
    delete projects[project];
    localStorage.setItem('projects', JSON.stringify(projects))
}


function buildUI(projects) {
    // checks if anything is in local storage, if there's not instantiate new projects object
    // Primary HTML element
    const content = document.getElementById('content');

    // projects pane 
    const projectsPane = document.createElement('section');
    projectsPane.classList.add('projects');

    const newProjects = (project) => {
        const newProj = document.createElement('div');
        newProj.classList.add('project');
        newProj.classList.add(`${project.replace(/\s/g, "")}`);
        newProj.innerHTML = project;

        const xBtn = document.createElement('button');
        // xBtn.innerHTML = "🗑️";
        xBtn.innerHTML = "X";
        xBtn.classList.add('deleteProj');

        const editBtn = document.createElement('button');
        editBtn.innerHTML = "edit";
        editBtn.classList.add('editProj');

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btnContainer');

        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(xBtn);

        newProj.append(btnContainer)
        projectsPane.appendChild(newProj);
    }
    // show projects

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteProj')) {
            const projName = e.path[1].classList[1];
            deleteProject(projects, projName)
            projectsPane.innerHTML = ''
            Object.keys(projects).forEach(value => newProjects(value))
        } else if (e.target.classList.contains('project')) {
            console.log(projects[e.path[0].classList[1]]);
        }
    })

    const newProject = Project('newProject');
    const newTask = Task('newTask')

    newProject.addTask(newTask);

    projects[newProject.getName()] = newProject.getTasks();

    // gets each project 
    Object.keys(projects).forEach(value => newProjects(value))

    // add project button
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('addProjectBtn');
    addProjectBtn.innerHTML = '+ Add Project';

    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottomDiv');
    bottomDiv.appendChild(addProjectBtn);

    projectsPane.appendChild(bottomDiv);
    content.appendChild(projectsPane)
}

export { buildUI, getLocal }