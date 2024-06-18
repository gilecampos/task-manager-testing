const { faker } = require('@faker-js/faker');
const dueDateEmpty = {
  title: 'Title task',
  description: 'Uma descrição pra lá de boa',
  dueDate: '',
  creationDate: new Date().toISOString(),
}
module.exports = dueDateEmpty