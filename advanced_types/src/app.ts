type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type promotedEmployee = Admin & Employee;

const e1: promotedEmployee = {
  name: 'nanu',
  privileges: ['create-server'],
  startDate: new Date(),
};

type strNum = string | number;
type numBool = number | boolean;

type num = strNum & numBool;

function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: strNum, n2: strNum) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + blur.toString();
  } else {
    return +n1 + +n2;
  }
}

console.log(add('', 'nanu'));

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

let speed: number;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case 'bird': {
      speed = animal.flyingSpeed;
      break;
    }
    case 'horse': {
      speed = animal.runningSpeed;
      break;
    }
    default: {
      console.log('Knock, Knock!');
    }
  }
}

const userInput = <HTMLInputElement>document.getElementById('user_input');

interface ErrorContainer {
  [prop: string]: string;
}

const newError: ErrorContainer = {
  name: 'KeyError',
  // age: 22;
};

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', Office: 'Hyderabad' },
};

console.log(fetchedUserData?.job?.Office);
