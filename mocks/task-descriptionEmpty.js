const { faker } = require('@faker-js/faker');
const descriptionEmpty = {
  id: faker.string.uuid(),
  title: 'Title task',
  description: '',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}

module.exports = descriptionEmpty