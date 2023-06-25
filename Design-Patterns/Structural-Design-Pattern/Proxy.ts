// Proxy 패턴은 객체에 대한 접근을 제어하거나 객체에 대한 추가적인 기능을 제공하기 위해 대리자 역할을 하는 객체를 사용하는 디자인 패턴입니다.
// 원본 객체에 대한 접근을 간접적으로 하여 원본 객체의 동작을 컨트롤하고 확장할 수 있습니다.

// 일반적인 상황으로 예시를 들어보겠습니다. 가정해보세요 우리는 웹 페이지에서 이미지를 로드하는 기능을 개발하고 있습니다.
// 하지만 이미지 로드에는 시간이 걸리고 대역폭을 소비하는 등의 비용이 발생합니다. 이때 Proxy 패턴을 활용하여 이미지 로딩을 최적화할 수 있습니다.

// 먼저 실제 이미지 로딩을 담당하는 ImageLoader 클래스를 작성합니다.

interface Image {
  display(): void;
}

class ImageLoader implements Image {
  private url: string;

  constructor(url: string) {
    this.url = url;
    this.loadImage();
  }

  private loadImage(): void {
    console.log(`Loading image from ${this.url}`);
    // 이미지를 실제로 로딩하는 로직 작성
  }

  public display(): void {
    console.log(`Displaying image from ${this.url}`);
    // 이미지를 화면에 표시하는 로직 작성
  }
}

// 위의 코드에서 ImageLoader는 실제로 이미지를 로딩하고 표시하는 역할을 합니다.

// 이제 Proxy 클래스인 ImageProxy를 작성합니다. 이 클래스는 실제 이미지 로딩을 대신 수행하며, 이미지가 필요한 시점에만 로딩을 진행합니다.

class ImageProxy implements Image {
  private url: string;
  private image: ImageLoader | null = null;

  constructor(url: string) {
    this.url = url;
  }

  public display(): void {
    if (!this.image) {
      this.image = new ImageLoader(this.url);
    }
    this.image.display();
  }
}

// 위의 코드에서 ImageProxy는 Image 인터페이스를 구현하며, display 메서드를 가지고 있습니다.
// 이 메서드에서는 이미지가 필요한 시점에 ImageLoader를 생성하여 이미지를 로딩하고 표시합니다.

// 사용자는 다음과 같이 ImageProxy를 통해 이미지를 로딩하고 표시할 수 있습니다.

const proxyImage = new ImageProxy('https://example.com/image.jpg');
proxyImage.display();

// 위의 코드에서는 ImageProxy를 생성하고 display 메서드를 호출하여 이미지를 로딩하고 표시합니다.
// 이때 Proxy 패턴은 이미지가 필요한 시점에만 실제로 로딩을 수행하므로, 초기에는 이미지를 로딩하지 않고 필요한 시점에 로딩하여 비용을 줄일 수 있습니다.

// Proxy 패턴은 접근 제어, 추가 기능 제공 등 다양한 상황에서 활용될 수 있으며, 원본 객체를 변경하지 않고 기능을 확장할 수 있는 유연한 패턴입니다.

export {};
