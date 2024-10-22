const inputText = document.getElementById("inputText");
const lisContainer = document.getElementById("list-container");

function addTask(){
    if(inputText.value == ''){
        alert("You must type somehitng...!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        lisContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputText.value="";
    saveData();
    
}

lisContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
        
    }
}, false);

function saveData(){
    localStorage.setItem("todoListData", lisContainer.innerHTML);
}

function showTask(){
    lisContainer.innerHTML = localStorage.getItem('todoListDat');
}
showTask();