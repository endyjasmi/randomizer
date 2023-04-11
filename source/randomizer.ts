export function createRandomizer() {
  function randomize(): string {
    return Math.random().toString(36).substring(2, 15).padStart(12, "0");
  }
  return { randomize };
}
