class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name
    }

    addTodo(task) {
        this.tasks.push(task)
    }

    getTodos() {
        console.log(this.tasks)
        // this.tasks.forEach(task => { return task })
    }
}

export { Project }

