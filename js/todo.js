const contentContainer = document.getElementById("content-container");

let taskCount = 0;

document.getElementById("task-btn").addEventListener("click", function () {
    const inputValue = document.getElementById("input-value");
    const taskDescription = inputValue.value.trim();

    if (taskDescription === '') {
        alert("Please enter a task Description");
        return;
    }

    // Create Table Row
    const row = document.createElement("tr");
    console.log(row.firstChild);

    // Task Number
    taskCount++;
    const numberCell = document.createElement("th");
    numberCell.textContent = taskCount;
    row.appendChild(numberCell);

    // Task Description
    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = taskDescription;
    row.appendChild(descriptionCell);

    // Action Buttons
    const actionCell = document.createElement("td");

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔️";
    completeBtn.classList.add("btn", "btn-xs", "btn-success", "me-2");
    completeBtn.addEventListener("click", function () {
        descriptionCell.style.textDecoration = "line-through";
        descriptionCell.style.color = "gray";
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "btn btn-xs btn-error";
    deleteBtn.addEventListener("click", function () {
        contentContainer.removeChild(row);
        updateTaskNumbers();
    });

    actionCell.appendChild(completeBtn);
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    // Append Row to Table Body
    contentContainer.appendChild(row);
    console.log(contentContainer.children)
    // Clear Input Field
    inputValue.value = "";
});

// Update Task Numbers
function updateTaskNumbers() {
    const rows = contentContainer.querySelectorAll("tr");
    let number = 1;
    rows.forEach((row) => {
        row.firstChild.textContent = number++; // Update "Number" cell
    });
}

// Clear All Tasks
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
    contentContainer.innerHTML = ""; // Clear all rows
    taskCount = 0; // Reset task count
});