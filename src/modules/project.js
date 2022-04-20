class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name
    }

    addTask(task) {
        this.tasks.push(task)
    }

    getTasks() {
        console.log(this.tasks)
        // this.tasks.forEach(task => { return task })
    }
}

export { Project }

