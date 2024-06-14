const { faker } = require('@faker-js/faker');
export const dueDateEmpty = {
  id: faker.string.uuid(),
  title: 'Title task',
  description: 'Uma descrição pra lá de boa',
  dueDate: '',
  creationDate: new Date().toISOString(),
}
