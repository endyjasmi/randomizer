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
    });

    it("should return a random string with length of 12", async function () {
      // Arrange
      const randomizer = createRandomizer();

      // Act
      const result = randomizer.randomize();

      // Assert
      expect(result).to.have.lengthOf(12);
    });
  });

  describe("randomize2()", function () {
    it("should return a random string", async function () {
      // Arrange
      const randomizer = createRandomizer();

      // Act
      const result = randomizer.randomize2();

      // Assert
      expect(result).to.have.lengthOf(12);
    });

    it("should return a random string with length of 12", async function () {
      // Arrange
      const randomizer = createRandomizer();

      // Act
      const result = randomizer.randomize2();

      // Assert
      expect(result).to.have.lengthOf(12);
    });
  });

  describe("randomize3()", function () {
    it("should return a random string", async function () {
      // Arrange
      const randomizer = createRandomizer();

      // Act
      const result = randomizer.randomize2();

      // Assert
      expect(result).to.be.a("string");
      expect(result).to.have.lengthOf(12);
    });

    it("should return a random string with length of 12", async function () {
      // Arrange
      const randomizer = createRandomizer();

      // Act
      const result = randomizer.randomize3();

      // Assert
      expect(result).to.have.lengthOf(12);
    });
  });
});
