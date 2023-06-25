// Visitor 패턴은 객체 구조와 연관된 동작을 캡슐화하여 실행하는 디자인 패턴입니다.
// 일반적인 상황으로는 동물원에서 동물들을 방문하며 울음소리를 출력하는 예시를 설명해보겠습니다.

// 방문자(Visitor) 인터페이스
interface AnimalVisitor {
  visitLion(lion: Lion): void;
  visitElephant(elephant: Elephant): void;
}

// 동물(Animal) 추상 클래스
abstract class Animal {
  abstract accept(visitor: AnimalVisitor): void;
}

// 사자(Lion) 클래스
class Lion extends Animal {
  roar(): void {
    console.log('Roar!');
  }

  accept(visitor: AnimalVisitor): void {
    visitor.visitLion(this);
  }
}

// 코끼리(Elephant) 클래스
class Elephant extends Animal {
  trumpet(): void {
    console.log('Trumpet!');
  }

  accept(visitor: AnimalVisitor): void {
    visitor.visitElephant(this);
  }
}

// 동물원(Zoo) 클래스
class Zoo {
  private animals: Animal[];

  constructor() {
    this.animals = [];
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  performVisitor(visitor: AnimalVisitor): void {
    this.animals.forEach((animal) => {
      animal.accept(visitor);
    });
  }
}

// 방문자(Visitor) 구현 클래스
class SoundVisitor implements AnimalVisitor {
  visitLion(lion: Lion): void {
    lion.roar();
  }

  visitElephant(elephant: Elephant): void {
    elephant.trumpet();
  }
}

// 동물 생성 및 동물원에서 방문자 실행
const zoo = new Zoo();
const lion = new Lion();
const elephant = new Elephant();

zoo.addAnimal(lion);
zoo.addAnimal(elephant);

const soundVisitor = new SoundVisitor();
zoo.performVisitor(soundVisitor);

// 위의 예시에서는 동물원에서 동물들을 방문하며 울음소리를 출력하는 Visitor 패턴을 사용합니다.
// `Animal`은 동물을 나타내는 추상 클래스이며, `Lion`과 `Elephant`는 `Animal`을 상속받아 구체적인 동물을 나타냅니다.

// `AnimalVisitor`는 방문자를 나타내는 인터페이스로, `visitLion`과 `visitElephant` 메서드를 정의합니다.
// `Lion`과 `Elephant` 클래스는 `accept` 메서드를 구현하여 방문자를 수락하고, 해당 동물에 대한 방문자 메서드를 호출합니다.

// `Zoo`는 동물원을 나타내는 클래스로, `addAnimal` 메서드로 동물을 추가하고, `performVisitor` 메서드로 방문자를 실행합니다.

// `SoundVisitor`는 방문자를 구현한 클래스로, `visitLion`과 `visitElephant` 메서드를 구현하여 각 동물의 울음소리를 출력합니다.

// 위의 예시에서는 동물원에 사자와 코끼리를 추가하고, `SoundVisitor`를 통해 동물들을 방문하여 울음소리를 출력합니다.
// 이를 통해 Visitor 패턴을 사용하여 동물의 구조와는 독립적으로 동작을 실행할 수 있습니다.
