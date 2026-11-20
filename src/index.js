import "./styles.css";

let notebook = [];


//toDoItem or task
function createTask(title, notes, dueDate, priority, done, project){
  return {
    title: title,
    notes: notes,
    dueDate: dueDate, 
    priority: priority,
    project: project,
    done: done

  }

}

const newTask = createTask("first", "first task alert", "Nov. 29, 2026", "mid", "homework", "not done")

console.log(newTask);

notebook.push(newTask);
console.log(notebook[0]);


function project(projectTitle, projectDescription, task){
    if (!new.target){
        throw Error("You must use the new operator to call the constructor")
    }
    this.projectTitle = projectTitle;
    this.projectDescription = projectDescription;
    this.task = task;

}

function createGroup(groupName){
    const projectTitle = groupName;
    return { groupName, projectTitle}
}

const projectsWrapper = document.getElementById("projects-wrapper");
const agendaTab = document.createElement('div');
agendaTab.className = 'agenda';
projectsWrapper.appendChild(agendaTab);


function addNewTask(){
    agendaTab.innerHTML = "";
    notebook.forEach(taskie => {

        let taskInfo = document.createElement('div');
        taskInfo.className = 'task';

        let taskName = document.createElement('h3');
        taskName.className = 'taskName';


        let taskNotes = document.createElement('p');
        taskNotes.className = 'taskNotes';

        let taskDueDate = document.createElement('p');
        taskDueDate.className = 'taskDueDate';

        let taskPriority = document.createElement('div');
        taskPriority.className = 'taskPriority'

        
        let completeButton = document.createElement('input');
        completeButton.type="checkbox";
        completeButton.className="completeButton";

        agendaTab.appendChild(taskInfo);

        taskName.textContent = taskie.title;
        taskNotes.textContent = taskie.notes;
        taskDueDate.textContent = taskie.dueDate;
        taskPriority.textContent = taskie.priority;
        
        taskInfo.append(taskName, taskNotes, taskDueDate, taskPriority, completeButton)

        let completeTag = document.createElement('div');
        completeTag.className = 'completeTag';


        let completeCheck = document.createElement('div');
        completeCheck.className = "completeCheck";

        completeCheck.appendChild(completeButton);
        taskInfo.appendChild(completeCheck);

        let completeLabel = document.createElement('p');
        completeLabel.className = 'completeLabel';
        completeLabel.textContent = "DONE";

        completeTag.appendChild(completeLabel);

        const index = notebook.indexOf(taskie);

        if (index !== -1){
            notebook.splice(index, 1)
        }

    })


}

addNewTask();


const taskForm = document.querySelector("#task-form");

const sidebar = document.querySelector("#sidebar");
const showTaskButton = document.querySelector("#addTask");
const submitTask = document.querySelector("#submit-button")


//add this to a add new task.js file

showTaskButton.addEventListener("click", () => {
    taskForm.style.display = "flex";
    sidebar.appendChild(taskForm);
    document.getElementById('task-form').reset();

})