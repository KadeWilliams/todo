import { Project } from "./project.js"

class Todo {
    constructor() {
        this.todo = []
    }

    _addProject(project) {
        this.todo.push(project)
    }

    showProjects() {
        for (let project in this.todo) {
            console.log(project)
        }
        // return something
    }

    _deleteProject(project) {
        this.todo.pop(this.todo.indexOf(project))
        // delete this.todo.project;
    }
}



// class Todo {
//     constructor() {
//         this.projects = {};
//         // this.index = 0;
//     }

//     addProject(project) {
//         this.projects[project] = [];
//         // this.projects.push(project)
//     }

//     addTask(project, task) {
//         this.projects[project].push(task)
//     }

//     showProjects(project) {
//         for (let task in this.projects[project]) {
//             console.log(task)
//         }
//     }
// }

export { Todo }