// Flyweight 패턴은 메모리 사용을 최적화하기 위해 객체를 공유하여 중복 생성을 피하는 패턴입니다.
// 이를 일반적인 상황으로 설명하기 위해 게임에서의 캐릭터 스프라이트(Sprites)를 관리하는 상황을 가정해보겠습니다.

// 먼저, Sprite 클래스를 작성합니다. 이 클래스는 캐릭터의 이미지와 위치 정보를 가지고 있습니다.

class Sprite {
  private image: string;
  private x: number;
  private y: number;

  constructor(image: string, x: number, y: number) {
    this.image = image;
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log(
      `Drawing sprite at (${this.x}, ${this.y}) with image: ${this.image}`,
    );
  }
}

// 다음으로, SpriteFactory 클래스를 작성합니다. 이 클래스는 이미 생성된 스프라이트를 관리하고 필요한 경우 재사용합니다.

class SpriteFactory {
  private sprites: { [key: string]: Sprite } = {};

  getSprite(image: string): Sprite {
    if (!this.sprites[image]) {
      this.sprites[image] = new Sprite(image, 0, 0);
    }
    return this.sprites[image];
  }

  countSprites(): number {
    return Object.keys(this.sprites).length;
  }
}

// SpriteFactory 클래스는 이미 생성된 스프라이트를 저장하는 sprites 객체를 가지고 있습니다.
// getSprite 메서드는 이미지를 기반으로 스프라이트를 가져오는데, 이미 생성된 스프라이트가 없을 경우 새로운 스프라이트를 생성하고 저장합니다.
// 이미 생성된 스프라이트가 있을 경우 저장된 스프라이트를 반환합니다. countSprites 메서드는 현재 생성된 스프라이트의 수를 반환합니다.

// 이제 클라이언트 코드에서 SpriteFactory를 사용하여 스프라이트를 생성하고 관리할 수 있습니다.
const spriteFactory = new SpriteFactory();

const sprite1 = spriteFactory.getSprite('character.png'); // 새로운 스프라이트를 생성합니다.
sprite1.draw();

const sprite2 = spriteFactory.getSprite('character.png'); // 이미 생성된 스프라이트를 사용합니다.
sprite2.draw();

const sprite3 = spriteFactory.getSprite('item.png'); // 새로운 스프라이트를 생성합니다.
sprite3.draw();

console.log(`Total sprites created: ${spriteFactory.countSprites()}`);

// 위의 코드에서는 SpriteFactory를 사용하여 스프라이트를 가져오고 그려봅니다. 'character.png' 이미지에 대한 스프라이트를 두 번 가져옵니다.
// 이미 생성된 스프라이트가 있으므로 중복 생성되지 않고 기존의 스프라이트를 사용합니다. 또한, 'item.png' 이미지에 대한 스프라이트를 생성합니다.

// [출력]
// Drawing sprite at (0, 0) with image: character.png
// Drawing sprite at (0, 0) with image: character.png <- 이 부분에서 이미 생성된 스프라이트를 사용합니다.
// Drawing sprite at (0, 0) with image: item.png
// Total sprites created: 2

// 결과에서 알 수 있듯이, 'character.png' 이미지에 대한 스프라이트는 한 번만 생성되고 재사용됩니다.
// 이를 통해 메모리 사용을 최적화할 수 있습니다.

// Flyweight 패턴은 객체의 중복 생성을 피하여 메모리를 절약하고 성능을 향상시킬 수 있습니다.
// 이는 대규모나 반복적인 객체 생성이 필요한 상황에서 유용하게 사용될 수 있습니다.

export {};
