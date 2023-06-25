// Builder 패턴은 복잡한 객체의 생성 과정을 추상화하여 객체를 단계적으로 생성하는 디자인 패턴입니다.
// 이를 통해 객체 생성 과정을 단순화하고, 가독성과 유연성을 개선할 수 있습니다. 아래는 타입스크립트로 Builder 패턴을 일반적인 상황에서 사용하는 예시입니다.

class Order {
  public products: string[];
  public quantity: number;
  public shippingAddress: string;
  public totalPrice: number;

  constructor() {
    this.products = [];
    this.quantity = 0;
    this.shippingAddress = '';
    this.totalPrice = 0;
  }

  public displayInfo(): void {
    console.log('Products:', this.products);
    console.log('Quantity:', this.quantity);
    console.log('Shipping Address:', this.shippingAddress);
    console.log('Total Price:', this.totalPrice);
  }
}

class OrderBuilder {
  private order: Order;

  constructor() {
    this.order = new Order();
  }

  public setProducts(products: string[]): OrderBuilder {
    this.order.products = products;
    return this;
  }

  public setQuantity(quantity: number): OrderBuilder {
    this.order.quantity = quantity;
    return this;
  }

  public setShippingAddress(address: string): OrderBuilder {
    this.order.shippingAddress = address;
    return this;
  }

  public setTotalPrice(price: number): OrderBuilder {
    this.order.totalPrice = price;
    return this;
  }

  public build(): Order {
    return this.order;
  }
}

const orderBuilder = new OrderBuilder();
const order = orderBuilder
  .setProducts(['Product 1', 'Product 2', 'Product 3'])
  .setQuantity(5)
  .setShippingAddress('123 Main Street')
  .setTotalPrice(100)
  .build();

order.displayInfo();
// [출력]
// Products: [ 'Product 1', 'Product 2', 'Product 3' ]
// Quantity: 5
// Shipping Address: 123 Main Street
// Total Price: 100

// Builder 패턴을 사용하면 객체 생성 과정을 단순화하고, 유연성을 향상시킬 수 있습니다.
// 각각의 속성을 별도의 메서드로 설정하므로 가독성이 좋고, 필요한 속성만 설정할 수 있습니다. 또한, 다양한 종류의 Builder를 구현하여 다양한 형태의 객체를 생성할 수 있습니다.

export {};
