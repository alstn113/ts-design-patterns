// Abstract Factory 인터페이스
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

// 구체 팩토리 클래스 1
class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

// 구체 팩토리 클래스 2
class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

// Abstract Product 인터페이스 A
interface AbstractProductA {
  methodA(): void;
}

// Abstract Product 인터페이스 B
interface AbstractProductB {
  methodB(): void;
}

// 구체적인 제품 클래스 A1
class ConcreteProductA1 implements AbstractProductA {
  methodA(): void {
    console.log('ConcreteProductA1: methodA');
  }
}

// 구체적인 제품 클래스 A2
class ConcreteProductA2 implements AbstractProductA {
  methodA(): void {
    console.log('ConcreteProductA2: methodA');
  }
}

// 구체적인 제품 클래스 B1
class ConcreteProductB1 implements AbstractProductB {
  methodB(): void {
    console.log('ConcreteProductB1: methodB');
  }
}

// 구체적인 제품 클래스 B2
class ConcreteProductB2 implements AbstractProductB {
  methodB(): void {
    console.log('ConcreteProductB2: methodB');
  }
}

const clientCode = (factory: AbstractFactory): void => {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  productA.methodA();
  productB.methodB();
};

// 클라이언트 코드에서 구체 팩토리를 사용하여 객체 생성
const factory1: AbstractFactory = new ConcreteFactory1();
clientCode(factory1);
// [출력]
// ConcreteProductA1: methodA
// ConcreteProductB1: methodB

const factory2: AbstractFactory = new ConcreteFactory2();
clientCode(factory2);
// [출력]
// ConcreteProductA2: methodA;
// ConcreteProductB2: methodB;
