// Chain of Responsibility 패턴은 요청을 처리하는 객체들을 체인 형태로 연결하여 처리할 수 있는 디자인 패턴입니다.
// 각각의 객체는 요청을 처리할 수 있는지 여부를 판단하고, 요청을 처리할 수 있는 경우 처리하거나 다음 객체에게 전달하는 방식으로 동작합니다.

// 일반적인 상황을 예시로 설명해보겠습니다. 가정해보세요 우리는 여러 단계로 이루어진 결재 시스템을 개발하고 있습니다.
// 각 단계에서는 결재 요청을 처리할 수 있는 직원이 지정되어 있으며, 요청이 한 단계에서 처리되지 않으면 다음 단계로 전달됩니다.
// 이때 Chain of Responsibility 패턴을 활용하여 요청을 처리하는 체인을 구성할 수 있습니다.

// 먼저, 요청을 처리하는 추상 클래스인 Approver를 작성합니다.

abstract class Approver {
  private nextApprover: Approver | null;

  constructor() {
    this.nextApprover = null;
  }
  public setNextApprover(nextApprover: Approver): void {
    this.nextApprover = nextApprover;
  }

  public processRequest(amount: number): void {
    if (this.canApprove(amount)) {
      this.approveRequest(amount);
    } else if (this.nextApprover) {
      this.nextApprover.processRequest(amount);
    } else {
      console.log('No one can approve the request.');
    }
  }

  protected abstract canApprove(amount: number): boolean;

  protected abstract approveRequest(amount: number): void;
}

// 위의 코드에서 Approver는 다음 Approver 객체를 참조하는 nextApprover 멤버 변수를 가지고 있습니다.
//  setNextApprover 메서드를 통해 다음 Approver 객체를 설정할 수 있습니다.
// processRequest 메서드는 요청을 처리하는 메서드로, 자식 클래스에서 구체적인 처리 로직을 구현하도록 합니다.
// canApprove 메서드는 요청을 처리할 수 있는지 여부를 판단하고, approveRequest 메서드는 실제 요청을 처리하는 로직을 구현합니다.

// 다음으로, 각 단계에서 결재를 처리하는 구체적인 Approver 클래스를 작성합니다.

class Manager extends Approver {
  protected canApprove(amount: number): boolean {
    return amount <= 1000;
  }

  protected approveRequest(amount: number): void {
    console.log(`Manager approved the request for amount: $${amount}`);
  }
}

class Director extends Approver {
  protected canApprove(amount: number): boolean {
    return amount <= 5000;
  }

  protected approveRequest(amount: number): void {
    console.log(`Director approved the request for amount: $${amount}`);
  }
}

class CEO extends Approver {
  protected canApprove(amount: number): boolean {
    return amount <= 10000;
  }

  protected approveRequest(amount: number): void {
    console.log(`CEO approved the request for amount: $${amount}`);
  }
}

// 위의 코드에서 Manager, Director, CEO는 결재 체인의 각 단계에서 역할을 수행합니다.
// canApprove 메서드에서 해당 단계에서 결재를 처리할 수 있는지 여부를 판단하고, approveRequest 메서드에서 실제 결재 처리 로직을 구현합니다.

// 이제 사용자는 다음과 같이 결재 요청을 생성하고 체인을 통해 처리할 수 있습니다.

const manager = new Manager();
const director = new Director();
const ceo = new CEO();

manager.setNextApprover(director);
director.setNextApprover(ceo);

manager.processRequest(500); // Manager approved the request for amount: $500
manager.processRequest(2000); // Director approved the request for amount: $2000
manager.processRequest(8000); // CEO approved the request for amount: $8000
manager.processRequest(15000); // No one can approve the request.

// 위의 코드에서는 Manager, Director, CEO 객체를 생성하고, setNextApprover 메서드를 통해 다음 결재자를 설정합니다.
// processRequest 메서드를 호출하여 결재 요청을 처리하면, 체인을 따라 각 단계에서 적절한 결재자가 요청을 처리하게 됩니다.
// 마지막으로, 결재 요청이 모든 단계를 통과하지 못하면 "No one can approve the request." 메시지가 출력됩니다.

export {};
