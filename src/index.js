import "./style.css";
import "./checkbox.css";
import "./headerImage.js";
import storageAvailable from "./checkLocalStorage.js";
// Function to add event listener
function addEventListenerWithTracking(element, event, callback) {
  if (!element._eventListeners) {
    element._eventListeners = {};
  }
  if (!element._eventListeners[event]) {
    element._eventListeners[event] = [];
  }
  element._eventListeners[event].push(callback);
  element.addEventListener(event, callback);
}
// Function to remove all event listeners
function removeAllEventListeners(element, event) {
  if (element._eventListeners && element._eventListeners[event]) {
    element._eventListeners[event].forEach((callback) => {
      element.removeEventListener(event, callback);
    });
    element._eventListeners[event] = [];
  }
}
// Check task and grey out the task
// Give each checkbox an event listener
function activateCheckboxEvents() {
  const taskCheckboxes = document.querySelectorAll('input[type="checkbox"]');

  taskCheckboxes.forEach((task) => {
    // Remove all previous event listeners and refresh with new ones
    removeAllEventListeners(task, "click");
    addEventListenerWithTracking(task, "click", () => {
      task.closest("tr").classList.toggle("strikeout");
    });
  });
}
// create task
function CreateToDo(title, dueDate, priority, project) {
  // give default project if not project is chosen
  if (project == "") {
    project = "unassigned";
  }
  return {
    title,
    dueDate,
    priority,
    project,
  };
}
const taskTable = document.querySelector("#task-table");
// Add tasks event listener
const addTaskButton = document.querySelector("#submit-task");
addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  addTask(addTaskButton);
});

// Add Task (only DOM manipulation)
function addTask(button) {
  // extract the values and enter them into a new row at the end of the table
  // also: reset any previous task values
  const title = document.querySelector('[name="task-title"]').value;
  // Date format is YYYY-MM-DD
  const dueDate = document.querySelector('[name="due-date"]').value;
  const prio = document.querySelector('[name="prio"]:checked').value;
  const project = document.querySelector('[name="project"]').value;
  // const description = document.querySelector('[name="description"]').value;
  const task = CreateToDo(title, dueDate, prio, project);
  // check if there are any tbody rows
  console.log(task);
  populateTable(task);
  // Run setTableIds to reset all data-index values and activate checkbox event listeners
  setTableIds(taskTable);
  activateCheckboxEvents();
  tableToJson(taskTable);
  collectProjects();
  toggleAddForm();
  activateRowEditEvents(taskTable);
}
const addTaskForm = document.querySelector("#add-task-form");
addTaskForm.addEventListener("click", (event) => event.stopPropagation());
const toggleFormButton = document.querySelector("#toggle-task-form");
function toggleAddForm() {
  addTaskForm.classList.toggle("hide");
}
toggleFormButton.addEventListener("click", () => {
  toggleAddForm();
});

// add click event to each row of the table
function activateRowEditEvents(table) {
  const taskTableTbody = table.getElementsByTagName("tbody")[0];
  for (const row of taskTableTbody.rows) {
    const rowTds = row.getElementsByTagName("td");
    Array.from(rowTds).forEach((td, index) => {
      if (index > 0) {
        removeAllEventListeners(td, "click");
        addEventListenerWithTracking(td, "click", () => {
          fillEditForm(taskTableTbody, td.closest("tr"));
        });
      }
    });
  }
}
const test = document.querySelector(".test");

// Edit tasks
const editForm = document.querySelector("#edit-task-form");
const closeEditForm = document.querySelector("#close-edit-form");
closeEditForm.addEventListener("click", () => {
  editForm.classList.add("hide");
  activateRowEditEvents(taskTable);
});

function fillEditForm(tableBody, tr) {
  // Chosen row elements
  const chosenRow = Array.from(tr.getElementsByTagName("td"));
  const chosenRowIndex = tr.getAttribute("data-index");
  const chosenTitle = chosenRow[1].innerHTML;
  const chosenDueDate = chosenRow[2].innerHTML;
  const chosenPrio = chosenRow[3].innerHTML;
  const chosenProject = chosenRow[4].innerHTML;
  // Fill in the following edit form elements
  const inputTitle = document.querySelector('input[name="edit-task-title"');
  inputTitle.value = chosenTitle;
  const inputDueDate = document.querySelector('input[name="edit-due-date"');
  inputDueDate.value = chosenDueDate;
  const inputPrio = document.querySelector(`input[value=${chosenPrio}]`);
  inputPrio.value = chosenPrio;
  const inputProject = document.querySelector('input[name="edit-project"');
  inputProject.value = chosenProject;
  // Set chosen row index to manipulate the task later with ediTask
  const rowIndex = document.querySelector("#chosen-row-index");
  rowIndex.innerHTML = chosenRowIndex;
  // Remove all click events from the table while the edit form is active
  for (const row of tableBody.rows) {
    const rowTds = row.getElementsByTagName("td");
    Array.from(rowTds).forEach((td, index) => {
      removeAllEventListeners(td, "click");
    });
  }
  editForm.classList.remove("hide");
  removeAllEventListeners(removeButton, "click");
  addEventListenerWithTracking(removeButton, "click", (event) => {
    event.preventDefault();
    removeTask(chosenRowIndex);
  });
}
const editButton = document.querySelector("#edit-task");
editButton.addEventListener("click", (event) => {
  event.preventDefault();
  editTask(taskTable);
});

