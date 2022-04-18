// import CreateTodo from './modules/todo.js';
import { Project } from './modules/project.js';
import ui from './modules/ui.js'

ui();

const projectTest = () => {
    const projects = [];
    const newProject = new Project('kade')
    const anotherProject = new Project('chloe')
    projects.push(newProject)
    projects.push(anotherProject)
    return projects;
}

const projectsList = projectTest();

projectsList.forEach(project => console.log(project.name))