// Factory Function Version
const Project = (name) => {
    const _tasks = [];
    let _name = name;

    return {
        getName() {
            return _name
        },
        getTasks() {
            return _tasks;
        },
        removeTask(elem, idx) {

        }
    }
}

export { Project }

