// Factory 패턴은 객체 생성을 담당하는 팩토리 클래스를 사용하여 객체를 생성하는 디자인 패턴입니다.
// 이를 통해 객체 생성 과정을 캡슐화하고, 클라이언트 코드에서 직접 객체를 생성하는 것보다 유연성과 확장성을 높일 수 있습니다.
// 아래는 타입스크립트로 Factory 패턴을 일반적인 상황에서 사용하는 예시입니다.

// 상품 인터페이스
interface Product {
  name: string;
  price: number;
}

// 상품 종류 1: 책
class Book implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// 상품 종류 2: 음악 CD
class MusicCD implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// 상품 종류 3: 가전 제품
class Electronics implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// 팩토리 클래스
class ProductFactory {
  createProduct(type: string, name: string, price: number): Product {
    switch (type) {
      case 'book':
        return new Book(name, price);
      case 'musicCD':
        return new MusicCD(name, price);
      case 'electronics':
        return new Electronics(name, price);
      default:
        throw new Error('Invalid product type.');
    }
  }
}

// 팩토리를 사용하여 객체 생성
const factory = new ProductFactory();

const book = factory.createProduct('book', 'The Great Gatsby', 10);
console.log(book.name); // 출력: The Great Gatsby
console.log(book.price); // 출력: 10

const musicCD = factory.createProduct('musicCD', 'Best Hits', 15);
console.log(musicCD.name); // 출력: Best Hits
console.log(musicCD.price); // 출력: 15

const electronics = factory.createProduct('electronics', 'Smart TV', 500);
console.log(electronics.name); // 출력: Smart TV
console.log(electronics.price); // 출력: 500

// 위 예시에서는 `Product` 인터페이스를 정의하고, 해당 인터페이스를 구현하는 `Book`, `MusicCD`, `Electronics` 클래스를 생성합니다.
// 각 클래스는 생성자를 통해 필요한 속성을 받아 초기화합니다.

// 그리고 `ProductFactory` 클래스를 작성하여 `createProduct` 메서드를 통해 객체를 생성합니다.
// `createProduct` 메서드는 전달된 `type`에 따라 적절한 클래스의 인스턴스를 생성하여 반환합니다.

// 클라이언트 코드에서는 `ProductFactory`를 사용하여 원하는 종류의 상품 객체를 생성합니다. 객체를 생성할 때 필요한 속성을 전달하면서 객체를 초기화할 수 있습니다.

// Factory 패턴은 객체 생성 로직을 분리하여 유지보수와 확장성을 개선하고, 클라이언트 코드에서는 생성된 객체를 사용하는데 집중할 수 있도록 합니다.
// 또한, 객체 생성 과정에 복잡한 로직이 포함될 경우 이를 팩토리 클래스에 캡슐화하여 코드의 중복을 피할 수 있습니다.

export {};
