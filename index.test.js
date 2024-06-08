const Task = require("./src/task");
const { error } = require('./src/constant.js')
const { faker } = require('@faker-js/faker');
const assert = require('assert');
const exp = require("constants");
const mocks = {
  titleEmpty: require("./mocks/task-titleEmpty.js"),
  titleShort: require("./mocks/task-titleShort.js"),
  titleLong: require("./mocks/task-titleLong.js"),
  titleInvalidCharacter: require("./mocks/task-titleInvalidCharacter.js"),
  descriptionEmpty: require("./mocks/task-descriptionEmpty.js"),
  descriptionShort: require("./mocks/task-descriptionShort.js"),
  descriptionLong: require("./mocks/task-descriptionLong.js"),
  dueDateEmpty: require("./mocks/task-dueDateEmpty.js"),
  dueDateInvalid: require("./mocks/task-dueDateInvalid.js"),
  dueDatePast: require("./mocks/task-dueDatePast.js"),
}

;(async () => {

  {
    const result = Task.ToDoList(mocks.titleEmpty)
    const expected = new Error(error.taskTitle.required);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.titleShort)
    const expected = new Error(error.taskTitle.tooShort);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.titleLong)
    const expected = new Error(error.taskTitle.tooLong);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.titleInvalidCharacter)
    const expected = new Error(error.taskTitle.invalidCharacter);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.descriptionEmpty)
    const expected = new Error(error.description.required);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.descriptionShort)
    const expected = new Error(error.description.tooShort);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.descriptionLong)
    const expected = new Error(error.description.tooLong);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.dueDateEmpty)
    const expected = new Error(error.dueDate.required);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.dueDateInvalid)
    const expected = new Error(error.dueDate.invalid);
    await assert.rejects(result, expected)
  }

  {
    const result = Task.ToDoList(mocks.dueDatePast)
    const expected = new Error(error.dueDate.pastDate);
    await assert.rejects(result, expected)
  }

})()