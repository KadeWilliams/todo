# TODO
## Needs 
1. Todo class that is initialized at startup
    - An object data type will be generated when initialized. This will hold all of the projects as they are created and added to the object. 
        - class Todo { constructor() {this.projects = []}}
    - Methods
        - **addProject** to Todo, on click event 
        - **showProjects** on the page via a loop, especially when the page is reloaded and the items are stored in local storage **returns an array**
        - **deleteProject** delete a project from Todo on page event
2. Project class initialized on event within page
    - class Project { 
        constructor(name) {
            this.name;
            this.tasks = []
        }
    }
    - Methods
        - **getProjectName** to display current project, returns a string
        - **getTasks** to display all tasks within current  project, **returns an array**
        - **deleteTask** remove a task from current project on page event
        - **addTask** add a task to current project
3. Task class initialized on event within page
    - class Task {constructor(taskTitle ) {
        this.taskTitle = taskTitle;
        etc.
        }}
    - 


### Todo structure:
[
            project1: {<br />
                tasks: [<br />
                    task1,<br />
                    task2,<br />
                    task3<br />
                ]<br />
            }, <br />
            project2: {<br />
                tasks: [<br />
                    task1,<br />
                    task2,<br />
                    task3,<br />
                ]<br />
            }<br />
        ]