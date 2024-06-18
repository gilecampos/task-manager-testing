const { faker } = require('@faker-js/faker');
const descriptionEmpty = {
  title: 'Title task',
  description: '',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}

module.exports = descriptionEmpty