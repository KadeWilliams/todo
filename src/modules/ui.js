import { Project } from "./project";
import { Task } from "./tasks";

// let existing = localStorage.getItem('projects');

// let existingData = localStorage.getItem('projects');



/* should only contain UI elements generate UI elements
when new tasks and projects are created within their own modules
do all the necessary generation of each project (objects) and tasks (objects) in their modules
*/
export default function ui() {
    const projects = {};

    if (Object.keys(projects.length === 0)) {
        console.log('it is empty')
    }

    const project = Project('Default');

    const newTask = Task('title', '5/15/2022');

    const task = Task('task');
    const task1 = Task('task1');
    const task3 = Task('task3');
    const task4 = Task('task4');
    const task5 = Task('task5');
    const task6 = Task('task6');
    const task7 = Task('task7');
    const task8 = Task('task8');
    const task9 = Task('task9');
    project.addTask(task);
    project.addTask(task1)
    project.addTask(task3)
    project.addTask(task4)
    project.addTask(task5)
    project.addTask(task6)
    project.addTask(task7)
    project.addTask(task8)
    project.addTask(task9)


    localStorage.setItem('projects', projects)
    localStorage.getItem('projects')
}
