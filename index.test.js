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
      title: 'Title@',
      description: 'Description task',
      dueDate: faker.date.future(),
      creationDate: new Date(),
    }
    
    const result = Task.ToDoList(task)
    const expected = new Error(error.taskTitle.invalidCharacter);
    await assert.rejects(result, expected)
  }

  {
    const task = {
      id: faker.string.uuid(),
      title: 'Title task',
      description: '',
      dueDate: faker.date.future(),
      creationDate: new Date(),
    }
    
    const result = Task.ToDoList(task)
    const expected = new Error(error.description.required);
    await assert.rejects(result, expected)
  }

  {
    const task = {
      id: faker.string.uuid(),
      title: 'Title task',
      description: 'abaaa',
      dueDate: faker.date.future(),
      creationDate: new Date(),
    }
    
    const result = Task.ToDoList(task)
    const expected = new Error(error.description.tooShort);
    await assert.rejects(result, expected)
  }

  {
    const task = {
      id: faker.string.uuid(),
      title: 'Title task',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      dueDate: faker.date.future(),
      creationDate: new Date(),
    }
    
    const result = Task.ToDoList(task)
    const expected = new Error(error.description.tooLong);
    await assert.rejects(result, expected)
  }

  {
    const task = {
      id: faker.string.uuid(),
      title: 'Title task',
      description: 'Uma descrição pra lá de boa',
      dueDate: '',
      creationDate: new Date(),
    }
    
    const result = Task.ToDoList(task)
    const expected = new Error(error.dueDate.required);
    await assert.rejects(result, expected)
  }

  {
    const task = {
      id: faker.string.uuid(),
      title: 'Title task',
      description: 'Uma descrição pra lá de boa',
      dueDate: '10-09-2024',
      creationDate: new Date(),
    }
    
    const result = Task.ToDoList(task)
    const expected = new Error(error.dueDate.invalid);
    await assert.rejects(result, expected)
  }

  {
    const task = {
      id: faker.string.uuid(),
      title: 'Title task',
      description: 'Uma descrição pra lá de boa',
      dueDate: '2024-02-20',
      creationDate: new Date(),
    }
    
    const result = Task.ToDoList(task)
    const expected = new Error(error.dueDate.pastDate);
    await assert.rejects(result, expected)
  }

})()