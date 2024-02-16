import './style.css';

function CreateToDo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority
    }
};

function addTask(button) {
    const title = document.querySelector('[name="task-title"]').value;
    // Date format is YYYY-MM-DD
    const dueDate = document.querySelector('[name="due-date"]').value;
    const prio = document.querySelector('[name="prio"]').value;
    const description = document.querySelector('[name="description"]').value;
    console.log(CreateToDo(title,description,dueDate,prio));
}

const addTaskButton = document.querySelector('#submit-task');
addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(addTaskButton);
}
);
const exercise = CreateToDo("Go for a run", "10k", "02-16-2024", "medium");
