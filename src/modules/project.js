class Project {
    // creating a project
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    addTask(newTask) {
        const tasks = newTask;
        this[newTask.taskTitle] = newTask;
    }

    // will return the list of tasks associated with the project attached to the function call
    getTasks() {
        // let tasks = this.getTasks()
        // console.log(tasks)
    }

    // will return the project attached to the function call
    getProject() {
        console.log(this.project[this.name])
        // for (let tasks in this.project) {
        //     return tasks
        // }
        // return list of tasks
    }
}

export { Project }

