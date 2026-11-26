import { tabName, folderList, folderTabOption, defaultTabGrid } from "./DOM.js";
import { projectLoad } from './page-load.js';


export const projectFolders = [];



 export function createFolder(folderName){
    return{
        folderName: folderName,
}
}

const defaultFolder = createFolder("Default Folder", "dis the main hoe");
console.log(defaultFolder);
let folderName;


export function addNewFolder(){
        folderList.innerHTML = "";

    projectFolders.forEach(foldie => {
        
        
        //add ass dropdown option

        const index = projectFolders.indexOf(foldie);
        foldie.id = `${index}`;

       
        
        let projectFolderDrop = document.querySelector("#project-folders");
        folderName = foldie.folderName;
        folderTabOption.textContent = folderName;
        folderTabOption.setAttribute("value", `${folderName}`);
        projectFolderDrop.appendChild(folderTabOption);

        //add as sidebar option
        let folderTabLink = document.createElement('button');

        folderTabLink.textContent = folderName;
        folderTabLink.className = 'folderTabLink';
        folderList.appendChild(folderTabLink);
        

        tabName.textContent = folderName;


        folderTabLink.addEventListener("click", () => {
            projectLoad();
    });


    })
};

        

    export function displayCurrentFolder(folderName){
        defaultTabGrid.replaceChildren();

        const filteredTasks = projectFolders

    }