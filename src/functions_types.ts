//src/functions_types.ts

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

const subtract = (a: number, b: number): number => {
  const result = a - b;
  return result;
};
const addResult = add(5, 5);
console.log("Výsledek sčítání: " + addResult);
console.log("Výsledek odečítání: " + subtract(9, 2));
