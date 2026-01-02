# Todoer

![todoer sample image](https://github.com/dykflint/todoer/blob/main/src/images/todoerSample.png)

A dynamic, browser-based to-do list application built with vanilla JavaScript, focused on clean DOM manipulation, modular logic, and persistent state using localStorage.

This project demonstrates core frontend engineering skills without relying on frameworks.

---

## Features

- Create, edit, and delete tasks
- Assign due dates, priorities, and projects
- Project-based filtering via a dynamic sidebar
- Mark tasks as complete with checkbox interaction
- Inline task editing through a dedicated edit form
- Persistent storage using localStorage
- Responsive UI behavior (click-outside to close forms)
- Event listener tracking to prevent duplicate handlers

---

## Built With

- JavaScript (ES6+)
- HTML5
- CSS3
- Browser Local Storage API
- No frameworks or libraries

---

## Project Structure

src/
├── index.js # Main application logic
├── style.css # Base styling
├── checkbox.css # Checkbox and task completion styles
├── headerImage.js # Header UI logic
├── checkLocalStorage.js # LocalStorage availability check

---

## Core Concepts Demonstrated

### DOM Manipulation

- Dynamic table row creation and updates
- Conditional rendering with CSS classes
- Event delegation and cleanup

### State Management

- Tasks are stored in a normalized JSON structure
- Table data is synced to localStorage on every mutation
- App state is rehydrated on page load

### Event Handling

- Custom event tracking system to avoid duplicate listeners
- Clean removal of events when UI state changes
- Click-outside detection for form and modal UX

### Data Modeling

Each task is represented as a simple object:

{
title: string,
dueDate: string,
priority: string,
project: string
}

---

## Application Flow

1. User creates a task via the add-task form
2. Task is rendered into the table
3. Table state is serialized into localStorage
4. Sidebar projects are auto-generated
5. User can filter by project, edit tasks, mark tasks complete, or delete tasks
6. On reload, tasks persist automatically

---

## Getting Started

### Clone the Repository

git clone https://github.com/your-username/todo-list.git
cd todo-list

### Run the App

This project does not require a build step.

Open the index.html file in your browser.

For best results, use a local development server such as VS Code Live Server.

---

## Possible Improvements

- Drag-and-drop task reordering
- Task descriptions and notes
- Due date reminders
- Accessibility improvements
- Migration to a component-based architecture

---

## What I Learned

- Managing UI state without frameworks
- Designing clean event lifecycles
- Preventing event listener leaks
- Persisting structured data in the browser
- Building scalable DOM logic with plain JavaScript

---

## License

This project is open source and available under the MIT License.
