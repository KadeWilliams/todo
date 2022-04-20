// import {Project} from "./project.js"

class Todo {
    constructor() {
        this.projects = {};
        // this.index = 0;
    }

    addProject(project) {
        this.projects[project] = [];
        // this.projects.push(project)
    }

    addTask(project, task) {
        this.projects[project].push(task)
    }

    showProjects(project) {
        for (let task in this.projects[project]) {
            console.log(task)
        }
    }
}

export { Todo }