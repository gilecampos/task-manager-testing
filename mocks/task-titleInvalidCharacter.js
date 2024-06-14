const { faker } = require('@faker-js/faker');
export const titleInvalidCharacter = {
  id: faker.string.uuid(),
  title: 'Title@@@',
  description: 'Description task',
  dueDate: faker.date.future(),
  creationDate: new Date().toISOString(),
}
