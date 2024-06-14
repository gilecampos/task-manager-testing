const { faker } = require('@faker-js/faker');
export const titleShort = {
  id: faker.string.uuid(),
  title: 'aa',
  description: 'Description task',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}