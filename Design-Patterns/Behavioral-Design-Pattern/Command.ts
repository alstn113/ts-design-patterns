// Command 패턴은 요청을 객체로 캡슐화하여 실행할 작업을 매개변수화하는 디자인 패턴입니다.
// 이를 통해 요청을 서로 다른 객체에 대해 매개변수화하고, 요청을 대기시키거나 로깅, 취소, 되돌리기 등의 작업을 지원할 수 있습니다.
// 일반적인 예시로는 리모컨을 제어하는 프로그램을 구현해보겠습니다.

// 먼저, Command 인터페이스를 정의합니다.

interface Command {
  execute(): void;
}

// Command 인터페이스는 execute 메서드를 포함하고 있습니다.
// 모든 커맨드 클래스는 이 인터페이스를 구현하여 자신의 실행 로직을 구현합니다.

// 다음으로, 리모컨을 제어하는 Invoker 클래스를 작성합니다.
class RemoteControl {
  private commands: Command[] = [];

  setCommand(command: Command): void {
    this.commands.push(command);
  }

  executeCommands(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }
}

// RemoteControl 클래스는 커맨드 객체들을 저장하고, 실행할 커맨드들을 순차적으로 실행하는 기능을 제공합니다.

// 다음으로, 실제 기능을 수행하는 Receiver 클래스를 작성합니다.

class Light {
  turnOn(): void {
    console.log('Light turned on.');
  }

  turnOff(): void {
    console.log('Light turned off.');
  }
}

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

// Light 클래스는 실제 기능을 수행하는 객체입니다.
// LightOnCommand와 LightOffCommand는 Command 인터페이스를 구현하여 Light 객체의 특정 메서드를 호출합니다.

// 마지막으로, 코드를 실행하여 리모컨을 사용해 라이트를 제어하는 예시를 확인해봅시다.

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();
remoteControl.setCommand(lightOnCommand);
remoteControl.setCommand(lightOffCommand);

remoteControl.executeCommands();

// 위의 코드는 LightOnCommand와 LightOffCommand를 생성하고, 이를 RemoteControl 객체에 등록하여 executeCommands 메서드를 실행합니다.
// 결과적으로 Light 객체의 turnOn과 turnOff 메서드가 호출되어 "Light turned on."과 "Light turned off." 메시지가 출력됩니다.

// Command 패턴을 사용하면 실행될 작업을 캡슐화하고, 실행 순서와 로깅, 되돌리기 등의 추가 기능을 구현할 수 있습니다.
// 이는 복잡한 작업 흐름을 관리하고 유연한 실행 제어를 가능하게 해줍니다.

export {};
