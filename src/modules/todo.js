class Todo {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project)
    }

    showProjects() {
        console.log(this.projects)
    }
}

export { Todo }