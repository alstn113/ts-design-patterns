// 타입스크립트로 데코레이터 패턴을 구현하는 일반적인 예시로는 메시지 전송 기능을 가진 채팅 애플리케이션을 들 수 있습니다.
// 데코레이터 패턴을 사용하여 메시지 전송에 추가적인 기능을 동적으로 추가할 수 있습니다.

interface MessageSender {
  sendMessage(message: string): void;
}

class DefaultMessageSender implements MessageSender {
  sendMessage(message: string): void {
    console.log(`Sending message: ${message}`);
  }
}

class EmojiDecorator implements MessageSender {
  constructor(private messageSender: MessageSender) {}

  sendMessage(message: string): void {
    const decoratedMessage = `${message} 😃`;
    this.messageSender.sendMessage(decoratedMessage);
  }
}

class EncryptionDecorator implements MessageSender {
  constructor(private messageSender: MessageSender) {}

  sendMessage(message: string): void {
    const encryptedMessage = this.encryptMessage(message);
    this.messageSender.sendMessage(encryptedMessage);
  }

  private encryptMessage(message: string): string {
    // 메시지를 암호화하는 로직 작성
    return `Encrypted: ${message}`;
  }
}

// 기본 메시지 전송 기능
const messageSender: MessageSender = new DefaultMessageSender();

// 이모티콘을 추가하는 데코레이터 적용
const emojiDecorator: MessageSender = new EmojiDecorator(messageSender);

// 암호화를 적용하는 데코레이터 적용
const encryptionDecorator: MessageSender = new EncryptionDecorator(
  messageSender,
);

// 기본 메시지 전송
messageSender.sendMessage('Hello, world!');
// [출력] Sending message: Hello, world!

// 이모티콘 추가된 메시지 전송
emojiDecorator.sendMessage('Hello, world!');
// [출력] Sending message: Hello, world! 😃

// 암호화된 메시지 전송
encryptionDecorator.sendMessage('Hello, world!');
// [출력] Sending message: Encrypted: Hello, world!
