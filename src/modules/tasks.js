// Factory Function Version
const Task = (title, description = null, dueDate = "No Date", priority = null, status = false) => {
    return { title, description, dueDate, priority, status }
    // let title = title;
    // let description = description;
    // let dueDate = dueDate;
    // let priority = priority;
    // let status = status;

    // return {
    //     // getters
    //     getAttrs() {
    //         return {
    //             _title,
    //             _description,
    //             _dueDate,
    //             _priority,
    //             _status,
    //         }
    //     },

    //     //setters
    //     setTitle(newTitle) {
    //         _title = newTitle;
    //     },
    //     setDescription(newDescription) {
    //         _description = newDescription;
    //     },
    //     setDueDate(newDueDate) {
    //         _dueDate = newDueDate;
    //     },
    //     setPriority(newPriority) {
    //         _priority = newPriority;
    //     },
    //     setStatus(newStatus) {
    //         _status = newStatus;
    //     },

    // }
}

// Class Version
// class Task {
//     constructor(taskTitle, description = null, dueDate = null, priority = null, checked = false) {
//         this.taskTitle = taskTitle;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//         this.checked = checked;
//     }

// }

export { Task }
