// src/objects/
// user.ts

export class User {
  readonly username: string; // ? Readonly = const property - nelze měnit. Musí se inicializovat okamžitě nebo v constructoru
  password: string;
  age: number;
  email: string;
  isActive = true; // ? Implicitně se přiřadí boolean
  private auditLog = []; // ? private modifikátor - nelze použít mimo třídus

  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvořen uživatel: ${this.username} ve věku: ${this.age}, aktivován: ${this.isActive}`
    );
  }

  getUsername(): string {
    // this.username = "Nejde změnit";
    // ? Explicitní nastavení typové anotace - return musí být vždy string
    return this.username;
  }

  setAge(newAge: number): void {
    // ? typová anotace: void - metoda nic nevrací (není return)
    this.age = newAge;
  }

  logUser() {
    // ? Implicitní typová anotace - automaticky se určí, zde: void
    console.log(
      `Uživatel: ${this.username}, věk ${this.age}, aktivován: ${this.isActive}`
    );
  }

  getEmail() {
    return this.email;
  }
}
