// Visitor Pattern은 객체 구조를 변경하지 않고, 새로운 동작(기능)을 추가할 수 있는 디자인 패턴입니다.
// 이 패턴은 객체 구조와 객체의 동작을 분리시키는데 주로 사용됩니다. 객체 구조는 변하지 않으면서 다양한 동작(Visitor)을 수행할 수 있게 합니다.

// 일반적인 Visitor Pattern의 상황은 다음과 같습니다

// 1. 객체 구조는 안정적이지만, 동작(기능)은 변경되거나 추가되어야 하는 경우:
// 객체 구조의 변경 없이 새로운 동작을 객체에 추가하고 싶을 때 Visitor Pattern을 사용할 수 있습니다.
// 예를 들어, 그래픽 에디터에서 다양한 도형(원, 사각형, 삼각형 등)이 있을 때, 도형들에 대한
// 새로운 동작(예: 면적 계산, 둘레 계산)을 추가하고 싶을 때 Visitor Pattern을 사용할 수 있습니다.

// 2. 동작(Visitor)은 객체 구조의 다양한 타입에 대해 일관된 방식으로 수행되어야 하는 경우:
// 객체 구조에 포함된 여러 타입의 객체에 대해 일관된 방식으로 동작을 수행해야 할 때 Visitor Pattern을 사용할 수 있습니다.
// 예를 들어, 웹 애플리케이션에서 DOM 트리 구조를 순회하면서 각 노드에 대해 특정 동작(예: 스타일 변경, 데이터 업데이트)을 수행해야 할 때 Visitor Pattern을 사용할 수 있습니다.

// 아래는 타입스크립트로 작성된 간단한 Visitor Pattern의 예시 코드입니다. 도형과 면적 계산기를 나타내는 상황을 가정합니다.

// Visitor 인터페이스
interface ShapeVisitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
  visitTriangle(triangle: Triangle): void;
}

// Element 추상 클래스
abstract class Shape {
  abstract accept(visitor: ShapeVisitor): void;
}

// 구체적인 Element 클래스들
class Circle extends Shape {
  public radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}

class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  accept(visitor: ShapeVisitor): void {
    visitor.visitRectangle(this);
  }
}

class Triangle extends Shape {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    super();
    this.base = base;
    this.height = height;
  }
  accept(visitor: ShapeVisitor): void {
    visitor.visitTriangle(this);
  }
}

// Visitor 구현 클래스
class AreaCalculator implements ShapeVisitor {
  visitCircle(circle: Circle): void {
    const radius = circle.radius;
    const area = Math.PI * radius * radius;
    console.log(`Area of circle with radius ${radius}: ${area.toFixed(2)}`);
  }

  visitRectangle(rectangle: Rectangle): void {
    const width = rectangle.width;
    const height = rectangle.height;
    const area = width * height;
    console.log(
      `Area of rectangle with width ${width} and height ${height}: ${area.toFixed(
        2,
      )}`,
    );
  }

  visitTriangle(triangle: Triangle): void {
    const base = triangle.base;
    const height = triangle.height;
    const area = (base * height) / 2;
    console.log(
      `Area of triangle with base ${base} and height ${height}: ${area.toFixed(
        2,
      )}`,
    );
  }
}

// 클라이언트 코드
const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 7),
];

const areaCalculator = new AreaCalculator();
shapes.forEach((shape) => shape.accept(areaCalculator));

// 위 코드에서 `Shape` 클래스는 Element 역할을 하며, 각 도형을 나타내는 `Circle`, `Rectangle`, `Triangle` 클래스가 이를 상속합니다.
// `ShapeVisitor` 인터페이스는 Visitor 역할을 하며, `visitCircle`, `visitRectangle`, `visitTriangle` 메서드를 정의합니다.
// `AreaCalculator` 클래스는 `ShapeVisitor`를 구현한 구체적인 Visitor 역할을 합니다.

// 클라이언트는 도형의 배열을 가지고 있으며, `forEach`를 사용하여 각 도형의 `accept` 메서드를 호출하여 Visitor를 전달합니다.
// 도형 객체는 자신의 타입에 맞는 `visit` 메서드를 호출하여 Visitor와 상호작용합니다. Visitor는 각 도형의 특정 동작(면적 계산)을 수행하고 결과를 출력합니다.

export {};
