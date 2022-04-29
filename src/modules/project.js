// Factory Function Version
const Project = (name) => {
    const tasks = [];

    return {
        name: name,
        getName() {
            return this.name
        },
        getTasks() {
            return tasks;
        },
        addTask(task) {
            tasks.push(task)
        },
        removeTask(taskTitle) {
            let value = this.getTasks().findIndex(object => {
                return object.title === taskTitle
            })
            if (value !== -1) {
                this.getTasks().splice(value, 1)
            }
        },
        updateTask(taskObject, propToUpdate, updateValue) {
            let value = this.getTasks().findIndex(object => {
                return object === taskObject;
            })
            if (value != -1) {
                this.getTasks()[value][propToUpdate] = updateValue;
            }
        },
        removeAllTasks() {
            while (this.getTasks().length > 0) {
                this.getTasks().pop();
            }
        },
        showTask(taskObject) {
            let value = this.getTasks().findIndex(object => {
                return object.title === taskObject;
            })
            return this.getTasks()[value];
        }
    }
}

export { Project }
