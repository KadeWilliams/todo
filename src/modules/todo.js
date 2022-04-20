import { Project } from "./project.js"

class Todo {
    constructor() {
        // this.todo = []
        this.todo = {}
    }

    _addProject(project) {
        // this.todo.push(project)
        this.todo[project.name] = project
    }

    // getProject(project) {
    //     return 
    // }

    showProjects() {
        for (let project in this.todo) {
            console.log(project)
        }
        // return something
    }

    getProject(projectName) {
        return this.todo[projectName]
    }

    _deleteProject(project) {
        this.todo.pop(this.todo.indexOf(project))
        // delete this.todo.project;
    }
}

export { Todo }