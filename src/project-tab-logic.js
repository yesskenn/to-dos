import { renderTaskObj, folderList, displayCurrentFolder } from "./DOM.js";

export const projectFolders = [];



 export function createFolder(folderName){
    return{
        folderName: folderName,
}
}

export const defaultFolder = createFolder("Default Folder");
console.log(defaultFolder);


export function addNewFolder(){
    folderList.innerHTML = "";

    projectFolders.forEach(foldie => {
        
        const index = projectFolders.indexOf(foldie);
        foldie.id = `${index}`;

        //add as sidebar option // render folder button

        let folderTabLink = document.createElement('button');

        folderTabLink.textContent = foldie.folderName;
        folderTabLink.className = 'folderTabLink';
        folderList.appendChild(folderTabLink);
        

   

        folderTabLink.addEventListener("click", () => {
            displayCurrentFolder(foldie.folderName);
    });


    })
};


   