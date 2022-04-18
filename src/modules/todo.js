class Todo {
    constructor(parent, title) {
        this.parent = parent;
        this.title = title;
        this.description = null;
        this.dueDate = null;
        this.priority = null;
        this.checked = false;
    }
}

export { Todo }
