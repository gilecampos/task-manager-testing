const { faker } = require('@faker-js/faker');
const dueDateInvalid = {
  id: faker.string.uuid(),
  title: 'Title task',
  description: 'Uma descrição pra lá de boa',
  dueDate: '10-09-2024',
  creationDate: new Date().toISOString(),
}
module.exports = dueDateInvalid