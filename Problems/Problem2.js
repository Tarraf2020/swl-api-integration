const fs = require("fs");

const probabilityToBeatBoss = (cardSuits, animalName, fruit) => {
  return new Promise((resolve, reject) => {
    fs.readFile("prediction.csv", "utf8", (err, data) => {
      if (err) {
        reject("Error reading the file:", err);
        return;
      }

      let objectsList = [];

      const rows = data.split("\n");
      const headers = rows[0].split(",");

      for (let index = 1; index < rows.length; index++) {
        const row = rows[index].split(",");

        if (row.length === 1 && row[0] === "") continue; // Skip the last empty line

        const rowObject = {};
        headers.forEach((header, index) => {
          rowObject[header] = row[index];
        });

        objectsList.push(rowObject);
      }

      let totalCardSuitCount = 0;
      let totalAnimalNameCount = 0;
      let totalFruitCount = 0;

      let winningCardSuitCount = 0;
      let winningAnimalNameCount = 0;
      let winningFruitCount = 0;

      objectsList.forEach((obj) => {
        if (obj["Card Suit"] === cardSuits) {
          totalCardSuitCount += 1;
        }
        if (obj["Card Suit"] === cardSuits && obj["Result"] === "True") {
          winningCardSuitCount += 1;
        }

        if (obj["Animal Name"] === animalName) {
          totalAnimalNameCount += 1;
        }
        if (obj["Animal Name"] === animalName && obj["Result"] === "True") {
          winningAnimalNameCount += 1;
        }

        if (obj["Fruit"] === fruit) {
          totalFruitCount += 1;
        }
        if (obj["Fruit"] === fruit && obj["Result"] === "True") {
          winningFruitCount += 1;
        }
      });

      const winningProbabilityCardSuit =
        (winningCardSuitCount * 100) / totalCardSuitCount;
      const winningProbabilityAnimalName =
        (winningAnimalNameCount * 100) / totalAnimalNameCount;
      const winningProbabilityFruit =
        (winningFruitCount * 100) / totalFruitCount;

      const finalProbability = (
        (winningProbabilityCardSuit +
          winningProbabilityAnimalName +
          winningProbabilityFruit) /
        3
      ).toFixed(1);

      resolve(finalProbability);
    });
  });
};

(async () => {
  try {
    const result = await probabilityToBeatBoss("Hearts", "Lion", "Mango");
    console.log(`The probability of beating the boss is : ` + result);
  } catch (error) {
    console.error(error);
  }
})();
