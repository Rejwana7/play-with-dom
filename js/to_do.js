const contentContainer = document.getElementById("content-container");
let taskCount=0;

document.getElementById("task-btn").addEventListener("click",function(){
    const inputValue = document.getElementById("input-value");
    const taskDescription = inputValue.value
   
    // console.log(taskDescription)
   if(taskDescription === ''){
    alert("Please enter a task Description")
    return;
   }
   // Create Table Row
  
   const row = document.createElement("tr")
  
   
//    task number

taskCount++;
const numberCell = document.createElement("th")
numberCell.textContent= taskCount;
// console.log(numberCell)
row.appendChild(numberCell);
 // Task Description
 const descriptionCell = document.createElement("td");
// console.log(descriptionCell)
 descriptionCell.textContent = taskDescription;
 row.appendChild(descriptionCell);

//   action Button
const actionCell = document.createElement("td");

// complete Button

const completeBtn=document.createElement("button")

completeBtn.textContent="✔️"
completeBtn.classList.add("btn", "btn-xs", "btn-success", "me-2");
completeBtn.addEventListener("click",function(){
    descriptionCell.style.textDecoration = "line-through";
    descriptionCell.style.color = "gray";
})

// Delete Button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "✖";
deleteBtn.className = "btn btn-xs btn-error";
deleteBtn.addEventListener("click",function(){
    contentContainer.removeChild(row)
 
    // taskCount--;
    updateTaskNumbers()

})
actionCell.appendChild(completeBtn);
  actionCell.appendChild(deleteBtn);
  row.appendChild(actionCell);

  // Append Row to Table Body
  contentContainer.appendChild(row);
//   console.log(contentContainer.children)

   // Clear Input Field
   inputValue.value = "";
})



// update task NUmber

function updateTaskNumbers(){
    const rows=contentContainer.querySelectorAll("tr");
    let number =1;
    rows.forEach((row) =>{
        // console.log(row.firstChild); // Log the first child of each row
        row.firstChild.textContent = number++; // Update the "Number" cell
    })

}


const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click",function(){
    contentContainer.innerHTML="";
    taskCount=0;
})