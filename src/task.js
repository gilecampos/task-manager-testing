const {error} = require('./constant')

class Task {
  static async ToDoList(taskData) {
    const task = await taskData;
    const validTitle = this.validTitle(task)
    if(!validTitle.valid) throw new Error(validTitle.error)
    return validTitle
  }

  static validTitle(taskData) {
    const containsSpecialCharacters = str => {
      const regex = /[^a-zA-Z0-9]/;
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

}

module.exports = Task