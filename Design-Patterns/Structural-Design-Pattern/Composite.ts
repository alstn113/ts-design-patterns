// Composite 패턴은 객체들을 트리 구조로 구성하여 단일 객체와 복합 객체를 동일한 방식으로 다룰 수 있게 해주는 디자인 패턴입니다.
// 이를 통해 개별 객체와 그들의 조합인 복합 객체를 일관된 방식으로 다룰 수 있습니다.

// 일반적인 상황을 예시로 설명해보겠습니다. 가정해보세요 우리는 그래픽 에디터 프로그램을 개발하고 있습니다.
// 그래픽 에디터에서는 다양한 도형(원, 사각형, 선 등)을 그릴 수 있습니다. 각 도형은 개별적인 객체로 취급되지만, 이들을 그룹으로 묶어서 동시에 조작할 수도 있어야 합니다.
// 이 때 Composite 패턴을 활용하여 구현할 수 있습니다.

// 먼저 추상 클래스인 Graphic을 정의합니다. Graphic 클래스는 도형 객체와 복합 객체의 공통 인터페이스 역할을 합니다.

abstract class Graphic {
  abstract draw(): void;
}

class Circle extends Graphic {
  draw(): void {
    console.log('Drawing a circle');
  }
}

class Rectangle extends Graphic {
  draw(): void {
    console.log('Drawing a rectangle');
  }
}

class Line extends Graphic {
  draw(): void {
    console.log('Drawing a line');
  }
}

class CompositeGraphic extends Graphic {
  private children: Graphic[] = [];

  add(graphic: Graphic): void {
    this.children.push(graphic);
  }

  remove(graphic: Graphic): void {
    const index = this.children.indexOf(graphic);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  draw(): void {
    console.log('Drawing a composite graphic');
    this.children.forEach((graphic) => graphic.draw());
  }
}

// 위 코드에서 Graphic은 추상 클래스로 도형 객체와 복합 객체의 공통 인터페이스를 제공합니다.
// Circle, Rectangle, Line은 도형 객체를 나타내며, draw 메서드를 구현하여 각 도형을 그리는 동작을 수행합니다.
// CompositeGraphic은 복합 객체를 나타내며, 내부에 Graphic 객체들을 저장하고 그려주는 기능을 제공합니다.

// 이제 코드를 실행하여 도형 객체와 복합 객체를 조작하는 예시를 확인해봅시다.

const circle = new Circle();
const rectangle = new Rectangle();
const line = new Line();

const compositeGraphic = new CompositeGraphic();
compositeGraphic.add(circle);
compositeGraphic.add(rectangle);
compositeGraphic.add(line);

compositeGraphic.draw();
// [출력]
// Drawing a composite graphic
// Drawing a circle
// Drawing a rectangle
// Drawing a line

// 위의 예시에서는 Circle, Rectangle, Line을 개별적인 객체로 생성하고 CompositeGraphic에 추가합니다.
// CompositeGraphic은 복합 객체로써 내부에 포함된 Graphic 객체들을 그리는 동작을 수행합니다.
// 결과적으로 CompositeGraphic을 그리면 내부에 포함된 도형 객체들이 모두 그려지게 됩니다.

// Composite 패턴을 사용하면 개별 객체와 복합 객체를 일관된 방식으로 다룰 수 있으며, 객체들을 트리 구조로 구성하여 계층적인 관계를 표현할 수 있습니다.
// 이를 통해 복잡한 구조를 가진 객체들을 구성하고 조작할 수 있습니다.

export {};
