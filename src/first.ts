// src/first.ts
console.log("Ahoj světe!");
let hello: string = "Programujeme v TypeScript!"; // ? Typová anotace - napíše se za proměnnou dvojtečka a datový typ
//hello = 12345; // ! Nelze - chyba, protože jsme to nastavili o krok výše jako string -  chyba: Type 'number' is not assignable to type 'string'.
hello = "Ahoj!";
console.log(hello);
