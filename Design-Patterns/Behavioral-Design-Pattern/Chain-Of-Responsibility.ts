// Chain of Responsibility (책임 연쇄) 패턴은 요청을 처리하는 객체들의 연결된 체인을 구성하여 각 객체가 순서대로 요청을 처리하도록 하는 패턴입니다.
// 이를 일반적인 상황으로 설명하기 위해 로깅 시스템을 가정해보겠습니다.

// 먼저, 로깅 수준(Level)을 정의하는 열거형을 작성합니다.
enum LogLevel {
  INFO,
  DEBUG,
  WARNING,
  ERROR,
}

// 다음으로, 로깅 핸들러(Handler)를 나타내는 추상 클래스를 작성합니다.
abstract class Logger {
  protected next: Logger | null;

  constructor(next: Logger | null = null) {
    this.next = next;
  }

  setNext(logger: Logger): void {
    this.next = logger;
  }

  log(level: LogLevel, message: string): void {
    if (this.shouldHandle(level)) {
      this.writeLog(message);
    }

    if (this.next) {
      this.next.log(level, message);
    }
  }

  abstract shouldHandle(level: LogLevel): boolean;

  abstract writeLog(message: string): void;
}

// Logger 추상 클래스는 다음 로깅 핸들러를 가리키는 next 속성과 로깅을 수행하는 log 메서드를 가지고 있습니다.
// log 메서드는 현재 핸들러에서 로깅을 수행할지 확인한 후, 다음 핸들러로 요청을 전달합니다.
// shouldHandle 메서드는 현재 핸들러가 주어진 로깅 수준을 처리할 수 있는지 여부를 확인합니다.
// writeLog 메서드는 실제 로깅을 수행하는 구체적인 동작을 구현합니다.

// 이제, 실제 로깅 핸들러들을 작성합니다.

class ConsoleLogger extends Logger {
  shouldHandle(level: LogLevel): boolean {
    return level === LogLevel.INFO || level === LogLevel.DEBUG;
  }

  writeLog(message: string): void {
    console.log(`[Console] ${message}`);
  }
}

class FileLogger extends Logger {
  shouldHandle(level: LogLevel): boolean {
    return level === LogLevel.WARNING || level === LogLevel.ERROR;
  }

  writeLog(message: string): void {
    console.log(`[File] ${message}`);
  }
}

class EmailLogger extends Logger {
  shouldHandle(level: LogLevel): boolean {
    return level === LogLevel.ERROR;
  }

  writeLog(message: string): void {
    console.log(`[Email] ${message}`);
  }
}

// 각 로깅 핸들러 클래스는 shouldHandle 메서드를 구현하여 처리할 수 있는 로깅 수준을 확인하고, writeLog 메서드를 구현하여 실제 로깅을 수행합니다.
// 마지막으로, 로깅 체인을 구성하고 요청을 보내는 코드를 작성합니다.

const loggerChain = new ConsoleLogger();
const fileLogger = new FileLogger();
const emailLogger = new EmailLogger();

loggerChain.setNext(fileLogger);
fileLogger.setNext(emailLogger);

loggerChain.log(LogLevel.INFO, 'This is an informational message.');
loggerChain.log(LogLevel.WARNING, 'This is a warning message.');
loggerChain.log(LogLevel.ERROR, 'This is an error message.');

// 위의 코드에서는 loggerChain을 생성한 후, 각 로깅 핸들러를 연결합니다.
// log 메서드를 호출하여 각 로깅 수준과 메시지를 전달합니다.
// 요청은 체인을 따라 각 핸들러에서 처리되며, 적절한 로깅 핸들러가 로그를 기록합니다.

// Chain of Responsibility 패턴을 사용하면 요청을 처리할 객체들의 체인을 구성하여 유연하게 처리 로직을 변경하거나 추가할 수 있습니다.
// 로깅 시스템 외에도 사용자 인증, 예외 처리 등 다양한 상황에서 유용하게 적용할 수 있습니다.
