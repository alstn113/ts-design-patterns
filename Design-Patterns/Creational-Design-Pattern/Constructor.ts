// Constructor 패턴은 객체 생성 시점에 필요한 데이터를 인자로 전달하여 객체를 초기화하는 방법을 추구하는 디자인 패턴입니다.
// 이를 통해 객체 생성 과정을 단순화하고, 필요한 데이터의 유효성 검사 등을 수행할 수 있습니다.
// 아래는 타입스크립트로 Constructor 패턴을 일반적인 상황에서 사용하는 예시입니다.

class Car {
  private brand: string;
  private color: string;
  private year: number;

  constructor(brand: string, color: string, year: number) {
    this.brand = brand;
    this.color = color;
    this.year = year;
  }

  getBrand(): string {
    return this.brand;
  }

  getColor(): string {
    return this.color;
  }

  getYear(): number {
    return this.year;
  }
}

// 객체 생성 시 필요한 데이터를 전달하여 Car 객체를 초기화합니다.
const myCar = new Car('Toyota', 'Blue', 2022);

console.log(myCar.getBrand()); // 출력: Toyota
console.log(myCar.getColor()); // 출력: Blue
console.log(myCar.getYear()); // 출력: 2022

// 위 예시에서는 `Car` 클래스를 정의하고, 생성자를 통해 `brand`, `color`, `year`의 인자를 받아 객체를 초기화합니다.
// 생성된 `Car` 객체는 해당 속성값을 반환하는 `getBrand()`, `getColor()`, `getYear()` 메서드를 제공합니다.

// 일반적인 사용 상황으로는 다양한 종류의 객체를 생성하는 과정에서 Constructor 패턴을 사용할 수 있습니다.
// 예를 들어, 자동차, 주문, 사용자 등의 객체를 생성할 때 해당 객체의 속성을 생성자를 통해 전달하여 초기화할 수 있습니다.
// 이를 통해 객체의 속성에 대한 유효성 검사, 초기화 로직 등을 적용할 수 있습니다.

// Constructor 패턴은 객체 생성 시 데이터의 일관성과 유효성을 보장하며, 객체 생성 과정을 표준화하고 재사용 가능한 객체 생성 로직을 구현할 수 있게 해줍니다.

export {};
