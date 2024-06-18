const { faker } = require('@faker-js/faker');
const descriptionShort = {
  title: 'Title task',
  description: 'abaaa',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}
module.exports = descriptionShort