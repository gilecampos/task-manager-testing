const { describe, it, after, before } = require('mocha')
const supertest = require('supertest')
const assert = require("assert")
const {createSandbox} = require("sinon")
const sinon = createSandbox()
const { Task } = require('../task.js')
const { error } = require('../constant.js')
const { faker } = require('@faker-js/faker');

describe('Task', function() {
  
  beforeEach(() => {

  });

  afterEach(function () {
    sinon.restore()
  });

  it('should insert a task into localStorage', async () => {
    const content = {
      id: faker.string.uuid(),
      title: 'Title task',
      description: 'Uma descrição pra lá de boa',
      dueDate: faker.date.future().toISOString().split('T')[0],
      creationDate: new Date().toISOString(),
    }

    const stub = sinon.stub(
      Task,
      Task.insertTask.name
    )
  
    stub
      .withArgs(content)
      .resolves({
        status: 'success',
        statusCode: 200,
      })

    const expected = {
      status: "success",
      statusCode: 200,
    }

    const result = await Task.ToDoList(content)
    assert.deepStrictEqual(result, expected)
    
  })
  it('should delete a task into localStorage', async () => {
    const id = faker.string.uuid();

    const stub = sinon.stub(
      Task,
      Task.deleteTask.name
    )
  
    stub
      .withArgs(id)
      .resolves({
        status: 'success',
        statusCode: 200,
        message: "Task has been deleted",
      })

    const expected = {
      status: "success",
      statusCode: 200,
      message: "Task has been deleted",
    }

    const result = await Task.deleteTask(id)
    assert.deepStrictEqual(result, expected)
    
  })
  it('should return error when trying to delete invalid id', async () => {
    const id = null;

    const stub = sinon.stub(
      Task,
      Task.deleteTask.name
    )
  
    stub
      .withArgs(id)
      .resolves({
        status: 'error',
        statusCode: 400,
        message: "Invalid ID",
      })

    const expected = new Error({
      status: 'error',
      statusCode: 400,
      message: "Invalid ID",
    })

    const result = await Task.deleteTask(id)
    assert.rejects(result, expected)

  })
  it('should return error when trying to delete a non-existent task', async () => {
    const id = faker.string.uuid();

    const stub = sinon.stub(
      Task,
      Task.deleteTask.name
    )
  
    stub
      .withArgs(id)
      .resolves({
        status: 'error',
        statusCode: 404,
        message: "Task not found",
      })

    const expected = {
      status: 'error',
      statusCode: 404,
      message: "Task not found",
    }

    const result = await Task.deleteTask(id)
    assert.deepStrictEqual(result, expected)
      
  })
})