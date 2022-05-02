import { format } from 'date-fns';
const today = new Date();
const Task = (title, dueDate = today.toLocaleDateString(), priority = 'low') => {
    let _priority;
    if (priority == 'low' || priority == 'medium' || priority == 'high') {
        _priority = priority;
    }
    return {
        title: title,
        dueDate: format(new Date(dueDate.split('/')), 'MM/dd/yyyy'),
        _priority: priority,
        getValues() {
            return { title, dueDate, _priority }
        },
        setTitle(newTitle) {
            this.title = newTitle;
        },
        getDueDate() {
            return this.dueDate;
        },
        setDueDate(newDueDate) {
            this.dueDate = newDueDate;
        },
        getPriority() {
            return this._priority;
        },
        setPriority(newPriority) {
            newPriority = newPriority.toLowerCase();
            if (newPriority == 'low' || newPriority == 'medium' || newPriority == 'high') {
                this._priority = newPriority;
            }
        },
    }
}

export { Task }
