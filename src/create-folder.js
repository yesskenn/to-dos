import { newProjectBtn, newProjectForm} from "./DOM.js";


function createFolder(folderName){
    return{
        folderName: folderName,
}
}

const defaultFolder = createFolder("Default Folder", "dis the main hoe");
console.log(defaultFolder);



newProjectBtn.addEventListener("click", () => {
    newProjectDiv.style.display = "flex";
    document.getElementById('new-project-form').reset();
    alert("this should work");

})

const submitTaskButton = document.querySelector("#submit-button")

submitProjectFolder.addEventListener("click", (e) => {
  e.preventDefault();
    const newFolder = createFolder(
        document.getElementById('projectFolderName').value,
        false
        
    )
notebook.push(newFolder);
addNewTask(newFolder);
});
