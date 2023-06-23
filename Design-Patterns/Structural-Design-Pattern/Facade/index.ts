// 타입스크립트로 Facade 패턴을 설명하기 위해 은행 업무를 처리하는 상황을 가정해보겠습니다.
// 이 은행 시스템은 여러 서브시스템(계좌 관리, 거래 기록, 인증 등)으로 구성되어 있습니다.
// Facade 패턴을 사용하여 은행 업무를 간소화하고 클라이언트에게 단순한 인터페이스를 제공할 수 있습니다.

// 먼저, 은행 서브시스템을 나타내는 클래스들을 작성합니다. 예를 들어, 계좌 관리 서브시스템은 다음과 같이 구현될 수 있습니다
class AccountService {
  createAccount(customerId: string): void {
    console.log(`Account created for customer ${customerId}`);
  }

  getAccountBalance(accountId: string): number {
    console.log(`Fetching account balance for account ${accountId}`);
    return 1000; // 임의의 잔액을 반환
  }
}

// 이와 같은 방식으로 거래 기록 서브시스템, 인증 서브시스템 등의 클래스를 작성합니다.

// 다음으로, Facade 클래스를 작성하여 클라이언트에게 단순한 인터페이스를 제공합니다. 예를 들어, BankFacade 클래스를 작성할 수 있습니다
class BankFacade {
  private accountService: AccountService;
  // 다른 서브시스템들도 동일한 방식으로 추가

  constructor() {
    this.accountService = new AccountService();
    // 다른 서브시스템들도 초기화
  }

  createAccount(customerId: string): void {
    this.accountService.createAccount(customerId);
    // 다른 서브시스템들에 필요한 추가 작업 수행
  }

  getAccountBalance(accountId: string): number {
    return this.accountService.getAccountBalance(accountId);
    // 다른 서브시스템들에 필요한 추가 작업 수행
  }
}

// BankFacade 클래스는 클라이언트에게 단순한 인터페이스를 제공하며, 내부적으로 여러 서브시스템의 기능을 조합하여 작업을 처리합니다.

// 이제 클라이언트는 BankFacade를 사용하여 은행 업무를 처리할 수 있습니다
const bank = new BankFacade();

bank.createAccount('1234567890');
const balance = bank.getAccountBalance('9876543210');

console.log(`Account balance: ${balance}`);

// 클라이언트는 Facade 클래스를 통해 간단하고 직관적인 인터페이스를 사용하여 여러 서브시스템의 복잡한 작업을 처리할 수 있습니다.
// Facade 패턴을 통해 클라이언트는 내부 구조를 알 필요 없이 은행 업무를 처리할 수 있게 됩니다.

// Facade 패턴은 복잡한 시스템을 단순화하고 클라이언트와의 결합도를 낮추는 데에 유용합니다.
