// Memento 패턴은 객체의 상태를 캡슐화하여 나중에 해당 상태로 복원할 수 있는 디자인 패턴입니다.
// 이를 통해 객체의 상태를 관리하고, 복원 및 되돌리기 기능을 제공할 수 있습니다. 일반적인 상황으로는 텍스트 편집기의 Undo/Redo 기능을 예시로 설명해보겠습니다.

// 우선, Memento 클래스를 작성합니다.

class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

// Memento 클래스는 객체의 상태를 저장하는 역할을 합니다. 생성자를 통해 상태를 전달받고, getState 메서드를 통해 상태를 반환합니다.

// 다음으로, Originator 클래스를 작성합니다.

class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  setState(state: string): void {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }

  saveStateToMemento(): Memento {
    return new Memento(this.state);
  }

  restoreStateFromMemento(memento: Memento): void {
    this.state = memento.getState();
  }
}

// Originator 클래스는 상태를 가지고 있으며, setState와 getState 메서드를 통해 상태를 설정하고 반환합니다.
// saveStateToMemento 메서드는 현재 상태를 Memento 객체로 저장하고, restoreStateFromMemento 메서드는 Memento 객체로부터 상태를 복원합니다.

// 마지막으로, Caretaker 클래스를 작성합니다.

class Caretaker {
  private mementos: Memento[] = [];

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

// Caretaker 클래스는 Memento 객체들을 관리합니다. addMemento 메서드를 통해 Memento 객체를 추가하고, getMemento 메서드를 통해 특정 인덱스의 Memento 객체를 반환합니다.

// 실제로는 Originator와 Caretaker 객체를 생성하고, 텍스트 편집기의 상태를 저장하고 복원하는 예시를 확인해봅시다.

const originator = new Originator('This is the initial state.');
const caretaker = new Caretaker();

caretaker.addMemento(originator.saveStateToMemento());

originator.setState('This is the updated state.');
caretaker.addMemento(originator.saveStateToMemento());

originator.setState('This is the latest state.');
caretaker.addMemento(originator.saveStateToMemento());

const initialState = caretaker.getMemento(0);
originator.restoreStateFromMemento(initialState);
console.log(originator.getState()); // Output: This is the initial state.

const latestState = caretaker.getMemento(2);
originator.restoreStateFromMemento(latestState);
console.log(originator.getState()); // Output: This is the latest state.

// 위의 코드에서는 Originator 객체를 생성하고 초기 상태를 설정한 후,

// saveStateToMemento 메서드를 통해 상태를 Memento 객체로 저장합니다. 그 후, 상태를 변경하고 다시 Memento 객체로 저장합니다.
// 마지막으로, Caretaker 객체를 통해 특정 인덱스의 Memento 객체를 가져와서 Originator의 상태를 복원합니다. 결과적으로 초기 상태와 최신 상태가 출력됩니다.

// Memento 패턴을 사용하면 객체의 상태를 캡슐화하고 복원할 수 있으므로, Undo/Redo 기능과 같은 상태 관리 기능을 구현할 수 있습니다.

export {};
