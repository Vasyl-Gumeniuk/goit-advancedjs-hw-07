class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;  // Властивість door, ініціалізована як закрита
  protected key: Key;               // Властивість key для зберігання ключа
  protected tenants: Person[] = []; // Масив tenants для зберігання мешканців

  constructor(key: Key) {
    this.key = key;
  }

  // Абстрактний метод для відкриття дверей
  public abstract openDoor(key: Key): void;

  // Метод для додавання людини у мешканці, якщо двері відкриті
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person has entered the house.');
    } else {
      console.log('The door is closed. Person cannot enter.');
    }
  }
}


class MyHouse extends House {
  // Реалізація методу openDoor
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door is now open.');
    } else {
      console.log('Invalid key. The door remains closed.');
    }
  }
}

// Приклад використання
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

// Спроба відкрити двері з ключем
house.openDoor(person.getKey());

// Людина намагається увійти в будинок
house.comeIn(person);



export {};