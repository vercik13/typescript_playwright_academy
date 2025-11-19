// src/
// type_annotations.ts
let firstName = "Verča"; // ? Probíhá implicitní určení typu - nastavuju přímo hodnotu
// firstName = true; // ? když najedu myší na firstName, hlásí mi to že nemůžu dát hodnotu booean do string

firstName = "Adam";
console.log(firstName);

// * Doporučené použití typové anotace:
let lastName: string;
lastName = "Vokounova";
lastName = "Veselá";
console.log(lastName);

let isPlaywright: boolean;
isPlaywright = true;
isPlaywright = false;
console.log(isPlaywright);

const cities: string[] = ["Praha", "Beroun"];
console.log(cities);
