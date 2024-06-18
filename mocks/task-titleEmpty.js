const { faker } = require('@faker-js/faker');
const titleEmpty = {
  title: '',
  description: 'Description task',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}
module.exports = titleEmpty