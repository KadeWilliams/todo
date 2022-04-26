import { Project } from "./project";
import { Task } from "./tasks";

const projects = {}
const defaultProject = Project('Default');

export default function ui() {
    //••••••••••••••••••• DOM Elements ••••••••••••••••••
    const content = document.querySelector('#content');
    const createProjectBtn = document.querySelector('.createProjectBtn');
    const createProjectForm = document.querySelector('.createProjectForm');
    const createProjectInput = document.querySelector('.createProjectInput');
    const projectList = document.querySelector('.projectList');
    const currentProject = document.querySelector('.currentProject');
    const projectParent = document.querySelector('.project');
    const addTaskForm = document.querySelector('.addTaskForm');
    const addTaskBtn = document.querySelector('.addTaskBtn');
    const taskList = document.querySelector('.taskList');
    let newProjectName;
    let currentTask;
    // ••••••••••••• DOM Functions •••••••••••••••
    const toggleProjectForm = () => {
        createProjectForm.classList.toggle('hidden');
        if (createProjectBtn.innerHTML == 'Add Project') {
            createProjectBtn.innerHTML = 'Cancel';
            createProjectForm.reset();
            // createProjectInput.value = '';
        } else {
            createProjectBtn.innerHTML = 'Add Project';
        }
    }

    const toggleTaskForm = () => {
        addTaskForm.classList.toggle('hidden');
        // classToToggle.classList.toggle('hidden');
        if (addTaskBtn.innerHTML == 'Add Task') {
            addTaskBtn.innerHTML = 'Cancel';
        } else {
            addTaskBtn.innerHTML = 'Add Task';
            addTaskForm.reset();
        }
    }

    const showProject = (project) => {
        currentProject.innerHTML = '';
        projectParent.classList.remove('hidden')
        if (typeof (project) === 'string') {
            currentProject.innerHTML += project;
        } else {
            currentProject.innerHTML += project.getName();
        }
    }

    const showTasks = (project) => {
        taskList.innerHTML = '';
        projects[project].forEach((task, idx) => {
            const newTask = document.createElement('div');
            const xBtn = document.createElement('button');
            const editBtn = document.createElement('button');
            editBtn.innerHTML = "Edit";
            editBtn.classList.add('editTask');
            xBtn.innerHTML = "X";
            xBtn.classList.add('deleteTask');
            newTask.classList.add(`task`);
            newTask.classList.add(idx);
            for (let elem in task) {
                newTask.innerHTML += `<p class="${elem} task-info" >${task[elem]}</p>`;
                // newTask.innerHTML += `<p class=${elem}> ${elem.toUpperCase()} ${task[elem]} </p>`;
            }
            newTask.appendChild(xBtn);
            newTask.appendChild(editBtn)
            taskList.appendChild(newTask);
        })
    }


    // ••••••••• Creation Functions •••••••••
    const createNewTask = (project) => {
        let title = document.querySelector('#title');
        let description = document.querySelector('#description');
        let dueDate = document.querySelector('#dueDate');
        let priority = document.querySelector('#priority');
        const task = Task(title.value, description.value, dueDate.value, priority.value);
        projects[project].push(task);
        showProject(project)
    }

    const deleteTask = (task) => {
        projects[currentProject.innerHTML].splice(task);
        showTasks(currentProject.innerHTML)
    }

    const createProject = () => {
        const projectName = createProjectInput.value;
        const project = Project(projectName);
        return project
    }

    const addProject = (project) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('tile');
        projectElement.innerHTML = project.getName();
        projectList.appendChild(projectElement);
        projects[project.getName()] = project.getTasks()
    }


    // TODO: Allow the user to update data on a specific task or delete entire tasks

    // const updateTask = (currProj, form) => {

    //     for (let i = 0; i < 4; i++) {
    //         // console.log(form.elements[i]);
    //     }

    //     projects[currProj].forEach((task, idx) => {

    //         for (let elem in task) {
    //             // form.elements[i].value = task[elem];
    //             console.log(elem);
    //         }
    //         // console.log(form.elements[idx])
    //         // form.elements[idx].value = task[elem];
    //     })
    //     // deleteTask(updateValue)
    // }


    addProject(defaultProject);
    showProject(defaultProject);
    // ••••••••••••••• EVENT LISTENERS •••••••••••••••
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('createProjectBtn')) {
            toggleProjectForm();
        } else if (e.target.classList.contains('addProjectBtn')) {
            newProjectName = createProject();
            addProject(newProjectName);
            toggleProjectForm();
        } else if (e.target.classList.contains('tile')) {
            const projectTextElement = e.target.innerHTML;
            showProject(projectTextElement)
            showTasks(projectTextElement)
        } else if (e.target.classList.contains('addTaskBtn')) {
            toggleTaskForm();
        } else if (e.target.classList.contains('createTaskBtn')) {
            createNewTask(currentProject.innerHTML);
            showTasks(currentProject.innerHTML)
            addTaskForm.reset();
        } else if (e.target.classList.contains('deleteTask')) {
            currentTask = projects[currentProject.innerHTML][Number([e.path[1].classList[e.path[1].classList.length - 1]][0])];
            deleteTask(currentTask);
        } else if (e.target.classList.contains('task-info')) {
            console.log('here')
            let toUpdate = e.target.classList[0];
        } else if (e.target.classList.contains('editTask')) {
            let form = e.path[4].childNodes[3];
            // FIXME
            // currentTask = projects[currentProject.innerHTML][Number([e.path[1].classList[e.path[1].classList.length - 1]][0])];
            // updateTask(currentProject.innerHTML, form);

        }
    })

}

