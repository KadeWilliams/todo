//FIXME

//Each User will have one instance of todo, generated at start up
//Each task could have many projects
//Each project could have many tasks associated with it
import { Project } from "./project";
import { Task } from "./tasks";
// import { Todo } from "./todo.js"

const projects = {};

const content = document.querySelector('#content');
// const newTodo = new Todo('projects');

const newProject = Project('kade');
const anotherProject = Project('kas');

const newTask = Task('kade task', "I don't need one :|");
const newTask2 = Task('kas task', "Here you go :)");
// console.log(newTask2.getAttrs())
newProject.addTask(newTask);
anotherProject.addTask(newTask2);
// console.log(newProject.getName())
const tasks = newProject.getTasks()
tasks.forEach(task => {
    let attrs = task.getAttrs()
    for (let attr in attrs) {
        // console.log(attrs[attr])
    }
})

// •••••••••• console to demo the behavior of classes ••••••••••••
// projects[newProject.getName()] = newProject.getTasks();
// console.log(projects)

// projects.push(newProject)
// projects.push(anotherProject)
// console.log(projects)

// projects.forEach(project => console.log(project.getName()));



export default function ui() {
    //••••••••••••••••••• DOM Elements ••••••••••••••••••
    const createProjectBtn = document.querySelector('.createProjectBtn');
    const createProjectForm = document.querySelector('.createProjectForm');
    const createProjectInput = document.querySelector('.createProjectInput');
    const projectList = document.querySelector('.projectList');
    const currentProject = document.querySelector('.currentProject');
    // ••••••••••••••••••• project(s) •••••••••••••••••••

    const toggleProjectForm = () => {
        createProjectForm.classList.toggle('hidden');
        if (createProjectBtn.innerHTML == '+') {
            createProjectBtn.innerHTML = 'Cancel';
            createProjectInput.value = '';
        } else {
            createProjectBtn.innerHTML = '+';
        }
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
        projects[project.getName()] = project.getTasks();
    }

    const showProject = (project) => {
        // populate divs with the content of the tasks
        currentProject.innerHTML = '';
        if (projects[project].length !== 0) {
            projects[project]
        }
        currentProject.innerHTML = project;
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('createProjectBtn')) {
            toggleProjectForm();
        } else if (e.target.classList.contains('addProjectBtn')) {
            const newProjectName = createProject();
            addProject(newProjectName)
            toggleProjectForm();
        } else if (e.target.classList.contains('tile')) {
            const projectTextElement = e.target.innerHTML;
            showProject(projectTextElement)
        }
        // TODO: Get information from form inputs to create tasks witin each project  
        // TODO: Populate the project dom element with the tasks associated with each
        // TODO: Allow the user to update data on a specific task or delete entire tasks
        // TODO: Allow the user to delete projects from the array of projects which will remove them from the dom
        // const curProject = projects[projectTextElement];
    })

















    // // toggle form elements on an event
    // const toggleHidden = () => {
    //     // grab elements
    //     const createProjectBtn = document.querySelector('.createProjectBtn');
    //     const createProjectForm = document.querySelector('.createProjectForm');
    //     // change the text of button
    //     if (createProjectBtn.innerHTML === '+') {
    //         createProjectBtn.innerHTML = 'Cancel';
    //     } else {
    //         createProjectBtn.innerHTML = '+';
    //     }
    //     createProjectForm.classList.toggle('hidden');
    // }

    // const createProjectBtn = document.querySelector('.createProjectBtn');
    // createProjectBtn.addEventListener('click', () => {
    //     toggleHidden()
    //     addProjectElement();
    // })

    // const addProjectElement = () => {
    //     const addProjectBtn = document.querySelector('.addProjectBtn');
    //     addProjectBtn.addEventListener('click', () => {
    //         let createProjectInput = document.querySelector('.createProjectInput');
    //         const project = new Project(createProjectInput.value)
    //         newTodo._addProject(project)
    //         appendProject(project)
    //         createProjectInput.value = '';
    //         toggleHidden()
    //     });
    // }

    // const appendProject = (project) => {
    //     const projectList = document.querySelector('.projectList');
    //     const newProject = document.createElement('div');
    //     newProject.setAttribute('data-connection', project.name);
    //     newProject.classList.add('tile');
    //     newProject.innerHTML = project.name;
    //     projectList.appendChild(newProject)
    // }

    // const projectList = document.querySelector('.projectList');
    // projectList.addEventListener('click', (e) => {
    //     const todos = document.querySelector('.todo')
    //     if (todos.lastChild !== '#text') {
    //         todos.removeChild(todos.lastChild)
    //     }
    //     let currProject = newTodo.todo[e.target.dataset.connection]
    //     const showProject = document.createElement('div');
    //     showProject.classList.add('curr-project')
    //     showProject.setAttribute('data-connection', e.target.dataset.connection)
    //     showProject.innerHTML = currProject.name
    //     todos.appendChild(showProject)
    //     // todos.innerHTML
    // })

    // const createTodoBtn = document.querySelector('.createTodoBtn');
    // createTodoBtn.addEventListener('click', (e) => {
    //     const todos = document.querySelector('.todo')
    //     const currProject = document.querySelector('.curr-project');
    //     const proj = newTodo.todo[currProject.getAttribute('data-connection')];
    //     // let currProject = newTodo.todo[e.target.dataset.connection]
    //     addNewTask(proj)
    //     showTasks(proj, currProject)
    // })

    // const addNewTask = (project) => {
    //     const title = document.querySelector('#title');
    //     const description = document.querySelector('#description');
    //     const dueDate = document.querySelector('#dueDate');
    //     const priority = document.querySelector('#priority');

    //     const task = new Task(title.value, description.value, dueDate.value, priority.value)
    //     project.addTask(task)
    //     // currProject.addTask('123')
    //     // project.addTask()
    // }

    // const showTasks = (project, currProject) => {
    //     const taskList = document.createElement('div')
    //     taskList.classList.add('task-list');
    //     const tasks = project.getAllTasks();
    //     tasks.forEach(task => {
    //         const newTask = document.createElement('div');
    //         newTask.classList.add('task');
    //         for (let prop in task) {
    //             newTask.innerHTML += `${task[prop]}\n`;
    //             taskList.appendChild(newTask);
    //         }
    //         currProject.appendChild(taskList)
    //     })
    // }

}

