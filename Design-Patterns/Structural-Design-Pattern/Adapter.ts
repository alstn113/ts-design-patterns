// Adapter 패턴은 서로 호환되지 않는 두 개의 인터페이스 또는 클래스를 연결해주는 디자인 패턴입니다.
// 즉, 어떤 객체가 제공하는 인터페이스를 다른 인터페이스로 변환하여 다른 객체들이 해당 인터페이스를 사용할 수 있게 합니다.

// LegacyApi 클래스
class LegacyApi {
  requestLegacyData(): string {
    return 'Legacy data';
  }
}

// NewApi 인터페이스
interface NewApi {
  requestNewData(): string;
}

// LegacyApi를 NewApi에 맞게 변환하는 어댑터 클래스
class LegacyApiAdapter implements NewApi {
  private legacyApi: LegacyApi;

  constructor(legacyApi: LegacyApi) {
    this.legacyApi = legacyApi;
  }

  requestNewData(): string {
    // LegacyApi의 메서드를 호출하여 데이터를 받아와서 새로운 형식으로 변환
    const legacyData = this.legacyApi.requestLegacyData();
    const newData = `New data: ${legacyData}`;

    return newData;
  }
}

// 클라이언트 코드
const legacyApi = new LegacyApi();
const adapter = new LegacyApiAdapter(legacyApi);

const newData = adapter.requestNewData();
console.log(newData); // 출력: New data: Legacy data

// Adapter 패턴을 사용하면 기존 코드를 수정하지 않고도 다른 인터페이스를 지원하는 객체들을 연결할 수 있습니다. 이는 코드의 유연성과 재사용성을 높이는데 도움이 됩니다.
