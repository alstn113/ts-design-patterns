# Design Patterns

## Creational Pattern(생성 패턴)

객체의 생성 방식과 객체 생성과정을 추상화하여 객체 생성을 단순화하는 패턴입니다. 주요 목표는 유연성, 재사용성, 코드의 간결성을 향상시키는 것입니다.

- Constructor (생성자 패턴):

  - 객체를 생성하는 데 사용되는 기본적인 패턴입니다.
  - 클래스의 생성자 함수를 활용하여 객체를 초기화하고 필요한 속성을 설정합니다.
  - 객체 생성 시 필요한 매개변수를 전달하고, 초기화 로직을 실행합니다.

- Factory (팩토리 패턴):

  - 객체를 생성하기 위한 인터페이스를 정의하고, 실제 객체의 생성을 서브클래스에 위임하는 패턴입니다.
  - 객체 생성 로직을 캡슐화하여 클라이언트 코드에서 객체 생성과 관련된 세부 사항을 알 필요가 없게 합니다.
  - 객체의 생성 방식을 유연하게 변경하고, 객체 생성을 중앙에서 관리할 수 있습니다.

- Abstract Factory (추상 팩토리 패턴):

  - 서로 연관된 객체들을 생성하기 위한 인터페이스를 정의하고, 구체적인 팩토리 클래스가 이를 구현하는 패턴입니다.
  - 추상 팩토리는 일련의 관련된 객체들을 생성하기 위한 추상 메서드를 제공합니다.
  - 클라이언트 코드는 추상 팩토리를 통해 객체를 생성하고, 구체적인 팩토리 클래스의 변화 없이 객체를 교체할 수 있습니다.

- Prototype (프로토타입 패턴):

  - 객체를 복제하여 생성하는 패턴입니다.
  - 초기 객체를 프로토타입으로 사용하고, 이를 복제하여 새로운 객체를 생성합니다.
  - 객체 생성 비용을 줄이고, 유사한 객체들을 생성하는 데 유용합니다.

- Singleton (싱글톤 패턴):

  - 애플리케이션 전역에서 단 하나의 인스턴스를 생성하는 패턴입니다.
  - 인스턴스를 단일 객체로 공유하고, 중복 생성을 방지합니다.
  - 전역 상태를 관리하거나 리소스 공유에 유용한 패턴입니다.

- Builder (빌더 패턴):
  - 복잡한 객체의 생성 과정을 추상화하여 단계별로 객체를 구성하는 패턴입니다.
  - 객체의 생성과 구성을 분리하여 유연한 객체 생성을 가능하게 합니다.
  - 동일한 생성 과정으로 다양한 종류의 객체를 생성할 수 있습니다.

## Structural Pattern(구조 패턴)

객체 간의 관계를 구성하고, 객체들을 더 큰 구조로 조합하는 패턴입니다. 주로 상속, 인터페이스, 컴포지션 등을 활용하여 시스템의 구조를 설계하고 확장하기 위해 사용됩니다.

- Adapter (어댑터 패턴):

  - 호환되지 않는 인터페이스를 가진 두 개의 클래스를 연결해주는 패턴입니다.
  - 어댑터 클래스를 사용하여 클라이언트가 기존 클래스의 인터페이스를 사용할 수 있도록 변환합니다.
  - 호환성을 제공하며, 기존 클래스의 수정 없이도 새로운 인터페이스를 활용할 수 있습니다.

- Bridge (브릿지 패턴):

  - 추상화와 구현을 분리하여 각각 독립적으로 확장할 수 있는 패턴입니다.
  - 추상화(추상 클래스나 인터페이스)와 구현체(구현 클래스)를 분리하여 결합도를 낮추고 유연성을 높입니다.
  - 추상화와 구현체 사이의 다른 기능들을 조합하여 다양한 결과를 얻을 수 있습니다.

- Composite (컴포지트 패턴):

  - 객체들을 트리 구조로 구성하여 부분과 전체를 나타내는 패턴입니다.
  - 단일 객체와 복합 객체를 동일한 방식으로 다룰 수 있습니다.
  - 객체들 간의 계층 구조를 표현하고, 클라이언트가 개별 객체와 복합 객체를 일관되게 다룰 수 있습니다.

- Decorator (데코레이터 패턴):

  - 기존 객체의 기능을 동적으로 확장하기 위한 패턴입니다.
  - 객체에 추가적인 기능을 런타임에 유연하게 추가할 수 있습니다.
  - 상속을 통해 객체의 기능을 확장하는 것보다 유연하고 확장성이 높습니다.

- Facade (퍼사드 패턴):

  - 복잡한 서브시스템을 단순한 인터페이스로 감싸고 제공하는 패턴입니다.
  - 클라이언트가 서브시스템과의 상호작용을 단순화하여 사용하기 쉽게 합니다.
  - 서브시스템 내부의 복잡한 동작을 감추고, 단일 진입점을 제공합니다.

