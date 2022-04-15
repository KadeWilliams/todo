// 
export default function createTodo(title, description, dueDate = null, priority = null) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    }
}
