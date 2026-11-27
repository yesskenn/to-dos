import { tasksArray, renderTask } from "./index.js";

//NAV

export const headerAddTaskBtn = document.querySelector("#head-task");
export const headerAddProjectBtn = document.querySelector("#head-project");
export const headerViewAllTasksBtn = document.querySelector("#head-all-tasks");


// SIDEBAR BUTTONS AND FORMS

export const newProjectBtn = document.querySelector("#new-project");

export const newProjectForm = document.querySelector("#new-project-form");


export const taskForm = document.querySelector("#task-form");

export const sidebar = document.querySelector("#sidebar");
export const createNewTaskBtn = document.querySelector("#addTask");



// TAB INFO
export const projectTab = document.getElementById("projects-tab");
export const tabName = document.getElementById("project-tab-name");
export const tasksGrid = document.getElementById("tasks-grid");


export const folderList = document.createElement('div');
folderList.className = "folderList";
sidebar.appendChild(folderList);


export const folderNameInput = document.getElementById('folderNameForm');

export const foldersDropDown = document.getElementById('project-folders-drop');

export function renderTaskObj(task){

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

        let taskFolder = document.createElement('p');
        taskFolder.className = 'taskFolder';

        let didComplete = document.createElement('p');
        didComplete.className = 'didComplete';

        let completeButton = document.createElement('input');
        completeButton.type="checkbox";
        completeButton.className="completeButton";

        tasksGrid.appendChild(taskInfo);

        taskName.textContent = task.title;
        taskNotes.textContent = task.notes;
        taskDueDate.textContent = task.dueDate;
        taskPriority.textContent = task.priority;
        taskFolder.textContent = task.project;
        
        taskInfo.append(taskName, taskNotes, taskDueDate, taskPriority, taskFolder, didComplete)

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

        const index = tasksArray.indexOf(task);

        if (index !== -1){
            tasksArray.splice(index, 1)
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

       };

export function displayCurrentFolder(folderName) {

      console.log("Clicked folder:", folderName);
    console.log("All tasks:", tasksArray);

    tasksGrid.replaceChildren();
    const filteredTasks = tasksArray.filter((task) => {


console.log("Task folder:", task.project);
        console.log("Match?", task.project === folderName);

        return task.project === folderName;
    });

    console.log("Filtered tasks:", filteredTasks);

    filteredTasks.forEach((task) => renderTaskObj(task));

    tabName.textContent = folderName;
};
/*


        return (
            tasksArray.project === folderName && 
            tasksArray.isCompleted === false
        ); 
    });
    filteredTasks.forEach((task) => renderTaskObj(task));
    tabName.textContent = folderName;
    // highlightFolder(folderName);
    // if (filteredTasks.length === 0) {
     //   tasksGrid.append(emptyFolderNewTaskBtn);
    // }
*/