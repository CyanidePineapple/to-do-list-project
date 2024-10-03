# To-Do List with Unnecessary Ads MEN Stack CRUD App

## Overview

An app that allows you to Read, Add, Change or Delete tasks you would like to do, while also being plagued with completely unnecesary ads with companies that no longer exist.

## Models

### 1. Task Model

The main model representing the to-do task itself.

- Fields:
  - `title`: String (required) – The name of the task.
  - `completed`: Boolean – Whether the task is completed or not (default: `false`).
  - `category`: Reference to the **Category** model (each task can be assigned a category).


### 2. Category Model

The secondary model used to organize the tasks.

- Fields:
  - `name`: String (required) – The name of the category (e.g., "Work", "Personal").


## Restful Routes

| Method | Route          | Description                      | Action                                                         |
|--------|----------------|----------------------------------|----------------------------------------------------------------|
| GET    | `/tasks`        | Display all tasks                | Retrieves all tasks from the database and renders the index page. |
| GET    | `/tasks/new`    | Show form for new task           | Renders a form to create a new task.                           |
| POST   | `/tasks`        | Create a new task                | Receives form data and adds a new task to the database.        |
| GET    | `/tasks/:id/edit` | Show form to edit a task        | Finds a task by ID and displays a pre-filled form for editing. |
| PUT    | `/tasks/:id`    | Update a task                    | Receives form data and updates an existing task in the database. |
| DELETE | `/tasks/:id`    | Delete a task                    | Deletes a specific task from the database.

## User Stories

1. The user needs to be able to be able to view all the tasks from the database.
1.  The user needs to be able to create new tasks to add to the database.
1. The user needs to be able to edit/update a task to the database.
1. The user needs to be able to delete a task from the database.
1. The user needs visual confirmation through the EJS to see the Addition, Subtraction or Update to a task.



## Task Model 
```js
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  category: categorySchema 
});

module.exports = mongoose.model('Task', taskSchema);

```

## Category Model

```js
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }
});

```





