interface Named {
  readonly name: string;
  outputName?: string;

  myMethod?(): void;
}

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

interface Person extends Named {
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'nanu',
  age: 25,

  greet(phrase: string) {
    console.log(phrase);
  },
};
