import "./styles.css";
import { defaultTabGrid, taskForm, sidebar, showTaskButton, addNewTask } from "./DOM.js";
let notebook = [];
let allFolders = [];


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

//notebook.push(newTask);
console.log(notebook);


function createFolder(folderName, folderDescription){
    return{
        folderName: folderName,
        folderDescription: folderDescription,
}
}

const defaultFolder = createFolder("Default Folder", "dis the main hoe");
console.log(defaultFolder);



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



