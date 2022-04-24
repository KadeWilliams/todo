import { Project } from "./project";
import { Task } from "./tasks";

// TODO: Allow the user to update data on a specific task or delete entire tasks
// TODO: Allow the user to delete projects from the array of projects which will remove them from the dom

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

    // ••••••••••••• DOM Functions •••••••••••••••
    const toggleProjectForm = () => {
        createProjectForm.classList.toggle('hidden');
        if (createProjectBtn.innerHTML == '+') {
            createProjectBtn.innerHTML = 'Cancel';
            createProjectForm.reset();
            // createProjectInput.value = '';
        } else {
            createProjectBtn.innerHTML = '+';
        }
    }

    const toggleTaskForm = () => {
        addTaskForm.classList.toggle('hidden');
        // classToToggle.classList.toggle('hidden');
        if (addTaskBtn.innerHTML == '+') {
            addTaskBtn.innerHTML = 'Cancel';
        } else {
            addTaskBtn.innerHTML = '+';
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
        const xBtn = document.createElement('button');
        xBtn.innerHTML = "X"
        projects[project].forEach((task, idx) => {
            const newTask = document.createElement('div');
            newTask.classList.add(`task`);
            for (let elem in task) {
                newTask.innerHTML += `<p class=${elem}>${task[elem]}</p>`;
                // newTask.innerHTML += `<p class=${elem}> ${elem.toUpperCase()} ${task[elem]} </p>`;
            }
            taskList.appendChild(newTask);
            // TODO: Create an "X" Button which will remove the task from the task list and remove it from the dom
            // taskList.appendChild(xBtn)
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

    const createProject = () => {
        const projectName = createProjectInput.value;
        const project = Project(projectName);
        return project
    }

    const addProject = (project) => {
        //FIXME
        const projectElement = document.createElement('div');
        projectElement.classList.add('tile');
        projectElement.innerHTML = project.getName();
        projectList.appendChild(projectElement);
        projects[project.getName()] = project.getTasks()
    }

    addProject(defaultProject);
    showProject(defaultProject);

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
        }
    })

}

