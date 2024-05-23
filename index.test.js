const Task = require("./src/task");
const { error } = require('./src/constant.js')
const { faker } = require('@faker-js/faker');
const assert = require('assert')

;(async () => {

  {
    const task = {
      id: faker.string.uuid(),
      title: '',
      description: 'Description task',
      dueDate: faker.date.future(),
      creationDate: new Date(),
    }
    const result = Task.ToDoList(task)
    const expected = new Error(error.taskTitle.required);
    await assert.rejects(result, expected)
  }

  {
    const task = {
      id: faker.string.uuid(),
      title: 'aa',
      description: 'Description task',
      dueDate: faker.date.future(),
      creationDate: new Date(),
    }

    const result = Task.ToDoList(task)
    const expected = new Error(error.taskTitle.tooShort);
    await assert.rejects(result, expected)
  }

  {
    const task = {
      id: faker.string.uuid(),
      title: 'Title!!',
      description: 'Description task',
      dueDate: faker.date.future(),
      creationDate: new Date(),
    }
    
    const result = Task.ToDoList(task)
    const expected = new Error(error.taskTitle.invalidCharacter);
    await assert.rejects(result, expected)
  }

})()