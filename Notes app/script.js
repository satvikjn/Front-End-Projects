const notesContainer = document.querySelector(".notes-container");
const createNoteButton = document.querySelector(".create-note-button");
let notes = document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createNoteButton.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})