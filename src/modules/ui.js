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

    // add an empty project to the project list of divs
    const createProject = (name = '') => {
        const project = new Project(name)
        // project.createProject(name)
        const projectList = document.querySelector('.projectList');
        const newProject = document.createElement('div');
        newProject.classList.add('tile')
        project.addTask(1)
        newTodo.addProject(project);
        newProject.innerText = project.name;
        projectList.appendChild(newProject)
        // newTodo.showProjects();
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

    const createProjectBtn = document.querySelector('.createProjectBtn');
    createProjectBtn.addEventListener('click', () => {
        toggleHidden()
    })

    // grab a project that passes a condition 
    const projectList = document.querySelector('.projectList');
    projectList.addEventListener('click', (e) => {
        if (e.target.classList.contains('tile')) {

        }
    });
}