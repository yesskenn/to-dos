import "./styles.css";
import { tasksGrid, taskForm, sidebar, createNewTaskBtn, newProjectBtn, newProjectForm, foldersDropDown, folderNameInput, renderTaskObj, headerAddTaskBtn, headerViewAllTasksBtn, headerAddProjectBtn } from "./DOM.js";
import { projectFolders, createFolder, addNewFolder } from "./project-tab-logic.js"

export const tasksArray = [];
function createTask(title, notes, dueDate, priority, project, id, isCompleted){
  return {
    title: title,
    notes: notes,
    dueDate: dueDate, 
    priority: priority,
    project: project,
    id: id,
    isCompleted: isCompleted

  }

}
   

function updateTaskId(){
    let number = 0;
    tasksArray.forEach((task) => {
        task.id = number;
        number++;
       
    });
}
const defaultTask = createTask("Create a cool task", "first task alert", "2026-11-11", "mid", "default", 0, false)

console.log(defaultTask);

tasksArray.push(defaultTask);
renderTask(defaultTask);
console.log(tasksArray);





createNewTaskBtn.addEventListener("click", () => {
    taskForm.style.display = "flex";
    sidebar.appendChild(taskForm);
    document.getElementById('task-form').reset();

})

const submitTaskButton = document.querySelector("#submit-task")

submitTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
    const newUserTask = createTask(
        document.getElementById('taskTitle').value,
        document.getElementById('taskNotes').value,
        document.getElementById('taskDueDate').value,
        document.getElementById('priorities').value,
        document.getElementById('project-folders-drop').value,
        null,
        false
        
    )
tasksArray.push(newUserTask);
renderTask(newUserTask);
updateTaskId();
});





 export function renderTask(){
    tasksGrid.innerHTML = "";
    tasksArray.forEach(task => {

        renderTaskObj(task);
    })
};

//adding a new project folder

newProjectBtn.addEventListener("click", () => {
    newProjectForm.style.display = "inline";
    document.getElementById('new-project-form').reset();

})


newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
    const newUserFolder = createFolder(
      folderNameInput.value
    );
    projectFolders.push(newUserFolder);

    addNewFolder();

    let newOption = document.createElement('option');
     // create an option for the dropdown
    newOption.value = newUserFolder.folderName;
    newOption.textContent = newUserFolder.folderName;
    foldersDropDown.appendChild(newOption);

    console.log(projectFolders);

    });





// headerViewAllTasksBtn.addEventListener("click", () => createFolderObj());

// completedBtn.addEventListener("click", () => displayCompletedFolder());

