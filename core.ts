const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'nanu',
  age: 25,
  hobbies: ['sports', 'cooking'],
  role: [1, 'author'],
};

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const newPerson: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'nanu',
  age: 30,
  hobbies: ['one', 'two'],
  role: Role.ADMIN,
};

let favoriteHobbies: string[] = ['one', 'nanu'];

console.log(newPerson.role);
