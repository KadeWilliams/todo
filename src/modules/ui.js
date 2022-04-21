//Each User will have one instance of todo, generated at start up
//Each task could have many projects
//Each project could have many tasks associated with it
import { Project } from "./project";
import { Task } from "./tasks";
import { Todo } from "./todo.js"

const content = document.querySelector('#content');
const newTodo = new Todo('projects');

export default function ui() {
    // ••••••••••••••••••• project(s) •••••••••••••••••••

    // toggle form elements on an event
    const toggleHidden = () => {
        // grab elements
        const createProjectForm = document.querySelector('.createProjectForm');
        const createProjectBtn = document.querySelector('.createProjectBtn');
        // change the text of button
        if (createProjectBtn.innerHTML === '+') {
            createProjectBtn.innerHTML = 'Cancel';
        } else {
            createProjectBtn.innerHTML = '+';
        }
        createProjectForm.classList.toggle('hidden');
    }

    const createProjectBtn = document.querySelector('.createProjectBtn');
    createProjectBtn.addEventListener('click', () => {
        toggleHidden()
        addProjectElement();
    })

    const addProjectElement = () => {
        const addProjectBtn = document.querySelector('.addProjectBtn');
        addProjectBtn.addEventListener('click', () => {
            let createProjectInput = document.querySelector('.createProjectInput');
            const project = new Project(createProjectInput.value)
            newTodo._addProject(project)
            appendProject(project)
            createProjectInput.value = '';
            toggleHidden()
        });
    }

    const appendProject = (project) => {
        const projectList = document.querySelector('.projectList');
        const newProject = document.createElement('div');
        newProject.setAttribute('data-connection', project.name);
        newProject.classList.add('tile');
        newProject.innerHTML = project.name;
        projectList.appendChild(newProject)
    }

    const projectList = document.querySelector('.projectList');
    projectList.addEventListener('click', (e) => {
        const todos = document.querySelector('.todo')
        if (todos.lastChild !== '#text') {
            todos.removeChild(todos.lastChild)
        }
        let currProject = newTodo.todo[e.target.dataset.connection]
        const showProject = document.createElement('div');
        showProject.classList.add('curr-project')
        showProject.setAttribute('data-connection', e.target.dataset.connection)
        showProject.innerHTML = currProject.name
        todos.appendChild(showProject)
        // todos.innerHTML
    })

    const createTodoBtn = document.querySelector('.createTodoBtn');
    createTodoBtn.addEventListener('click', (e) => {
        const todos = document.querySelector('.todo')
        const currProject = document.querySelector('.curr-project');
        const proj = newTodo.todo[currProject.getAttribute('data-connection')];
        // let currProject = newTodo.todo[e.target.dataset.connection]
        addNewTask(proj)
        showTasks(proj, currProject)
    })

    const addNewTask = (project) => {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#dueDate');
        const priority = document.querySelector('#priority');

        const task = new Task(title.value, description.value, dueDate.value, priority.value)
        project.addTask(task)
        // currProject.addTask('123')
        // project.addTask()
    }

    const showTasks = (project, currProject) => {
        const taskList = document.createElement('div')
        taskList.classList.add('task-list');
        const tasks = project.getAllTasks();
        tasks.forEach(task => {
            const newTask = document.createElement('div');
            newTask.classList.add('task');
            for (let prop in task) {
                newTask.innerHTML += `${task[prop]}\n`;
                taskList.appendChild(newTask);
            }
            currProject.appendChild(taskList)
        })
    }

}

