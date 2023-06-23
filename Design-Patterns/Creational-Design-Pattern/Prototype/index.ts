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
