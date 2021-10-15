let animals = ['elephant', 'zebra', 'bear', 'tiger']


describe("animals array", () => {

  beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
    console.log("before each")
  })

  it("should add one animal to end of array", () => {
    animals.push("aligator")
    expect(animals[animals.length - 1]).toBe("aligator")
  })

  it("should add one animal to beginning of array", () => {
    animals.unshift("monkey")
    expect(animals[0]).toBe("monkey")
  })

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4)
  })
});

describe("something else", () => {
  it("not the animals array", () => {
    expect(true).toBeTruthy();
  })
})