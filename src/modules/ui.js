import { Project } from "./project";
import { Task } from "./tasks";

const getLocal = () => {
    let projects;
    if (localStorage.getItem('projects') == "{}" || !localStorage.getItem('projects')) {
        projects = {}
        const defaultProject = Project('Default');
        const defaultTask = Task('Default');
        defaultProject.addTask(defaultTask);
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

const toggleForm = () => {
    const taskForm = document.querySelector('.createTask');
    taskForm.classList.toggle('hidden');
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

    const addTaskBtn = () => {
        const taskBtn = document.createElement('button');
        taskBtn.classList.add('taskBtn');
        taskBtn.innerHTML = 'Create Task';
        return taskBtn;
    }

    const addTaskForm = () => {
        const taskForm = document.createElement('form');
        taskForm.classList.add('hidden');
        taskForm.classList.add('createTask');

        const titleInput = document.createElement('input');
        titleInput.setAttribute('placeholder', 'Title')

        titleInput.setAttribute('id', 'titleInput');

        const dateInput = document.createElement('input');
        dateInput.setAttribute('placeholder', 'Due Date')

        dateInput.setAttribute('id', 'dateInput');

        const addTask = document.createElement('button');
        addTask.innerHTML = 'Add +';
        addTask.classList.add('addTaskBtn');

        taskForm.appendChild(titleInput);

        taskForm.appendChild(dateInput);

        taskForm.appendChild(addTask);

        taskForm.onsubmit = function (e) { e.preventDefault() }

        return taskForm;
    }

    projectTitle.innerText = currentProject;
    pane.appendChild(projectTitle);
    pane.appendChild(addTaskBtn());
    pane.appendChild(addTaskForm());
    projects[currentProject].forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');

        const oBtn = document.createElement('button');
        oBtn.classList.add('completeBtn');
        oBtn.classList.add(value.title);
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

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btnContainer');

        btnContainer.appendChild(xBtn);

        newProj.append(btnContainer);
        projectsList.appendChild(newProj);
        projectsPane.appendChild(projectsList);
    }

    const newTask = (project, title, dueDate) => {
        const createdTask = Task(title);
        projects[project].push(createdTask);
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteProj')) {
            const projName = e.path[2].classList[1];
            const element = document.querySelector(`.${projName}`).remove();
            delete projects[projName];
            localStorage.setItem('projects', JSON.stringify(projects))
        } else if (e.target.classList.contains('project')) {
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
            if (value !== -1) {
                projects[curProj].splice(value, 1);
            }
            localStorage.setItem('projects', JSON.stringify(projects))
            showCurrentProject(projects, curProj, currentProjectPane)
        } else if (e.target.classList.contains('taskBtn')) {
            toggleForm();
        } else if (e.target.classList.contains('addTaskBtn')) {
            const newTaskTitle = document.querySelector('#titleInput').value;
            const newTaskDueDate = document.querySelector('#dateInput').value;
            const curProj = currentProjectPane.firstChild.innerHTML;
            toggleForm();
            newTask(curProj, newTaskTitle, newTaskDueDate)
            showCurrentProject(projects, curProj, currentProjectPane)
        }
    })

    // gets each project 
    initProjects(projects, newProjects);

    content.appendChild(projectsPane);
    content.appendChild(currentProjectPane);
    buildForm();
}

export { buildUI, getLocal }