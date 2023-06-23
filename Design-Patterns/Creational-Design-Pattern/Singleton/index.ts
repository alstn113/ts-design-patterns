// 로깅 시스템, 데이터베이스 연결, 애플리케이션 설정 등에 사용됨.

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
