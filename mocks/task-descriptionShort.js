const { faker } = require('@faker-js/faker');
export const descriptionShort = {
  id: faker.string.uuid(),
  title: 'Title task',
  description: 'abaaa',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}
