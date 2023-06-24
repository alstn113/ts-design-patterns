// 타입스크립트로 Composite 패턴을 구현하는 일반적인 예시로는 조직 구조를 표현하는 트리 구조를 사용할 수 있습니다.
// 조직은 계층적으로 구성된 부서와 직원으로 이루어진 구조이며, Composite 패턴을 사용하여 각 부서와 직원을 일관된 방식으로 다룰 수 있습니다.

// 조직 구성원을 나타내는 추상 클래스
abstract class Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract print(): void;
}

// 부서를 나타내는 클래스, 하위 구성원인 부서나 직원을 가질 수 있습니다.
class Department extends Component {
  private children: Component[] = [];

  constructor(name: string) {
    super(name);
  }

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  print(): void {
    console.log(`Department: ${this.name}`);
    for (const child of this.children) {
      child.print();
    }
  }
}

// 직원을 나타내는 클래스, 하위 구성원을 가질 수 없습니다.
class Employee extends Component {
  constructor(name: string) {
    super(name);
  }

  print(): void {
    console.log(`Employee: ${this.name}`);
  }
}

const engineeringDepartment = new Department('Engineering Department');
const developmentTeam = new Department('Development Team');
const testingTeam = new Department('Testing Team');

const john = new Employee('John');
const alice = new Employee('Alice');
const bob = new Employee('Bob');

engineeringDepartment.add(developmentTeam);
engineeringDepartment.add(testingTeam);

developmentTeam.add(john);
developmentTeam.add(alice);
testingTeam.add(bob);

engineeringDepartment.print();
// [출력]
// Department: Engineering Department
// Department: Development Team
// Employee: John
// Employee: Alice
// Department: Testing Team
// Employee: Bob

export {};