function editTask(table) {
  const tBodyRows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  const changedTitle = document.querySelector('[name="edit-task-title"]').value;
  // Date format is YYYY-MM-DD
  const changedDueDate = document.querySelector('[name="edit-due-date"]').value;
  const changedPrio = document.querySelector(
    '[name="edit-prio"]:checked',
  ).value;
  const changedProject = document.querySelector('[name="edit-project"]').value;
  const rowIndex = document.querySelector("#chosen-row-index").innerHTML;
  const chosenRow = Array.from(
    tBodyRows[rowIndex - 1].getElementsByTagName("td"),
  );
  // Set new values into the table
  chosenRow[1].innerHTML = changedTitle;
  chosenRow[2].innerHTML = changedDueDate;
  chosenRow[3].innerHTML = changedPrio;
  chosenRow[4].innerHTML = changedProject;
  tableToJson(taskTable);
}
// function that removes a row from a table
const removeButton = document.querySelector("#remove-task");
function removeTask(dataIndex) {
  taskTable.deleteRow(dataIndex);
  // Close edit form
  editForm.classList.add("hide");
  activateRowEditEvents(taskTable);
  setTableIds(taskTable);
  tableToJson(taskTable);
}

function populateTable(task) {
  if (taskTable.rows.length > 1) {
    const newTaskRow = taskTable.insertRow(-1);
    newTaskRow.insertCell(0).innerHTML = '<input type="checkbox">';
    newTaskRow.insertCell(1).innerHTML = task.title;
    newTaskRow.insertCell(2).innerHTML = task.dueDate;
    newTaskRow.insertCell(3).innerHTML = task.priority;
    newTaskRow.insertCell(4).innerHTML =
      task.project.length > 0 ? task.project : "";
  } else {
    const taskTableTbody = document
      .querySelector("#task-table")
      .getElementsByTagName("tbody")[0];
    const TbodyFirstRow = taskTableTbody.insertRow(-1);
    TbodyFirstRow.insertCell(0).innerHTML = '<input type="checkbox">';
    TbodyFirstRow.insertCell(1).innerHTML = task.title;
    TbodyFirstRow.insertCell(2).innerHTML = task.dueDate;
    TbodyFirstRow.insertCell(3).innerHTML = task.priority;
    TbodyFirstRow.insertCell(4).innerHTML =
      task.project.length > 0 ? task.project : "";
  }
}
// Parse through the table and set a data-index to each row
function setTableIds(table) {
  // Loop through all rows and give each row an index in ascending order
  // Index 0 is thead tr
  Array.from(taskTable.rows).forEach((row, index) => {
    taskTable.rows[index].setAttribute("data-index", index);
  });
  activateCheckboxEvents();
}

const listOfProjects = ["show all", "unassigned"];
function collectProjects(table) {
  Array.from(taskTable.rows).forEach((row, index) => {
    if (index > 0) {
      // Transform row from htmlcollection to array
      row = Array.from(row.getElementsByTagName("td"));
      const project = row[row.length - 1].innerHTML;
      if (!listOfProjects.includes(project) && project != "") {
        listOfProjects.push(project);
      }
    }
  });
  projectsToSidebar(listOfProjects);
}
// Add projects to sidebar
const sidebarProjectList = document.querySelector("#list-of-projects");
function projectsToSidebar(projects) {
  sidebarProjectList.innerHTML = "";
  projects.forEach((project) => {
    const li = document.createElement("li");
    removeAllEventListeners(li, "click");
    addEventListenerWithTracking(li, "click", () => {
      showProjectView(taskTable, project);
    });
    li.append(project);
    sidebarProjectList.append(li);
  });
}
// show only project view in the table
function showProjectView(table, project) {
  Array.from(table.rows).forEach((row, index) => {
    if (index > 0) {
      row.classList.remove("hide");
      const rowTds = Array.from(row.getElementsByTagName("td"));
      if (rowTds[rowTds.length - 1].innerHTML == project) {
      } else if (project == "show all") {
      } else {
        row.classList.add("hide");
      }
    }
  });
}
// Add each row of a table to a tasks json file on local storage
// Parse through table and update local storage with all current tasks
let tasks = {
  tasks: [],
};
function tableToJson(table) {
  tasks = {
    tasks: [],
  };
  Array.from(taskTable.rows).forEach((row, index) => {
    if (index > 0) {
      const title = row.getElementsByTagName("td")[1].innerHTML;
      const dueDate = row.getElementsByTagName("td")[2].innerHTML;
      const prio = row.getElementsByTagName("td")[3].innerHTML;
      const project = row.getElementsByTagName("td")[4].innerHTML;
      tasks.tasks[index - 1] = {};
      tasks.tasks[index - 1].title = title;
      tasks.tasks[index - 1].dueDate = dueDate;
      tasks.tasks[index - 1].prio = prio;
      tasks.tasks[index - 1].project = project;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Populate tasks with localStorage if tasks are available on load
function populateTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (!tasks) {
    return;
  }
  if (Object.keys(tasks.tasks).length > 0) {
    taskTable.getElementsByTagName("tbody").innerHTML = "";
    for (const storedTask of tasks.tasks) {
      const task = CreateToDo(
        storedTask.title,
        storedTask.dueDate,
        storedTask.prio,
        storedTask.project,
      );
      populateTable(task);
    }
  }
}

// function onClickOutside(ele, cb) {
//     document.addEventListener('click', event => {
//         if (!ele.contains(event.target)) cb();
//     });
// };

populateTasks();
// console.log(JSON.parse(localStorage.getItem("tasks")));
tableToJson(taskTable);
setTableIds();
collectProjects();
projectsToSidebar(listOfProjects);
activateRowEditEvents(taskTable);
// Close the add task form when clicked outside of it
window.onclick = (event) => {
  if (
    !event.target.matches("#add-task-form") &&
    !event.target.matches("#toggle-task-form")
  ) {
    if (!addTaskForm.classList.contains("hide")) {
      addTaskForm.classList.add("hide");
    }
  }
};
