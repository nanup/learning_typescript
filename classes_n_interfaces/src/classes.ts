abstract class Department {
  static Fiscalyear = 2020;
  protected employees: string[] = [];

  constructor(readonly id: string, public name: string) {}

  desscribe(this: Department) {
    return this.name + ' Department';
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  abstract doSomething(): void;
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'ITDept');
  }

  addEmployee(name: string) {
    if (name == 'nanu') {
      console.log('hello there');
    } else {
      this.employees.push(name);
    }
  }

  desscribe(this: Department): string {
    return this.name + ' IT Department';
  }

  doSomething(): void {
    return;
  }
}

class AccDepartment extends Department {
  private lastReport: string;

  constructor(id: string, protected reports: string[]) {
    super(id, 'AccDept');
    this.lastReport = this.reports[0];
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  get latestReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      return 'Nothing found';
    }
  }

  doSomething(): void {
    return;
  }
}

// const marketDept = new Department('id1', 'Marketing');
const itDept1 = new ITDepartment('id2', ['nanu']);
const accDept1 = new AccDepartment('id3', ['first report']);

accDept1.addReport('Second report');
console.log(accDept1.latestReport);
console.log(itDept1.desscribe());

itDept1.addEmployee('kani');

// marketDept.employees[2] = 'nanu';

// console.log(marketDept);
console.log(itDept1);

// console.log(marketDept.desscribe());

const copyMarketDept = { name: 'copy', describe: marketDept.desscribe };
