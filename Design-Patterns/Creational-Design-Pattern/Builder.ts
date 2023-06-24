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
