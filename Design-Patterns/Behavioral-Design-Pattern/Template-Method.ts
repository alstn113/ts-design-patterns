// Template Method 패턴은 알고리즘의 구조를 정의하고 하위 클래스에서 구체적인 구현을 제공하는 디자인 패턴입니다.
// 일반적인 상황으로는 게임 캐릭터의 레벨 업을 처리하는 예시를 설명해보겠습니다.

// 게임 캐릭터의 레벨 업을 처리하는 Abstract Class
abstract class CharacterLevelUp {
  levelUp(character: Character): void {
    this.increaseLevel(character);
    this.gainSkills(character);
    this.updateStats(character);
    this.displayLevelUpMessage(character);
  }

  abstract increaseLevel(character: Character): void;

  abstract gainSkills(character: Character): void;

  abstract updateStats(character: Character): void;

  displayLevelUpMessage(character: Character): void {
    console.log(
      `Congratulations! ${character.name} has reached level ${character.level}!`,
    );
  }
}

// 전사 캐릭터의 레벨 업을 처리하는 Concrete Class
class WarriorLevelUp extends CharacterLevelUp {
  increaseLevel(character: Character): void {
    character.level += 1;
  }

  gainSkills(character: Character): void {
    character.skills.push('Berserk');
  }

  updateStats(character: Character): void {
    character.attack += 5;
    character.defense += 2;
  }
}

// 마법사 캐릭터의 레벨 업을 처리하는 Concrete Class
class MageLevelUp extends CharacterLevelUp {
  increaseLevel(character: Character): void {
    character.level += 1;
  }

  gainSkills(character: Character): void {
    character.skills.push('Fireball');
  }

  updateStats(character: Character): void {
    character.attack += 2;
    character.magicPower += 5;
  }
}

// 게임 캐릭터 클래스
class Character {
  name: string;
  level: number;
  attack: number;
  defense: number;
  magicPower: number;
  skills: string[];

  constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.attack = 10;
    this.defense = 5;
    this.magicPower = 10;
    this.skills = [];
  }

  levelUp(levelUpHandler: CharacterLevelUp): void {
    levelUpHandler.levelUp(this);
  }
}

// 게임 캐릭터 생성 및 레벨 업
const warrior = new Character('Warrior');
warrior.levelUp(new WarriorLevelUp());
console.log(warrior);

const mage = new Character('Mage');
mage.levelUp(new MageLevelUp());
console.log(mage);

// 위의 예시에서는 `CharacterLevelUp` 클래스가 Template Method 패턴을 사용하여 게임 캐릭터의 레벨 업을 처리합니다.
// `CharacterLevelUp` 클래스는 `levelUp` 메서드를 정의하고, `increaseLevel`, `gainSkills`, `updateStats` 메서드를 추상 메서드로 선언합니다.
// 하위 클래스에서는 이러한 추상 메서드를 구체적으로 구현합니다. 또한, `displayLevelUpMessage` 메서드는 구현이 제공되지만 필요에 따라 하위 클래스에서 재정의할 수도 있습니다.

// `Character` 클래스는 게임 캐릭터를 나타내며, `levelUp` 메서드를 통해 레벨 업을 수행합니다.
// `levelUp` 메서드는 `CharacterLevelUp` 객체를 인자로 받아 Template Method 패턴을 활용하여 게임 캐릭터의 레벨 업 로직을 처리합니다.

// 위의 예시에서는 전사와 마법사 두 가지 캐릭터를 생성하고, 각각의 `levelUp` 메서드를 호출하여 레벨 업을 수행합니다.
// 이를 통해 Template Method 패턴을 사용하여 게임 캐릭터의 레벨 업 알고리즘의 구조를 정의하고, 구체적인 구현은 하위 클래스에서 제공할 수 있습니다.
