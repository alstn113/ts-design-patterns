// Mediator 패턴은 객체 간의 상호작용을 캡슐화하고 조정하는 디자인 패턴입니다.
// 이를 통해 객체 간의 직접적인 의존성을 줄이고, 느슨한 결합을 유지할 수 있습니다.
// 일반적인 상황으로는 채팅 애플리케이션을 예시로 설명해보겠습니다.

// 우선, Mediator 인터페이스를 정의합니다.

interface Mediator {
  sendMessage(sender: Colleague, message: string): void;
}

// Mediator 인터페이스에는 sendMessage 메서드가 포함되어 있습니다.
// 이 메서드는 특정 Colleague가 메시지를 보낼 때 호출되며, 다른 Colleague에게 메시지를 전달하는 역할을 합니다.

// 다음으로, Colleague 클래스를 작성합니다.

class Colleague {
  protected mediator: Mediator;
  protected name: string;

  constructor(mediator: Mediator, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  send(message: string): void {
    this.mediator.sendMessage(this, message);
  }

  receive(message: string): void {
    console.log(`${this.name} received: ${message}`);
  }
}

// Colleague 클래스는 Mediator와 상호작용하는 객체를 나타냅니다.
// 각 Colleague는 mediator와 자신의 이름을 가지고 있으며, send 메서드를 통해 메시지를 보내고 receive 메서드를 통해 메시지를 수신합니다.
// send 메서드에서는 mediator의 sendMessage 메서드를 호출하여 메시지를 전달합니다.

// 마지막으로, Mediator를 구현하는 ChatRoom 클래스를 작성합니다.

class ChatRoom implements Mediator {
  private colleagues: Colleague[] = [];

  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  sendMessage(sender: Colleague, message: string): void {
    for (const colleague of this.colleagues) {
      if (colleague !== sender) {
        colleague.receive(message);
      }
    }
  }
}

// ChatRoom 클래스는 Mediator를 구현하며, colleagues 배열을 가지고 있습니다.
// addColleague 메서드를 통해 Colleague 객체를 등록하고, sendMessage 메서드에서는 등록된 모든 Colleague에게 메시지를 전달합니다.

// 실제로는 ChatRoom과 Colleague 객체를 생성하고, Colleague들을 ChatRoom에 등록하여 사용합니다.

const chatRoom = new ChatRoom();

const john = new Colleague(chatRoom, 'John');
const alice = new Colleague(chatRoom, 'Alice');
const bob = new Colleague(chatRoom, 'Bob');

chatRoom.addColleague(john);
chatRoom.addColleague(alice);
chatRoom.addColleague(bob);

john.send('Hello, everyone!');
alice.send('Nice to meet you!');
bob.send("Hey, how's it going?");

// 위의 코드에서는 ChatRoom과 Colleague 객체를 생성하고, Colleague들을 ChatRoom에 등록한 후 메시지를 전달합니다. 각 Col

// league는 send 메서드를 통해 메시지를 보내며, ChatRoom은 메시지를 수신한 Colleague에게 메시지를 전달합니다. 결과적으로 각 Colleague가 메시지를 수신하여 출력됩니다.

// 이 예시를 통해 Mediator 패턴을 활용하여 객체 간의 상호작용을 중재하고 캡슐화할 수 있다는 것을 알 수 있습니다. Mediator 패턴은 객체 간의 결합도를 낮추고 유연성과 확장성을 향상시키는 데 유용한 패턴입니다.

export {};
