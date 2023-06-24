// 인터페이스: 생성될 도형 객체가 구현해야 할 메서드를 정의합니다.
interface Shape {
  draw(): void;
}

// 구체적인 도형 클래스들
class Circle implements Shape {
  draw(): void {
    console.log('원을 그립니다.');
  }
}

class Rectangle implements Shape {
  draw(): void {
    console.log('사각형을 그립니다.');
  }
}

class Triangle implements Shape {
  draw(): void {
    console.log('삼각형을 그립니다.');
  }
}

// 팩토리 클래스
class ShapeFactory {
  // 팩토리 메서드: 클라이언트에게 요청된 도형 객체를 생성하여 반환합니다.
  public createShape(type: string): Shape {
    if (type === 'Circle') {
      return new Circle();
    } else if (type === 'Rectangle') {
      return new Rectangle();
    } else if (type === 'Triangle') {
      return new Triangle();
    } else {
      throw new Error('지원되지 않는 도형입니다.');
    }
  }
}

// 클라이언트 코드
const factory = new ShapeFactory();

const circle = factory.createShape('Circle');
circle.draw(); // 원을 그립니다.

const rectangle = factory.createShape('Rectangle');
rectangle.draw(); // 사각형을 그립니다.

const triangle = factory.createShape('Triangle');
triangle.draw(); // 삼각형을 그립니다.

try {
  factory.createShape('Square');
} catch (e: any) {
  console.log(e.message); // 지원되지 않는 도형입니다.
}

export {};
