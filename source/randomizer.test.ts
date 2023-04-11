import { expect } from "chai";
import { createRandomizer } from "./randomizer.js";

describe("createRandomizer()", function () {
  describe("randomize()", function () {
    it("should return a random string", async function () {
      // Arrange
      const randomizer = createRandomizer();

      // Act
      const result = randomizer.randomize();

      // Assert
      expect(result).to.be.a("string");
      expect(result).to.have.lengthOf(12);
    });
  });
});
