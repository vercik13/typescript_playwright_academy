import { EntryHall } from "./entry_hall.ts";

new EntryHall("Jan Novák")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Jak se máte?")
  .entryBathroom()
  .washHands()
  .returnToEntryHall();

async function main() {
  const marie = new EntryHall("Marie Dlouhá"); // ? Pokud používáme asynchronní flow, pak musí být vždy vytvoření instance objektu mimo toto flow, protože je constructor jen synchronní (nemůžeme na něm volat async ani await)
  await marie
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(3))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator())
    .then((entryHall) => entryHall.takeElevatorToSecondFloor());
}

main();
