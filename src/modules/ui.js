//Each User will have one instance of todo, generated at start up
//Each task could have many projects
//Each project could have many tasks associated with it
import { Project } from "./project";
import { Task } from "./tasks";
import { Todo } from "./todo.js"

const content = document.querySelector('#content');


// ••••••••••••••••••• project(s) sidebar •••••••••••••••••••
export default function ui() {
    const newTodo = new Todo();

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

    // event listener block for adding projects
    const addProjectBtn = document.querySelector('.addProjectBtn');
    addProjectBtn.addEventListener('click', (e) => {
        // addProject()
        toggleHidden()
        const createProjectInput = document.querySelector('.createProjectInput');
        createProject(createProjectInput.value)
        createProjectInput.value = '';
    })

    // add an empty project to the project list of divs
    const createProject = (name = '') => {

        const project = new Project(name)
        // project.createProject(name)
        const projectList = document.querySelector('.projectList');
        const newProject = document.createElement('div');
        newProject.classList.add('tile')
        newProject.setAttribute('data-connection', project.name)
        newProject.innerText = project.name;
        newTodo.addProject(project.name);
        project.addTask(1)
        projectList.appendChild(newProject)
    }

    const createProjectBtn = document.querySelector('.createProjectBtn');
    createProjectBtn.addEventListener('click', () => {
        toggleHidden()
    })

    // grab a project that passes a condition 
    const projectList = document.querySelector('.projectList');
    projectList.addEventListener('click', (e) => {
        if (e.target.classList.contains('tile')) {
            let property = e.path[0].getAttribute("data-connection")
            console.log(newTodo)
            console.log(newTodo.projects[property]);
            newTodo.addTask(property, 1)
            newTodo.addTask(property, 2)
            newTodo.addTask(property, 3)
            newTodo.showProjects(property)
        }
    });


    // ••••••••••••••••••• task(s) •••••••••••••••••••


}