const sum = require('./sum');

describe("example testes", () => {
    it('should add 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    })


    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({});
    });
});

describe("true or false", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined()
    })
})

describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThanOrEqual(4)
    })

    it("adding floats", () => {
        const secondVal = 0.1 + 0.2;
        expect(secondVal).toBeCloseTo(0.3)
    })

})

describe("strings", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

describe("arrays", () => {
    it("contains string", () => {
        const shoppingLists = ["diapers", "kleenex", "trash bag", "papaer towel", "milk"]
        expect(shoppingLists).toContain("milk")
    })
})

function compileAndroidCode() {
    throw new Error("error android version");
}

describe("exceptions", () => {
    it("compile goes as expected", () => {
        expect(() => compileAndroidCode()).toThrow("error android version")
    })

})