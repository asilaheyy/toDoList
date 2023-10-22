let btn = document.getElementById('addBtn');
let container = document.getElementById('toDoContainer');
let inputField = document.getElementById('input');

btn.addEventListener('click', function(){
    
    let newAddedTask = document.createElement('p') //everytime when a button is pressed, a new paragraph will be created
    newAddedTask.classList.add('paragraph-style');
    newAddedTask.innerText = inputField.value; // adding a value of a text in a input field to the paragraph
     container.appendChild(newAddedTask); //adding a task to a new paragraph
    
   
    inputField.value = "" //removing text from input field when the button is pressed

    let taskName = newAddedTask.innerText;
    let taskObj = {
        taskName : taskName
    };
   

    localStorage.setItem(taskName, taskObj ); //saving task to local storage


    newAddedTask.addEventListener('click', function(){
        newAddedTask.style.textDecoration= "line-through" //when a task is done, it will be lined through by clikcing
        newAddedTask.style.textDecorationColor = "grey"
        newAddedTask.style.color = "grey"
       
    })

    newAddedTask.addEventListener('dblclick', function(){
      
       container.removeChild(newAddedTask); //removing task by double clicking
       localStorage.removeItem(taskObj.taskName) //removing task from local storage
        
    })
})

   




 
