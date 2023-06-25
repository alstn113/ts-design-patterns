// Abstract Factory 패턴은 관련된 객체들의 집합을 생성하기 위한 인터페이스를 제공하는 추상 팩토리 클래스를 사용하여 객체를 생성하는 디자인 패턴입니다.
// 이를 통해 클라이언트 코드가 구체적인 클래스에 의존하지 않고도 객체를 생성할 수 있으며, 상호관련된 객체들을 일관성 있게 생성할 수 있습니다.
// 아래는 타입스크립트로 Abstract Factory 패턴을 일반적인 상황에서 사용하는 예시입니다.

// 상품 인터페이스
interface Product {
  name: string;
  price: number;
  getDescription(): string;
}

// 책 상품
class BookProduct implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getDescription(): string {
    return `Book: ${this.name}, Price: $${this.price}`;
  }
}

// 음악 CD 상품
class MusicCDProduct implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getDescription(): string {
    return `Music CD: ${this.name}, Price: $${this.price}`;
  }
}

// 추상 팩토리 인터페이스
interface ProductFactory {
  createProduct(name: string, price: number): Product;
}

// 책 팩토리
class BookFactory implements ProductFactory {
  createProduct(name: string, price: number): Product {
    return new BookProduct(name, price);
  }
}

// 음악 CD 팩토리
class MusicCDFactory implements ProductFactory {
  createProduct(name: string, price: number): Product {
    return new MusicCDProduct(name, price);
  }
}

// 클라이언트 코드
function createProduct(
  factory: ProductFactory,
  name: string,
  price: number,
): Product {
  return factory.createProduct(name, price);
}

// 팩토리 선택
const bookFactory: ProductFactory = new BookFactory();
const musicCDFactory: ProductFactory = new MusicCDFactory();

// 상품 생성
const book: Product = createProduct(bookFactory, 'The Great Gatsby', 10);
console.log(book.getDescription()); // 출력: Book: The Great Gatsby, Price: $10

const musicCD: Product = createProduct(musicCDFactory, 'Best Hits', 15);
console.log(musicCD.getDescription()); // 출력: Music CD: Best Hits, Price: $15

// 위 예시에서는 `Product` 인터페이스를 정의하고, 이를 구현하는 `BookProduct`과 `MusicCDProduct` 클래스를 생성합니다.
// 각 클래스는 생성자를 통해 이름(`name`)과 가격(`price`)을 받아 초기화하며, `getDescription` 메서드를 통해 상품의 설명을 반환합니다.

// 또한, `ProductFactory` 인터페이스를 정의하고, 이를 구현하는 `BookFactory`와 `MusicCDFactory` 클래스를 생성합니다.
// 각 팩토리 클래스는 `createProduct` 메서드를 통해 해당하는 상품 객체를 생성하여 반환합니다.

// `createProduct` 함수는 팩토리와 필요한 정보인 이름과 가격을 받아 해당하는 상품을 생성합니다.

// 마지막으로, 클라이언트 코드에서는 팩토리를 선택하고 `createProduct` 함수를 통해 상품 객체를 생성하고 사용합니다.
// 이를 통해 클라이언트 코드는 구체적인 클래스에 의존하지 않고도 추상적인 팩토리를 통해 객체를 생성할 수 있습니다.

export {};
