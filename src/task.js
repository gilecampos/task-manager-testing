const {error} = require('./constant')

class Task {
  static async ToDoList(taskData) {
    const task = await taskData;
    const validTitle = this.validTitle(task)
    if(!validTitle.valid) throw new Error(validTitle.error)
    const validDescription = this.validDescription(task)
    if(!validDescription.valid) throw new Error(validDescription.error)
    
    return task
  }

  static validTitle(taskData) {
    const containsSpecialCharacters = str => {
      const regex = /[^a-zA-Z0-9 ]/;
      return regex.test(str);
    }

    if(!taskData.title){
      return {
        error: error.taskTitle.required,
        valid: false,
      }
    }

    if(taskData.title.length <= 3) {
      return {
        error: error.taskTitle.tooShort,
        valid: false,
      }
    }

    if(taskData.title.length >= 100) {
      return {
        error: error.taskTitle.tooLong,
        valid: false,
      }
    }

    if(containsSpecialCharacters(taskData.title)) {
      return {
        error: error.taskTitle.invalidCharacter,
        valid: false,
      }
    }
    return { valid: true }
  }

  static validDescription(taskData) {
    if(!taskData.description){
      return {
        error: error.description.required,
        valid: false,
      }
    }

    if(taskData.description.length <= 10) {
      return {
        error: error.description.tooShort,
        valid: false,
      }
    }

    if(taskData.description.length >= 500) {
      return {
        error: error.description.tooLong,
        valid: false,
      }
    }
    return { valid: true }
  }

}

module.exports = Task