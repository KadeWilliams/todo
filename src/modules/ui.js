//Each User will have one instance of todo, generated at start up
//Each task could have many projects
//Each project could have many tasks associated with it
import { Project } from "./project";
import { Task } from "./tasks";
// import { Todo } from "./todo.js"

const projects = {}
const defaultProject = Project('Default');

// const newProject = Project('kade');

// const sampleTask = Task("Sample Task");
// const newTask = Task('kade task', "I don't need one :|");
// const anotherTask = Task('task2')


// newProject.addTask(newTask);
// newProject.addTask(anotherTask);
// newProject.getTasks().forEach((task, idx) => {
// console.log(newProject.getTasks()[idx])
// })

// projects[newProject.getName()] = newProject.getTasks();
// projects['kade'] = projects['kade'].getTasks()
// projects['kade'].forEach((task, idx) => {
//     console.log(idx)
//     console.log(task)
// });
// console.log(projects)

// console.log(projects['kade']);

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
    // ••••••••••••••••••• project(s) •••••••••••••••••••

    const toggleProjectForm = () => {
        // elemToToggle.closest('.projects').children[3].classList.toggle('hidden')
        createProjectForm.classList.toggle('hidden');
        // classToToggle.classList.toggle('hidden');
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

    const createNewTask = (project) => {
        const title = document.querySelector('#title').value;
        const task = Task(title)
        console.log(projects)

        // const thisThing = Object.keys(projects)[0];
        // console.log(projects[project])
        // console.log(projects[thisThing].addTask(task))
        // // project.addTask(task)
        // console.log(project)

        return task;
    }

    // TODO: Refactor to grab the project class to be able to run the methods
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
        console.log(projects)
        // projects[project.getName()] = project.getTasks();
    }

    const showProject = (project) => {
        // TODO: Show all tasks associated with a project when this function fires
        currentProject.innerHTML = '';
        projectParent.classList.remove('hidden')
        if (typeof (project) === 'string') {
            currentProject.innerHTML += project;
            console.log(projects[project]);
        } else {
            currentProject.innerHTML += project.getName();
            console.log(projects[project.getName()]);
            // defaultProject.getTasks().forEach(task => console.log(task.getAttrs()))
        }
    }

    addProject(defaultProject);
    showProject(defaultProject);

    document.addEventListener('click', function (e) {
        let newProjectName;
        if (e.target.classList.contains('createProjectBtn')) {
            toggleProjectForm();
        } else if (e.target.classList.contains('addProjectBtn')) {
            newProjectName = createProject();
            addProject(newProjectName)
            toggleProjectForm();
        } else if (e.target.classList.contains('tile')) {
            const projectTextElement = e.target.innerHTML;
            showProject(projectTextElement)
        } else if (e.target.classList.contains('addTaskBtn')) {
            toggleTaskForm();
        } else if (e.target.classList.contains('createTaskBtn')) {
            const newTask = createNewTask(newProjectName);
            console.log(newTask)
        }
        // TODO: Get information from form inputs to create tasks within each project  
        // TODO: Add task to project with dom/input elements
        // TODO: Remove task with dom element (removes from data structure, which will update the page)
        // TODO: Populate the project dom element with the tasks associated with each
        // TODO: Allow the user to update data on a specific task or delete entire tasks
        // TODO: Allow the user to delete projects from the array of projects which will remove them from the dom
    })


    // populate the current projects "pane"
    // if (projects.length == 1) {
    //     currentProject.innerHTML = projects[0];
    // }

















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

