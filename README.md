# Design Patterns

## Creational Design Pattern

For handling Object creation mechanisms

- Constructor(생성자 패턴):
  Constructor(생성자) 패턴은 객체를 생성할 때 생성자 함수를 사용하는 가장 기본적인 방법입니다. 일반적으로 new 키워드를 사용하여 클래스의 인스턴스를 생성합니다.
- Factory(팩토리 패턴):
  Factory(팩토리) 패턴은 객체 생성을 처리하는 별도의 팩토리 클래스를 사용하여 객체 생성 로직을 캡슐화하는 방식입니다. 이를 통해 객체 생성 과정을 추상화하고, 클라이언트는 팩토리를 통해 객체를 생성할 수 있습니다
- Abstract Factory(추상 팩토리 패턴):
  Abstract Factory(추상 팩토리) 패턴은 관련된 객체들의 집합을 생성하는 추상화된 인터페이스를 제공합니다. 이를 통해 클라이언트는 구체적인 클래스에 의존하지 않고 객체를 생성할 수 있습니다. 추상 팩토리 패턴은 관련된 객체들의 일관된 생성을 보장하고, 객체 간의 조합을 쉽게 변경할 수 있게 해줍니다.
- Prototype(프로토타입 패턴):
  Prototype(프로토타입) 패턴은 객체를 복제하는 방식으로 객체의 생성을 처리합니다. 기존의 객체를 복제하여 새로운 객체를 생성하는 방식으로, 객체의 생성 비용을 줄이고 유연한 객체 생성을 가능하게 합니다.
- Singleton(싱글톤 패턴):
  Singleton(싱글톤) 패턴은 애플리케이션에서 특정 클래스의 인스턴스가 단 하나만 생성되고, 어디서든지 이 인스턴스에 접근할 수 있도록 하는 패턴입니다. 이를 통해 전역 상태를 관리하거나 공통 리소스에 대한 중복 생성을 방지할 수 있습니다.
- Builder
  Builder 패턴은 복잡한 객체의 생성 과정을 단계적으로 처리하는 방식입니다. 객체 생성을 위한 여러 단계를 거쳐 최종적으로 객체를 생성하게 되며, 이를 통해 객체 생성의 유연성과 가독성을 향상시킬 수 있습니다. Builder 패턴은 객체의 생성 과정을 캡슐화하여 복잡성을 해소하고, 다양한 종류의 객체를 생성할 수 있는 유연성을 제공합니다.

## Structural Design Pattern

For identifying ways to realize relationships between entities

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

## Behavioral Design Pattern

For handing communication between different objects

- Chain of Responsibility
- Command
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor
