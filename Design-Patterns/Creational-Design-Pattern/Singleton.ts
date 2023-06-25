// Singleton 패턴은 오직 하나의 인스턴스만을 생성하고, 이후에는 해당 인스턴스를 재사용하는 패턴입니다.
// 이를 통해 전역적인 접근이 필요한 객체를 효율적으로 관리할 수 있습니다. 타입스크립트로 Singleton 패턴을 구현하는 일반적인 상황을 설명해보겠습니다.

class AppConfig {
  private static instance: AppConfig;
  private settings: { [key: string]: string };

  // 생성자를 private으로 선언하여 외부에서 인스턴스를 생성하지 못하도록 한다.
  private constructor() {
    // 설정 정보 초기화 및 로드
    this.settings = {
      apiUrl: 'https://api.example.com',
      apiKey: 'YOUR_API_KEY',
    };
  }

  // 정적 메소드를 통해 유일한 인스턴스를 반환한다.
  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  public getSetting(key: string): string | undefined {
    // 설정 정보 반환
    return this.settings[key];
  }
}

const appConfig: AppConfig = AppConfig.getInstance();
console.log(appConfig.getSetting('apiUrl')); // 출력: https://api.example.com

// 위의 코드에서 Singleton 클래스는 private 생성자를 가지고 있으며, static 메서드인 getInstance를 통해 인스턴스를 반환합니다.
// getInstance 메서드는 이미 인스턴스가 생성된 경우에는 기존 인스턴스를 반환하고, 생성되지 않은 경우에는 새로운 인스턴스를 생성하여 반환합니다.

// 사용자는 getInstance 메서드를 통해 Singleton 인스턴스에 접근하며, 동일한 인스턴스가 반환되는 것을 확인할 수 있습니다.
// 이를 통해 어느 곳에서든 동일한 인스턴스에 접근할 수 있고, 전역적인 상태나 동작을 효과적으로 관리할 수 있습니다.

export {};
