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
            // console.log(newTodo)
            appendProject(project)
            createProjectInput.value = '';
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
        let currProject = newTodo.todo[e.target.dataset.connection]
        currProject.addTask('123')
        console.log(currProject.tasks);
        const todos = document.querySelector('.todo')
        todos.innerHTML = currProject.tasks
    })

    const createTodoBtn = document.querySelector('.createTodoBtn');
    createTodoBtn.addEventListener('click', () => {
        console.log('created')
    })

    const addNewTask = (project) => {
        const title = document.getElementById('title');
        title
        project.addTask()
    }

}

