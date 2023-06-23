class NewPerson {
  constructor(private name: string, private age: number) {
    this.name = name;
    this.age = age;
  }

  public say() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
  }
}

const newPerson = new NewPerson('John', 20);

newPerson.say(); // My name is John, I'm 20 years old.
