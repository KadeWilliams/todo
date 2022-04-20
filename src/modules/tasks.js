class Task {
    constructor(taskTitle, description = null, dueDate = null, priority = null, checked = false) {
        this.taskTitle = taskTitle;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }

}



export { Task }
