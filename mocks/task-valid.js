const { faker } = require('@faker-js/faker');
const validTask = {
  title: 'Title task',
  description: 'Uma bela descrição',
  dueDate: faker.date.future().toISOString().split('T')[0],
  creationDate: new Date().toISOString(),
}

module.exports = validTask