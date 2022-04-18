import { Project } from "./project";
import { Todo } from "./todo"

const content = document.querySelector('#content');


// ••••••••••••••••••• project(s) sidebar •••••••••••••••••••
export default function ui() {
    const newTodo = new Todo('this', 'that')

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
    const addProject = (name = '') => {
        const project = new Project(name)
        project.createProject(name)
        const projectList = document.querySelector('.projectList');
        const newProject = document.createElement('div');
        newProject.classList.add('tile')
        project.addTodo(1)
        newProject.innerText = project.name;
        projectList.appendChild(newProject)
    }

    // event listener block for adding projects
    const addProjectBtn = document.querySelector('.addProjectBtn');
    addProjectBtn.addEventListener('click', (e) => {
        // addProject()
        toggleHidden()
        const createProjectInput = document.querySelector('.createProjectInput');
        addProject(createProjectInput.value)
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