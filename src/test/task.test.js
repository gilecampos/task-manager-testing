const { describe, it, after, before } = require('mocha')
const supertest = require('supertest')
const assert = require("assert")
const {createSandbox} = require("sinon")
const sinon = createSandbox()
const Task  = require('../task.js')
const { error } = require('../constant.js')
const { faker } = require('@faker-js/faker');
let { LocalStorage } = require('node-localstorage')
const localStorage = new LocalStorage('./stratch')  


describe('Task', function() {
  let ids = []
  console.log(ids)
  beforeEach(() => {
    const localList = JSON.parse(localStorage.getItem('tasks'))
    localList.forEach(element => {
      ids.push(element.id)
    });
  });
  
  afterEach(function () {
    sinon.restore()
  });
  describe('Insert', function() {
    it('should insert a task into localStorage', async () => {
      const content = {
        title: 'Title task',
        description: 'Umaasddsadsadsad',
        dueDate: faker.date.future().toISOString().split('T')[0],
        creationDate: new Date().toISOString(),
      }
  
      const expected = {
        status: "success",
        statusCode: 200,
      }
  
      const result = await Task.ToDoList(content)
      assert.deepStrictEqual(result, expected, 'Objects are not deeply strictly equal')
      
    })
  })
  describe('Delete', function() {
    it('should delete a task into localStorage', async () => {
      const id = ids[0];
  
      const expected = {
        status: "success",
        statusCode: 200,
        message: "Task has been deleted",
      }
  
      const result = await Task.deleteTask(id)
      assert.deepStrictEqual(result, expected, 'Objects are not deeply strictly equal')
    })
    it('should return error when trying to delete invalid id', async () => {
      const id = null;
  
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
  
      const expected = new Error({
        status: 'error',
        statusCode: 404,
        message: "Task not found",
      })
  
      const result = await Task.deleteTask(id)
      assert.rejects(result, expected)
    })
  })
  describe('Content', function() {
    describe('Title Field', function() {
      it('should return error for missing title', async () => {
        const content = {
          title: '',
          description: 'Umaasddsadsadsad',
          dueDate: faker.date.future().toISOString().split('T')[0],
          creationDate: new Date().toISOString(),
        }
  
        const expected = new Error(error.taskTitle.required)
        const result = Task.ToDoList(content)
        await assert.rejects(result, expected)
      })
      it('should return an error for titles with less than 3 characters', async () => {
        const content = {
          title: 'AA',
          description: 'Umaasddsadsadsad',
          dueDate: faker.date.future().toISOString().split('T')[0],
          creationDate: new Date().toISOString(),
        }
  
        const expected = new Error(error.taskTitle.tooShort)
        const result = Task.ToDoList(content)
        await assert.rejects(result, expected)
      })
      it('should return an error for titles with more than 50 characters', async () => {
        const content = {
          title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          description: 'Umaasddsadsadsad',
          dueDate: faker.date.future().toISOString().split('T')[0],
          creationDate: new Date().toISOString(),
        }
  
        const expected = new Error(error.taskTitle.tooLong)
        const result = Task.ToDoList(content)
        await assert.rejects(result, expected)
      })
      it('should return an error for titles with special characters', async () => {
        const content = {
          title: 'Title##@@#',
          description: 'Umaasddsadsadsad',
          dueDate: faker.date.future().toISOString().split('T')[0],
          creationDate: new Date().toISOString(),
        }
  
        const expected = new Error(error.taskTitle.invalidCharacter)
        const result = Task.ToDoList(content)
        await assert.rejects(result, expected)
      })
    })
  })

})