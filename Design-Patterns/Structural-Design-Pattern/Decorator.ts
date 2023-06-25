// Decorator 패턴은 객체에 동적으로 기능을 추가할 수 있는 디자인 패턴입니다. 이를 통해 기존 객체의 수정 없이 새로운 기능을 추가할 수 있습니다.
// Decorator 패턴은 객체를 감싸는 Wrapper 클래스를 생성하여 기능을 추가하는 방식으로 작동합니다.

// 일반적인 상황을 예시로 설명해보겠습니다. 가정해보세요 우리는 커피 주문 시스템을 개발하고 있습니다. 사용자는 기본 커피에 여러 가지 추가 옵션을 선택할 수 있어야 합니다.
// 예를 들어, 우유 추가, 시럽 추가, 휘핑 크림 추가 등의 옵션을 선택할 수 있어야 합니다.
// 이 때 Decorator 패턴을 사용하여 커피 객체에 다양한 추가 옵션을 동적으로 추가할 수 있습니다.

// 먼저 추상 클래스인 Coffee를 정의합니다. Coffee 클래스는 커피 객체의 공통 인터페이스를 제공합니다.

abstract class Coffee {
  abstract getDescription(): string;
  abstract cost(): number;
}

class SimpleCoffee extends Coffee {
  getDescription(): string {
    return 'Simple Coffee';
  }

  cost(): number {
    return 1.0;
  }
}

// 위 코드에서 SimpleCoffee는 기본 커피를 나타내는 클래스입니다. getDescription 메서드는 커피의 설명을 반환하고, cost 메서드는 커피의 가격을 반환합니다.

// 이제 커피에 추가 옵션을 나타내는 Decorator 클래스를 정의합니다.

abstract class CoffeeDecorator extends Coffee {
  protected decoratedCoffee: Coffee;

  constructor(coffee: Coffee) {
    super();
    this.decoratedCoffee = coffee;
  }

  getDescription(): string {
    return this.decoratedCoffee.getDescription();
  }

  cost(): number {
    return this.decoratedCoffee.cost();
  }
}

class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.decoratedCoffee.getDescription()}, Milk`;
  }

  cost(): number {
    return this.decoratedCoffee.cost() + 0.5;
  }
}

class SyrupDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.decoratedCoffee.getDescription()}, Syrup`;
  }

  cost(): number {
    return this.decoratedCoffee.cost() + 0.3;
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.decoratedCoffee.getDescription()}, Whipped Cream`;
  }

  cost(): number {
    return this.decoratedCoffee.cost() + 0.7;
  }
}

// 위 코드에서 CoffeeDecorator는 추가 옵션을 나타내는 Decorator 클래스입니다.
// decoratedCoffee 속성은 기존 커피 객체를 감싸고 있습니다.
// getDescription 메서드와 cost 메서드는 decoratedCoffee의 동작을 확장하여 추가 옵션을 포함한 설명과 가격을 반환합니다.

// 이제 코드를 실행하여 커피 객체에 다양한 추가 옵션을 적용하는 예시를 확인해봅시다.

let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getDescription()); // Output: Simple Coffee
console.log(coffee.cost()); // Output: 1.0

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription()); // Output: Simple Coffee, Milk
console.log(coffee.cost()); // Output: 1.5

coffee = new SyrupDecorator(coffee);
console.log(coffee.getDescription()); // Output: Simple Coffee, Milk, Syrup
console.log(coffee.cost()); // Output: 1.8

coffee = new WhippedCreamDecorator(coffee);
console.log(coffee.getDescription()); // Output: Simple Coffee, Milk, Syrup, Whipped Cream
console.log(coffee.cost()); // Output: 2.5

// 위의 코드에서는 SimpleCoffee를 생성한 후 MilkDecorator, SyrupDecorator, WhippedCreamDecorator를 차례로 적용하여 커피에 추가 옵션을 적용했습니다.
// 각각의 getDescription 메서드와 cost 메서드를 호출하여 옵션을 포함한 설명과 가격을 확인할 수 있습니다.

// Decorator 패턴을 사용하면 객체에 동적으로 기능을 추가할 수 있으며, 기존 객체를 수정하지 않고도 유연하게 기능을 확장할 수 있습니다.
// 이를 통해 코드의 재사용성과 유지보수성을 향상시킬 수 있습니다.
