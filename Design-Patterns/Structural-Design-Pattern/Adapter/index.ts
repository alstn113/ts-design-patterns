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
