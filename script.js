function AddTask() {
   if (document.getElementById("user-input").value == "") {
      alert("Please enter a task!");
      return;
   }
   var content = document.getElementById("user-input").value;
   var element = document.getElementById("task-container");

   var newElement = document.createElement('div');
   newElement.classList.add('ind-task');
   const deleteButtonIcon = '<i class="fa-solid fa-trash"></i>'
   newElement.innerHTML = '<div class="task-content-container"><h2 class="task-content">' + content + '</h2><button class="delete-button" onclick="DeleteTask(event)">delete</button></div>';

   element.appendChild(newElement);
}

function DeleteTask(event) {
   event.target.parentElement.remove();
}