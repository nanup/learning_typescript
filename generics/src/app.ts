// const names: Array<string> = ['nanu', 'akhil', 'anil']; // genetic type
// const firstUpper = names[0].toUpperCase();

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

interface Lengthy {
  length: number;
}

const mergedObj = merge({ name: 'nanu' }, { age: 25 });

function countAndPrint<T extends Lengthy>(element: T) {
  let description = 'Got no value';
  if (element.length === 1) {
    description = 'Got 1 element';
    return description;
  }
  return [element, 9];
}

console.log(countAndPrint('Hi there'));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

//genetic classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('nanu');
textStorage.addItem('anil');
textStorage.removeItem('anil');
console.log(textStorage.getItems());
