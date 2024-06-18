const { faker } = require('@faker-js/faker');
const titleInvalidCharacter = {
  title: 'Title@@@',
  description: 'Description task',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}

module.exports = titleInvalidCharacter