// Facade 패턴은 복잡한 서브시스템을 간단하고 일관된 인터페이스로 제공하여 사용자가 서브시스템을 더 쉽게 사용할 수 있게 해주는 디자인 패턴입니다.
// 이를 통해 복잡한 서브시스템을 감추고 단순한 인터페이스만 노출시킴으로써 사용자가 더 편리하게 상호작용할 수 있습니다.

// 일반적인 상황으로 예시를 들어보겠습니다. 가정해보세요 우리는 주문 처리 시스템을 개발하고 있습니다.
// 이 시스템에서는 주문을 생성하고, 결제를 처리하며, 배송을 조정하는 등 다양한 서브시스템이 있습니다.
// 이때 Facade 패턴을 활용하여 각 서브시스템의 복잡한 로직을 간단한 인터페이스로 노출시킬 수 있습니다.

// 먼저 주문 생성 서브시스템을 나타내는 OrderSystem 클래스를 작성합니다.

class OrderSystem {
  createOrder(products: string[]): string {
    // 주문 생성 로직
    const orderId = Math.random().toString(36).substr(2, 9);
    console.log(`Order created: ${orderId}`);
    return orderId;
  }
}

// 다음으로 결제 처리 서브시스템을 나타내는 PaymentSystem 클래스를 작성합니다.

class PaymentSystem {
  processPayment(orderId: string, amount: number): void {
    // 결제 처리 로직
    console.log(`Payment processed for order ${orderId}: $${amount}`);
  }
}

// 마지막으로 배송 조정 서브시스템을 나타내는 ShippingSystem 클래스를 작성합니다.

class ShippingSystem {
  adjustShipping(orderId: string, address: string): void {
    // 배송 조정 로직
    console.log(`Shipping adjusted for order ${orderId}: ${address}`);
  }
}

// 이제 Facade 클래스인 OrderFacade를 작성합니다. OrderFacade는 주문 생성, 결제 처리, 배송 조정 등의 서브시스템을 단순한 인터페이스로 제공합니다.

class OrderFacade {
  private orderSystem: OrderSystem;
  private paymentSystem: PaymentSystem;
  private shippingSystem: ShippingSystem;

  constructor() {
    this.orderSystem = new OrderSystem();
    this.paymentSystem = new PaymentSystem();
    this.shippingSystem = new ShippingSystem();
  }

  placeOrder(products: string[], amount: number, address: string): void {
    const orderId = this.orderSystem.createOrder(products);
    this.paymentSystem.processPayment(orderId, amount);
    this.shippingSystem.adjustShipping(orderId, address);
  }
}

// 위의 코드에서 OrderFacade 클래스는 OrderSystem, PaymentSystem, ShippingSystem을 인스턴스로 가지고 있습니다.
// placeOrder 메서드를 통해 주문 생성, 결제 처리, 배송 조정 등의 작업을 간단하게 수행할 수 있습니다.

// 이제 사용자는 다음과 같이 OrderFacade를 통해 주문을 처리할 수 있습니다.

const orderFacade = new OrderFacade();
orderFacade.placeOrder(['Product 1', 'Product 2'], 100, '123 Main Street');

// 위의 코드에서는 OrderFacade 인스턴스를 생성하고, placeOrder 메서드를 호출하여 주문을 처리합니다.
// 사용자는 복잡한 주문 처리 과정을 알 필요 없이 간단한 인터페이스를 통해 주문을 처리할 수 있습니다.

// Facade 패턴을 사용하면 복잡한 서브시스템을 단순한 인터페이스로 감싸고, 사용자에게 더 편리하게 제공할 수 있습니다.
// 또한, 서브시스템의 변경에도 영향을 최소화할 수 있으며, 코드의 가독성과 유지보수성을 향상시킬 수 있습니다.
