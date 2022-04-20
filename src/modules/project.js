class Project {
    // creating a project
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name
    }

    addTask(newTask) {
        this.tasks.push(newTask);
    }

    // will return the list of tasks associated with the project attached to the function call
    getAllTasks() {
        return this.tasks
    }

    // will return the project attached to the function call
    getProject() {
        console.log(this.project[this.name])

    }
}

export { Project }

