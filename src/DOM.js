
//NAV


// SIDEBAR BUTTONS AND FORMS

export const newProjectBtn = document.getElementById("new-project");

export const newProjectForm = document.querySelector("#new-project-form");


export const taskForm = document.querySelector("#task-form");

export const sidebar = document.querySelector("#sidebar");
export const showTaskButton = document.querySelector("#addTask");



// TAB INFO
export const projectTab = document.getElementById("projects-tab");
export const tabName = document.getElementById("project-tab-name");
export const defaultTabGrid = document.getElementById("default-grid");


export function addNewTask(){
    defaultTabGrid.innerHTML = "";
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



