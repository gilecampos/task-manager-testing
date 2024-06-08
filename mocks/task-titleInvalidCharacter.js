const { faker } = require('@faker-js/faker');
const titleInvalidCharacter = {
  id: faker.string.uuid(),
  title: 'Title@@@',
  description: 'Description task',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}

module.exports = titleInvalidCharacter