const { error } = require('./constant.js')
let { LocalStorage } = require('node-localstorage')
const localStorage = new LocalStorage('./stratch')
const { faker } = require('@faker-js/faker');

class Task {
  static async ToDoList(taskData) {
    const task = await taskData;
    const validTitle = this.validTitle(task)
    if (!validTitle.valid) throw new Error(validTitle.error)
    const validDescription = this.validDescription(task)
    if (!validDescription.valid) throw new Error(validDescription.error)
    const validDueDate = this.validDate(task)
    if (!validDueDate.valid) throw new Error(validDueDate.error)
    return this.insertTask(task)
  }

  static validTitle(taskData) {
    const title = taskData.title;

    if (!title) {
      return {
        error: error.taskTitle.required,
        valid: false,
      }
    }

    if (title.length <= 3) {
      return {
        error: error.taskTitle.tooShort,
        valid: false,
      }
    }

    if (title.length >= 50) {
      return {
        error: error.taskTitle.tooLong,
        valid: false,
      }
    }

    const containsSpecialCharacters = /[^a-zA-Z0-9 ]/.test(title);
    if (containsSpecialCharacters) {
      return {
        error: error.taskTitle.invalidCharacter,
        valid: false,
      }
    }
    return { valid: true }
  }

  static validDescription(taskData) {
    const description = taskData.description
    if (!description) {
      return {
        error: error.description.required,
        valid: false,
      }
    }

    if (description.length <= 10) {
      return {
        error: error.description.tooShort,
        valid: false,
      }
    }

    if (description.length >= 500) {
      return {
        error: error.description.tooLong,
        valid: false,
      }
    }
    return { valid: true }
  }

  static validDate(taskData) {
    const dueDate = taskData.dueDate;
    const creationDate = taskData.creationDate;
    if (!dueDate) {
      return {
        error: error.dueDate.required,
        valid: false,
      };
    }

    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dueDate)) {
      return {
        error: error.dueDate.invalid,
        valid: false,
      };
    }

    const date = new Date(dueDate);
    const timestamp = date.getTime();
    if (Number.isNaN(timestamp)) {
      return {
        error: error.dueDate.invalid,
        valid: false,
      };
    }

    if (new Date(dueDate) < new Date(creationDate)) {
      return {
        error: error.dueDate.pastDate,
        valid: false,
      };
    }

    return { valid: true };
  }

  static insertTask(taskData) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({...taskData, id: faker.string.uuid(), status: 'pending'});
    localStorage.setItem('tasks', JSON.stringify(tasks));

    return {
      status: 'success',
      statusCode: 200,
    }
  }

  static async deleteTask(id) {
    if (!id || id === null || id === undefined) {
      return { status: 'error', statusCotode: 400, message: 'Invalid ID' }
    }

    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskExists = tasks.some(task => task.id === id);

    if (!taskExists) {
        return { status: 'error', statusCode: 404, message: 'Task not found' };
    }
    
    const newTasks = id ? tasks.filter(task => task.id !== id) : tasks
    localStorage.setItem('tasks', JSON.stringify(newTasks));

    return {
      status: 'success',
      statusCode: 200,
      message: "Task has been deleted"
    }
  }
}

module.exports = Task



