export function createRandomizer() {
  function randomize(): string {
    return Math.random().toString(36).substring(2, 15).padStart(12, "0");
  }

  function randomize2(): string {
    return Math.random().toString(36).substring(2, 15).padStart(12, "0");
  }

  function randomize3(): string {
    return Math.random().toString(36).substring(2, 15).padStart(12, "0");
  }

  return { randomize, randomize2, randomize3 };
}
