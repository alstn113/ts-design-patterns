// Observer 패턴은 객체들 간의 일대다 종속성을 정의하여, 어떤 객체의 상태 변화가 다른 객체들에게 자동으로 알려지고 반응할 수 있는 디자인 패턴입니다.
// 이를 통해 객체들 간의 느슨한 결합을 유지하면서 상호작용할 수 있습니다.

// 일반적인 상황으로는 주식 시장의 주가 변화를 추적하는 예시를 들어보겠습니다.

// 주식 가격 변동을 추적하는 Observer 인터페이스
interface Observer {
  update(price: number): void;
}

// 실제 주식 시장의 가격 변동을 발행하는 Subject 클래스
class StockMarket {
  private observers: Observer[] = [];
  private price: number = 0;

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  setPrice(price: number): void {
    this.price = price;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.price);
    }
  }
}

// 주식 가격 변동에 대한 구독자로 동작하는 Concrete Observer 클래스
class StockSubscriber implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(price: number): void {
    console.log(
      `[${this.name}] 주식 가격이 업데이트되었습니다. 현재 가격: $${price}`,
    );
  }
}

// 주식 시장 객체 생성
const stockMarket = new StockMarket();

// 구독자 객체 생성
const subscriber1 = new StockSubscriber('구독자 1');
const subscriber2 = new StockSubscriber('구독자 2');
const subscriber3 = new StockSubscriber('구독자 3');

// 주식 시장에 구독자 등록
stockMarket.attach(subscriber1);
stockMarket.attach(subscriber2);
stockMarket.attach(subscriber3);

// 가격 변동 발생
stockMarket.setPrice(100); // 구독자들에게 알림

// 구독자 2 이탈
stockMarket.detach(subscriber2);

// 가격 변동 발생
stockMarket.setPrice(150); // 구독자 1과 구독자 3에게 알림

// 위의 예시에서는 `Observer` 인터페이스를 정의하여 주식 가격 변동을 추적할 구독자 객체들이 구현합니다.
// `StockMarket` 클래스는 주식 시장을 나타내며, `attach` 메서드를 통해 구독자를 등록하고 `detach` 메서드를 통해 구독자를 이탈시킵니다.
// `setPrice` 메서드를 호출하여 가격 변동이 발생하면 등록된 구독자들에게 알립니다.

// 위의 예시에서는 구독자 1, 2, 3이 주식 가격 변동에 대한 업데이트를 받습니다.
// 가격 변동이 발생하면 해당 구독자들에게 알림이 전달되어 업데이트 메시지가 출력됩니다.
// 구독자 2가 이탈한 후에는 가격 변동에 대한 알림이 구독자 1과 구독자 3에게만 전달됩니다.
// 이를 통해 Observer 패턴을 활용하여 주식 시장의 가격 변동을 구독자들이 관찰하고 반응할 수 있습니다.

export {};