- Flyweight (플라이웨이트 패턴):

  - 많은 수의 유사한 객체를 효율적으로 공유하여 메모리 사용량을 줄이는 패턴입니다.
  - 객체의 상태를 내부(intrinsic) 상태와 외부(extrinsic) 상태로 분리합니다.
  - 내부 상태는 객체들이 공유하고, 외부 상태는 각 객체마다 가지게 됩니다.

- Proxy (프록시 패턴):

  - 다른 객체를 대신하여 접근을 제어하거나 추가적인 기능을 제공하는 패턴입니다.
  - 실제 객체에 대한 접근을 중간에 대리자 객체(proxy)가 처리합니다.
  - 클라이언트와 실제 객체 사이에 중재자 역할을 하여 보안, 성능 최적화, 지연 로딩 등의 기능을 수행합니다.

## Behavioral Pattern(행동 패턴)

객체 간의 상호작용과 책임 분배를 중심으로 설계하는 패턴입니다. 객체 간의 행동 패턴을 조직화하여 효율적인 소프트웨어 설계를 가능하게 합니다.

- Chain of Responsibility (책임 연쇄 패턴):

  - 객체들이 연결된 체인을 형성하여 요청을 처리하고 전달하는 패턴입니다.
  - 요청을 처리할 수 있는 객체를 찾을 때까지 체인 상의 객체들을 순차적으로 탐색합니다.
  - 객체들 간의 결합도를 낮추고, 요청을 처리하는 객체를 동적으로 변경할 수 있게 합니다.

- Command (명령 패턴):

  - 작업을 요청하는 객체와 작업을 수행하는 객체를 분리하여 요청을 캡슐화하는 패턴입니다.
  - 요청을 객체로 캡슐화하여 실행 취소, 재실행 등의 기능을 제공합니다.
  - 요청을 발생시키는 객체와 요청을 수행하는 객체 사이의 결합도를 낮춥니다.

- Iterator (반복자 패턴):

  - 컬렉션 객체의 요소들에 접근하는 방식을 표준화하는 패턴입니다.
  - 컬렉션 객체의 내부 구조에 상관없이 요소들을 반복적으로 접근할 수 있습니다.
  - 반복 작업을 추상화하여 코드의 일관성과 유연성을 제공합니다.

- Mediator (중재자 패턴):

  - 객체들 사이의 복잡한 상호작용을 캡슐화하는 패턴입니다.
  - 중재자 객체를 통해 객체들이 직접 통신하지 않고 중재자를 통해 상호작용합니다.
  - 객체들 간의 결합도를 낮추고, 객체들의 상호 의존성을 최소화합니다.

- Memento (메멘토 패턴):

  - 객체의 상태를 저장하고 복원하는 메커니즘을 제공하는 패턴입니다.
  - 객체의 상태를 외부로부터 분리하여 저장하고, 필요할 때 이전 상태로 복원할 수 있습니다.
  - 상태의 변경에 따른 객체의 내부 구조에 영향을 주지 않고 복원할 수 있습니다.

- Observer (옵저버 패턴):

  - 객체들 사이에 일대다 의존 관계를 정의하는 패턴입니다.
  - 상태 변화가 발생하면 관련된 모든 객체들에게 자동으로 알림을 보내 업데이트합니다.
  - 객체들 간의 결합도를 낮추고, 유연하고 확장 가능한 시스템을 구성할 수 있습니다.

- State (상태 패턴):

  - 객체의 내부 상태에 따라 동작이 달라지는 패턴입니다.
  - 상태를 객체로 캡슐화하고, 동적으로 상태를 변경할 수 있습니다.

  - 조건문을 통한 분기 처리를 피하고, 객체의 상태에 따른 동작을 캡슐화합니다.

- Strategy (전략 패턴):

  - 알고리즘을 정의하고, 이를 사용하는 객체들 사이의 관계를 정의하는 패턴입니다.
  - 동일한 문제를 해결하기 위한 다양한 알고리즘을 정의하고, 필요에 따라 동적으로 교체할 수 있습니다.
  - 객체들 간의 결합도를 낮추고, 알고리즘의 독립성과 재사용성을 높입니다.

- Template Method (템플릿 메서드 패턴):

  - 알고리즘의 구조를 정의하고, 일부 단계를 서브클래스에서 재정의할 수 있는 패턴입니다.
  - 알고리즘의 공통 부분은 슈퍼클래스에서 정의하고, 일부 단계는 서브클래스에서 구현합니다.
  - 알고리즘의 구조를 고정시키면서 확장 가능한 유연한 설계를 가능하게 합니다.

- Visitor (방문자 패턴):
  - 객체 구조를 변경하지 않고, 객체의 연산을 수행하는 패턴입니다.
  - 연산을 수행하는 객체(방문자)를 정의하고, 객체 구조의 각 요소들을 방문하여 연산을 수행합니다.
  - 객체 구조와 연산을 분리하여 확장성과 유연성을 제공합니다.
