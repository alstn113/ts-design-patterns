// Iterator 패턴은 컬렉션 내의 요소를 순회하고 접근하는 방법을 추상화하는 디자인 패턴입니다.
// 이를 통해 컬렉션의 내부 구조를 노출하지 않고도 요소에 접근할 수 있으며, 다양한 순회 알고리즘을 구현할 수 있습니다.
// 일반적인 상황으로는 배열(Array)을 사용하는 경우를 예시로 설명해보겠습니다.

// 우선, Iterator 인터페이스를 정의합니다.

interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Iterator 인터페이스에는 hasNext 메서드와 next 메서드가 포함되어 있습니다.
// hasNext 메서드는 다음 요소의 존재 여부를 확인하고, next 메서드는 다음 요소를 반환합니다.

// 다음으로, 순회할 컬렉션을 나타내는 Collection 클래스를 작성합니다.

class Collection<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  createIterator(): ArrayIterator<T> {
    return new ArrayIterator<T>(this.items);
  }
}

// Collection 클래스는 items라는 배열을 가지고 있으며, createIterator 메서드를 통해 Iterator 객체를 생성하여 반환합니다.

// 이제 Iterator 객체를 구현하는 ArrayIterator 클래스를 작성합니다.

class ArrayIterator<T> implements Iterator<T> {
  private items: T[];
  private currentIndex: number;

  constructor(items: T[]) {
    this.items = items;
    this.currentIndex = 0;
  }

  hasNext(): boolean {
    return this.currentIndex < this.items.length;
  }

  next(): T {
    const currentItem = this.items[this.currentIndex];
    this.currentIndex++;
    return currentItem;
  }
}

// ArrayIterator 클래스는 Iterator 인터페이스를 구현하며, items 배열과 currentIndex를 가지고 있습니다.
// hasNext 메서드는 currentIndex가 items 배열의 길이보다 작은지를 확인하여 다음 요소의 존재 여부를 반환하고,
// next 메서드는 현재 요소를 반환한 후 currentIndex를 증가시킵니다.

// 이제 코드를 실행하여 배열의 요소를 순회하고 접근하는 예시를 확인해봅시다.

const collection = new Collection<number>([1, 2, 3, 4, 5]);
const iterator = collection.createIterator();

while (iterator.hasNext()) {
  const item = iterator.next();
  console.log(item);
}

// 위의 코드에서는 Collection 클래스를 생성하고, createIterator 메서드를 통해 Iterator 객체를 생성합니다.
// 그 후 while 루프를 사용하여 hasNext 메서드로 다음 요소의 존재 여부를 확인하고, next 메서드로 다음 요소에 접근하여 출력합니다.
// 결과적으로 1부터 5까지의 숫자가 각각 한 줄씩 출력됩니다.

// Iterator 패턴을 사용하면 컬렉션의 내부 구조를 노출하지 않고도 요소에 접근할 수 있으며, 다양한 순회 알고리즘을 구현할 수 있습니다.

export {};
