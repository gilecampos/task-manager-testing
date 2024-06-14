const { faker } = require('@faker-js/faker');
export const dueDatePast = {
  id: faker.string.uuid(),
  title: 'Title task',
  description: 'Uma descrição pra lá de boa',
  dueDate: '2024-02-20',
  creationDate: new Date().toISOString(),
}