// State 패턴은 객체의 내부 상태에 따라 동작을 변경할 수 있는 디자인 패턴입니다.
// 이를 통해 객체의 행동을 캡슐화하고, 상태 변화에 따라 동적으로 행동을 변경할 수 있습니다.
// 일반적인 상황으로는 주문 상태를 관리하는 예시를 들어보겠습니다.

// 주문 상태를 나타내는 State 인터페이스
interface OrderState {
  cancel(): void;
  verifyPayment(): void;
  ship(): void;
}

// 주문이 생성된 상태를 나타내는 Concrete State 클래스
class CreatedState implements OrderState {
  cancel(): void {
    console.log('주문이 취소되었습니다.');
  }

  verifyPayment(): void {
    console.log('결제가 확인되었습니다.');
  }

  ship(): void {
    console.log('주문을 발송할 수 없습니다. 결제 확인이 필요합니다.');
  }
}

// 결제가 확인된 상태를 나타내는 Concrete State 클래스
class PaymentVerifiedState implements OrderState {
  cancel(): void {
    console.log('주문이 취소되었습니다.');
  }

  verifyPayment(): void {
    console.log('이미 결제가 확인되었습니다.');
  }

  ship(): void {
    console.log('주문을 발송합니다.');
  }
}

// 주문 객체
class Order {
  private state: OrderState;

  constructor() {
    this.state = new CreatedState();
  }

  setState(state: OrderState): void {
    this.state = state;
  }

  cancel(): void {
    this.state.cancel();
  }

  verifyPayment(): void {
    this.state.verifyPayment();
  }

  ship(): void {
    this.state.ship();
  }
}

// 주문 생성
const order = new Order();

// 주문 상태 확인
order.verifyPayment(); // "결제가 확인되었습니다."

// 주문 취소
order.cancel(); // "주문이 취소되었습니다."

// 결제 확인
order.ship(); // "주문을 발송할 수 없습니다. 결제 확인이 필요합니다."

// 결제 확인
order.setState(new PaymentVerifiedState());
order.verifyPayment(); // "이미 결제가 확인되었습니다."
order.cancel(); // "주문이 취소되었습니다."
order.ship(); // "주문을 발송합니다."

// 위의 예시에서는 `OrderState` 인터페이스를 정의하여 주문의 상태에 따른 동작을 구체화합니다.
// `CreatedState` 클래스는 주문이 생성된 상태를, `PaymentVerifiedState` 클래스는 결제가 확인된 상태를 나타냅니다.
// `Order` 클래스는 현재 상태를 관리하며, `setState`, `cancel`, `verifyPayment`, `ship` 메서드를 통해 주문 상태를 변경하고 해당 상태에 따른 동작을 수행합니다.

// 위의 예시에서는 주문이 생성되면 `verifyPayment` 메서드를 호출하여 결제를 확인합니다.
// 그 후에는 `cancel` 메서드로 주문을 취소할 수 있으며, 결제가 확인된 상태로 변경되면 `verifyPayment` 메서드로 이미 결제 확인된 상태임을 알 수 있고,
// `ship`메서드로 주문을 발송할 수 있습니다.

// State 패턴을 사용하면 객체의 상태에 따라 동작을 변경할 수 있으며, 동적으로 상태를 전환할 수 있습니다.
// 이는 복잡한 상태 전이를 간단하게 관리하고 객체의 유연성을 높이는 데 도움이 됩니다.

export {};
