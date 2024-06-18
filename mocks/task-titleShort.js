const { faker } = require('@faker-js/faker');
const titleShort = {
  id: faker.string.uuid(),
  title: 'aa',
  description: 'Description task',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}

module.exports = titleShort