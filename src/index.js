import "./styles.css";

let notebook = [];


//toDoItem or task
function createTask(title, notes, dueDate, priority, project, done){
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

//const projectsWrapper = document.getElementById("projects-wrapper");
const projectGrid = document.getElementById("project-grid")
const agendaTab = document.createElement('div');
agendaTab.className = 'agenda';
projectGrid.appendChild(agendaTab);


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

        let didComplete = document.createElement('p');
        didComplete.className = 'didComplete';

        let completeButton = document.createElement('input');
        completeButton.type="checkbox";
        completeButton.className="completeButton";

        projectGrid.appendChild(taskInfo);

        taskName.textContent = taskie.title;
        taskNotes.textContent = taskie.notes;
        taskDueDate.textContent = taskie.dueDate;
        taskPriority.textContent = taskie.priority;
        
        taskInfo.append(taskName, taskNotes, taskDueDate, taskPriority, didComplete)

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


        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerText = "DELETE";
        taskInfo.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", function(){
        taskInfo.remove();

        const index = notebook.indexOf(taskie);

        if (index !== -1){
            notebook.splice(index, 1)
        }

    })

    completeButton.addEventListener('change', function(){
            if (this.checked){
                taskInfo.style.backgroundColor = "#91a0ff58";
                taskInfo.appendChild(completeTag); 
                taskInfo.appendChild(completeButton);
            } else {
                taskInfo.style.backgroundColor = "#1e1e1e";
                taskInfo.removeChild(completeTag); 
            }
        })

        if (taskie.completeButton){

                taskInfo.style.backgroundColor = "#91a0ff58";
                taskInfo.appendChild(completeTag); 
                completeTag.appendChild(completeButton);
                taskInfo.appendChild(completeButton);

      }})
    };



addNewTask();


const taskForm = document.querySelector("#task-form");

const sidebar = document.querySelector("#sidebar");
const showTaskButton = document.querySelector("#addTask");


//add this to a add new task.js file

showTaskButton.addEventListener("click", () => {
    taskForm.style.display = "flex";
    sidebar.appendChild(taskForm);
    document.getElementById('task-form').reset();

})

const submitTaskButton = document.querySelector("#submit-button")

submitTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
    const newUserTask = createTask(
        document.getElementById('taskTitle').value,
        document.getElementById('taskNotes').value,
        document.getElementById('taskDueDate').value,
        document.getElementById('priorities').value,
        document.getElementById('project-folders').value,
        false
        
    )
notebook.push(newUserTask);
addNewTask(newUserTask);
});



