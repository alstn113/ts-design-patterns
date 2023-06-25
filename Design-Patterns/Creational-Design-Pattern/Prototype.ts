// 프로토타입 패턴(Prototype Pattern)은 객체를 복제하여 생성하는 패턴입니다. 이를 통해 객체를 생성하는 과정에서의 비용을 줄일 수 있습니다.

// 타입스크립트에서 프로토타입 패턴을 구현하기 위해서는 Object.create()를 이용해 복제하여 새로운 객체를 생성합니다.

abstract class Character {
  protected name: string;
  protected level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  public abstract info(): void;
}

class PlayerCharacter extends Character {
  constructor(name: string, level: number) {
    super(name, level);
  }

  public info(): void {
    console.log(`Player Character: ${this.name} (Level ${this.level})`);
  }
}

class NonPlayerCharacter extends Character {
  constructor(name: string, level: number) {
    super(name, level);
  }

  public info(): void {
    console.log(`Non-Player Character: ${this.name} (Level ${this.level})`);
  }
}

// 프로토타입 객체 생성
const playerPrototype: Character = new PlayerCharacter('John', 10);
const npcPrototype: Character = new NonPlayerCharacter('Goblin', 5);

// 캐릭터 객체 복제
const playerCharacter: Character = Object.create(playerPrototype);
const npcCharacter: Character = Object.create(npcPrototype);

// 복제된 캐릭터 정보 출력
playerCharacter.info(); // Player Character: John (Level 10)
npcCharacter.info(); // Non-Player Character: Goblin (Level 5)

// 프로토타입 패턴을 사용하면 객체 생성 과정에서의 비용을 줄일 수 있습니다.
// 기존에 생성된 객체를 복제하여 새로운 객체를 생성하기 때문에, 객체를 처음부터 생성하는 것보다 효율적입니다.
// 또한, 객체의 구조를 변경하지 않고도 복제를 통해 새로운 객체를 생성할 수 있기 때문에 유연성이 높습니다.

export {};
