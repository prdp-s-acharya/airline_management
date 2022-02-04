/* eslint-disable no-console */

import * as fs from "fs";

export const ReadPassanger = () => {
  const row = fs.readFile("./passangers.json");
  const passangers = row.json();
  return passangers;
};

export const WritePassanger = (passanger) => {
  const row = fs.readFile("./passangers.json");
  const passangers = row.json();
  const newPassangers = [...passangers, passanger];
  fs.writeFile("./passangers.json", JSON.stringify(newPassangers));
};
