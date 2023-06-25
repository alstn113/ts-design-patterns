// Bridge 패턴은 추상화와 구현을 분리하여 두 개의 계층적인 클래스 구조를 연결하는 디자인 패턴입니다.
// 이를 통해 추상화와 구현의 변경이 서로 독립적으로 이루어질 수 있고, 클래스 간의 강한 의존성을 줄일 수 있습니다.

// 일반적인 상황을 예시로 설명해보겠습니다. 가정해보세요 우리는 도로를 건설하는 프로그램을 개발하고 있습니다.
// 도로에는 다양한 종류의 자동차가 사용될 수 있습니다. 도로의 종류는 다리(bridge)와 연결되어 있으며, 각각의 자동차는 자신에게 적합한 도로 위에서만 운행할 수 있습니다.
// 이 때 Bridge 패턴을 활용하여 구현할 수 있습니다.

// 먼저 추상화 계층을 나타내는 Road 클래스와 구현 계층을 나타내는 Car 클래스를 작성합니다.

abstract class Road {
  protected car: Car;

  constructor(car: Car) {
    this.car = car;
  }

  abstract drive(): void;
}

class ConcreteRoad extends Road {
  drive(): void {
    console.log('Driving on a concrete road...');
    this.car.move();
  }
}

class DirtRoad extends Road {
  drive(): void {
    console.log('Driving on a dirt road...');
    this.car.move();
  }
}

interface Car {
  move(): void;
}

class Sedan implements Car {
  move(): void {
    console.log('Sedan is moving...');
  }
}

class SUV implements Car {
  move(): void {
    console.log('SUV is moving...');
  }
}

// 위 코드에서 Road는 추상화 계층을 나타내며, Car는 구현 계층을 나타냅니다. Road 클래스는 생성자를 통해 Car 객체를 받아옵니다.
// ConcreteRoad와 DirtRoad는 Road 클래스를 상속받아 추상 메서드인 drive를 구현합니다. Car 인터페이스를 구현한 Sedan과 SUV는 move 메서드를 구현합니다.

// 이제 코드를 실행하여 다양한 자동차가 다른 도로에서 움직이는 예시를 확인해봅시다.

const sedan = new Sedan();
const suv = new SUV();

const concreteRoad = new ConcreteRoad(sedan);
concreteRoad.drive();
// [출력]
// Driving on a concrete road...
// Sedan is moving...

const dirtRoad = new DirtRoad(suv);
dirtRoad.drive();
// [출력]
// Driving on a dirt road...
// SUV is moving...

// 위의 예시에서는 Sedan과 SUV가 각각 다른 도로에서 움직일 수 있도록 Bridge 패턴을 적용했습니다.
// ConcreteRoad와 DirtRoad는 Road 클래스를 상속받아 도로에 대한 구체적인 구현을 제공하고, 각각의 자동차 객체를 생성자를 통해 전달받아 도로 위에서의 운행을 처리합니다.

// 이렇게 Bridge 패턴을 사용하면 추상화 계층과 구현 계층이 독립적으로 발전할 수 있고, 클래스 간의 강한 의존성을 줄일 수 있습니다.
// 새로운 도로나 자동차를 추가하더라도 기존 코드를 변경하지 않고 확장할 수 있습니다.

export {};
