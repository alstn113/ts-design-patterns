// Strategy 패턴은 동일한 문제를 해결하기 위한 여러 알고리즘을 정의하고, 실행 시점에 유연하게 선택하여 사용할 수 있게 하는 디자인 패턴입니다.
// 이를 통해 알고리즘을 독립적으로 변경하고 확장할 수 있습니다.
// 예시) 물류 배송 시스템

// 배송 방법을 나타내는 Strategy 인터페이스
interface ShippingStrategy {
  calculateCost(weight: number): number;
}

// 택배 배송 전략을 구현한 Concrete Strategy 클래스
class CourierShippingStrategy implements ShippingStrategy {
  calculateCost(weight: number): number {
    // 택배 배송 비용 계산 로직 구현
    return weight * 10; // 단위 무게당 10달러
  }
}

// 해외 배송 전략을 구현한 Concrete Strategy 클래스
class InternationalShippingStrategy implements ShippingStrategy {
  calculateCost(weight: number): number {
    // 해외 배송 비용 계산 로직 구현
    return weight * 20; // 단위 무게당 20달러
  }
}

// 상품 정보
class Product {
  weight: number;

  constructor(weight: number) {
    this.weight = weight;
  }
}

// 배송을 수행하는 Context 클래스
class ShippingContext {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  calculateShippingCost(product: Product): number {
    return this.strategy.calculateCost(product.weight);
  }
}

// 상품
const product = new Product(5); // 무게: 5kg

// 배송 Context 객체 생성
const context = new ShippingContext(new CourierShippingStrategy());

// 현재 전략으로 배송 비용 계산
const shippingCost = context.calculateShippingCost(product);
console.log(`Shipping Cost: $${shippingCost}`); // "Shipping Cost: $50" (택배 배송)

// 전략 변경 (해외 배송)
context.setStrategy(new InternationalShippingStrategy());

// 변경된 전략으로 배송 비용 계산
const internationalShippingCost = context.calculateShippingCost(product);
console.log(`Shipping Cost: $${internationalShippingCost}`); // "Shipping Cost: $100" (해외 배송)

// 위의 예시에서는 `ShippingStrategy` 인터페이스를 정의하여 배송 전략을 추상화합니다.
// `CourierShippingStrategy` 클래스와 `InternationalShippingStrategy` 클래스는 각각 택배 배송과 해외 배송을 구현한 전략 클래스입니다.
// `ShippingContext` 클래스는 배송을 수행하는 역할을 하며, 현재 선택된 전략을 유지하고 배송 비용을 계산합니다.

// 코드에서는 초기에 `ShippingContext` 객체를 생성하고 `CourierShippingStrategy`를 초기 전략으로 설정합니다.
// `calculateShippingCost` 메서드를 호출하여 상품의 무게에 따른 배송 비용을 계산하면 택배 배송의 비용이 나옵니다.
// 그 후 `setStrategy` 메서드를 통해 전략을 변경하여 해외 배송으로 전략을 바꿀 수 있고, 다시 `calculateShippingCost` 메서드를 호출하면 변경된 전략으로 배송 비용이 계산됩니다.

// 이와 같이 Strategy 패턴을 사용하면 동일한 기능을 다양한 전략으로 구현할 수 있고, 객체의 유연성과 재사용성을 높일 수 있습니다.
// 배송 방법에 따른 비용 계산과 같이 다양한 조건에 따라 동작을 다르게 해야하는 경우에 유용한 패턴입니다.
