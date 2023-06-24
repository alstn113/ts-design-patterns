// 타입스크립트로 브릿지 패턴을 구현하는 일반적인 예시로는 웹 애플리케이션에서 다양한 플랫폼에 대한 알림을 처리하는 경우를 들 수 있습니다.
// 예를 들어, 이메일, SMS, 푸시 알림 등 다양한 알림 유형이 있을 때 각 유형에 대한 알림을 특정 플랫폼에 맞게 전송해야 하는 상황입니다.
// 이 경우 브릿지 패턴을 사용하여 유형과 플랫폼을 분리하고 유형과 플랫폼을 연결하는 중간 계층을 만들 수 있습니다.

interface INotification {
  send(message: string): void;
}

interface NotificationPlatform {
  sendNotification(message: string): void;
}

class EmailNotificationPlatform implements NotificationPlatform {
  sendNotification(message: string): void {
    // 이메일 알림을 전송하는 로직 작성
  }
}

class SMSNotificationPlatform implements NotificationPlatform {
  sendNotification(message: string): void {
    // SMS 알림을 전송하는 로직 작성
  }
}

class PushNotificationPlatform implements NotificationPlatform {
  sendNotification(message: string): void {
    // 푸시 알림을 전송하는 로직 작성
  }
}

class NotificationBridge implements INotification {
  constructor(private platform: NotificationPlatform) {}

  send(message: string): void {
    this.platform.sendNotification(message);
  }
}

const emailNotification = new NotificationBridge(
  new EmailNotificationPlatform(),
);
emailNotification.send('Hello, email notification!');

const smsNotification = new NotificationBridge(new SMSNotificationPlatform());
smsNotification.send('Hello, SMS notification!');

const pushNotification = new NotificationBridge(new PushNotificationPlatform());
pushNotification.send('Hello, push notification!');
