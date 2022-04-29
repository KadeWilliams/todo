import { Project } from "./project";
import { Task } from "./tasks";

const getLocal = () => {
    let projects;
    if (localStorage.getItem('projects') == "{}" || !localStorage.getItem('projects')) {
        projects = {}
        const defaultProject = Project('Default');
        const defaultTask = Task('Default');
        const anotherTask = Task('Another');
        defaultProject.addTask(defaultTask);
        defaultProject.addTask(anotherTask);
        projects[defaultProject.getName()] = defaultProject.getTasks(); // --> projects[Default] = [{Tasks}, {Task} ... {Task}n]
    } else {
        projects = localStorage.getItem('projects')
        projects = JSON.parse(projects)
    }
    return projects;
}

const initProjects = (projects, func) => {
    Object.keys(projects).forEach(value => func(value))
}

const toggle = () => {
    const createProjectBtn = document.querySelector('.addProjectBtn');
    createProjectBtn.classList.toggle('hidden');
    const projectForm = document.querySelector('.projectForm')
    projectForm.classList.toggle('hidden');
}

const buildForm = () => {
    const bottomDiv = document.querySelector('.bottomDiv');

    const projectForm = document.createElement('form');
    projectForm.classList.add('hidden');
    projectForm.classList.add('projectForm');
    projectForm.onsubmit = function (e) { e.preventDefault() }

    const newProjInput = document.createElement('input');
    newProjInput.classList.add('newProjInput');

    const newProjBtn = document.createElement('button');
    newProjBtn.classList.add('newProjBtn');
    newProjBtn.innerHTML = "Add"

    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.innerHTML = "Cancel"

    projectForm.appendChild(newProjInput);
    projectForm.appendChild(newProjBtn);
    projectForm.appendChild(cancel);

    bottomDiv.appendChild(projectForm);
}

const showCurrentProject = (projects, currentProject, pane) => {
    pane.innerHTML = '';
    const projectTitle = document.createElement('h1');
    projectTitle.innerText = currentProject;
    pane.appendChild(projectTitle);
    projects[currentProject].forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');

        const oBtn = document.createElement('button');
        oBtn.classList.add('completeBtn');
        oBtn.classList.add(currentProject);
        oBtn.innerHTML = "✔";

        card.appendChild(oBtn);
        for (let prop in value) {
            const element = document.createElement('div');
            element
            element.innerHTML = value[prop];
            card.appendChild(element)
        }
        pane.appendChild(card);
    })
}

function buildUI(projects) {
    const content = document.getElementById('content');

    const projectsPane = document.createElement('section');
    projectsPane.classList.add('projectsPane');

    const projectsList = document.createElement('div');
    projectsList.classList.add('projectsList')

    const createProjectBtn = document.createElement('button');
    createProjectBtn.classList.add('addProjectBtn');
    createProjectBtn.innerHTML = 'Create Project';

    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottomDiv');
    bottomDiv.appendChild(createProjectBtn);
    projectsPane.appendChild(bottomDiv);

    const currentProjectPane = document.createElement('section')
    currentProjectPane.classList.add('currentProject');
    showCurrentProject(projects, 'Default', currentProjectPane)

    const newProjects = (project) => {
        const newProj = document.createElement('div');
        newProj.classList.add('project');
        newProj.classList.add(`${project.replace(/\s/g, "")}`);
        newProj.innerHTML = `<p class='projectName'>${project}</p> <form class='edit hidden' onsubmit="return false;"><input value=${project} class='newName'></form>`;

        const xBtn = document.createElement('button');
        xBtn.innerHTML = "X";
        xBtn.classList.add('deleteProj');

        // const editBtn = document.createElement('button');
        // editBtn.innerHTML = "edit";
        // editBtn.classList.add('editProj');

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btnContainer');

        // btnContainer.appendChild(editBtn);
        btnContainer.appendChild(xBtn);

        newProj.append(btnContainer);
        projectsList.appendChild(newProj);
        projectsPane.appendChild(projectsList);
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteProj')) {
            const projName = e.path[2].classList[1];
            const element = document.querySelector(`.${projName}`).remove();
            delete projects[projName];
            localStorage.setItem('projects', JSON.stringify(projects))
        } else if (e.target.classList.contains('project')) {
            // TODO: show project
        } else if (e.target.classList.contains('addProjectBtn')) {
            toggle();
        } else if (e.target.classList.contains('newProjBtn')) {
            const newProj = document.querySelector('.newProjInput');
            const proj = Project(newProj.value);
            projects[proj.getName()] = proj.getTasks();
            newProjects(proj.getName())
            localStorage.setItem('projects', JSON.stringify(projects))
            toggle()
        } else if (e.target.classList.contains('cancel')) {
            toggle();
        } else if (e.target.classList.contains('projectName')) {
            const selectedProj = e.path[1].classList[1];
            showCurrentProject(projects, selectedProj, currentProjectPane)
        } else if (e.target.classList.contains('completeBtn')) {
            const curProj = currentProjectPane.firstChild.innerHTML;
            const completedTask = e.path[0].classList[1];
            let value = projects[curProj].findIndex(object => {
                return object.title === completedTask;
            })
            console.log(value)
            if (value !== -1) {
                projects[curProj].splice(value, 1);
            }
            showCurrentProject(projects, curProj, currentProjectPane)
        }

        //TODO: Create form to add tasks to a given project
    })

    // gets each project 
    initProjects(projects, newProjects);

    content.appendChild(projectsPane)
    content.appendChild(currentProjectPane);
    buildForm();

}

export { buildUI, getLocal }