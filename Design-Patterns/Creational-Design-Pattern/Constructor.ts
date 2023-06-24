class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
}

// 객체 생성과 초기화
const product = new Product('Example Product', 10);
console.log(product.getName()); // "Example Product"
console.log(product.getPrice()); // 10

export {};
