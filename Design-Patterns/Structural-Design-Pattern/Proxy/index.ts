// Proxy 패턴은 객체의 대리자 역할을 수행하여 객체에 대한 접근을 제어하고 추가적인 기능을 제공하는 패턴입니다.
// 웹 서비스에서 API 요청을 처리하는 Proxy를 사용하는 상황을 생각해볼 수 있습니다.

interface API {
  fetchData(): void;
}

class RealAPI implements API {
  fetchData(): void {
    console.log('Fetching data from the API...');
    // 실제 API 요청 로직
  }
}

class APIProxy implements API {
  private realAPI: RealAPI;

  constructor() {
    this.realAPI = new RealAPI();
  }

  fetchData(): void {
    if (this.hasAccess()) {
      this.realAPI.fetchData();
    } else {
      console.log('Unauthorized access. Please provide valid credentials.');
    }
  }

  private hasAccess(): boolean {
    // 인증 및 접근 제어 로직을 구현
    return true; // 임시로 항상 인증된 것으로 가정
  }
}

// 위의 코드에서는 API 인터페이스를 정의하고, RealAPI 클래스가 실제 API 요청을 처리하는 구현을 제공합니다.
// APIProxy 클래스는 RealAPI를 대리하여 API 요청에 대한 접근을 제어하고, 인증 상태를 확인한 후 실제 API를 호출합니다.
// 인증되지 않은 경우 접근이 거부되었다는 메시지를 출력합니다.

// 이러한 Proxy를 사용하면 클라이언트는 APIProxy를 통해 API 요청을 보내고 추가적인 접근 제어나 인증 로직을 신경쓰지 않고도 API를 사용할 수 있습니다.

const api = new APIProxy();

api.fetchData();

// 위의 코드에서는 APIProxy를 사용하여 API 요청을 보냅니다.
// APIProxy 내부에서는 인증 상태를 확인하고 실제 API를 호출합니다.
// 클라이언트는 대리자(APIProxy)를 통해 API를 사용하고 추가적인 접근 제어나 인증 로직을 신경쓰지 않고도 API를 사용할 수 있습니다.

// Proxy 패턴은 접근 제어, 인증, 캐싱, 로깅 등 다양한 기능을 추가할 수 있는 유연한 구조를 제공합니다.
