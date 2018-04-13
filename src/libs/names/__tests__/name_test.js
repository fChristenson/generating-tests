const U = require("../name_utils");

describe("Name utils test", () => {
  it("has a module", () => {
    expect(U).toBeDefined();
  });

  describe("isMaleName", () => {
    it("returns true for william", () => {
      const expected = true;
      const actual = U.isMaleName("william");
      expect(actual).toEqual(expected);
    });

    it("returns true for bob", () => {
      const expected = true;
      const actual = U.isMaleName("bob");
      expect(actual).toEqual(expected);
    });

    it("returns true for clark", () => {
      const expected = true;
      const actual = U.isMaleName("clark");
      expect(actual).toEqual(expected);
    });

    it("returns false for anna", () => {
      const expected = false;
      const actual = U.isMaleName("anna");
      expect(actual).toEqual(expected);
    });
  });

  describe("isFemaleName", () => {
    it("returns true for william", () => {
      const expected = true;
      const actual = U.isFemaleName("susan");
      expect(actual).toEqual(expected);
    });

    it("returns true for bob", () => {
      const expected = true;
      const actual = U.isFemaleName("anna");
      expect(actual).toEqual(expected);
    });

    it("returns true for clark", () => {
      const expected = true;
      const actual = U.isFemaleName("jasmine");
      expect(actual).toEqual(expected);
    });

    it("returns false for clark", () => {
      const expected = false;
      const actual = U.isFemaleName("clark");
      expect(actual).toEqual(expected);
    });
  });

  describe("isOtherName", () => {
    it("returns true for william", () => {
      const expected = true;
      const actual = U.isOtherName("billy");
      expect(actual).toEqual(expected);
    });

    it("returns true for bob", () => {
      const expected = true;
      const actual = U.isOtherName("kim");
      expect(actual).toEqual(expected);
    });

    it("returns true for clark", () => {
      const expected = true;
      const actual = U.isOtherName("jamie");
      expect(actual).toEqual(expected);
    });

    it("returns false for clark", () => {
      const expected = false;
      const actual = U.isOtherName("clark");
      expect(actual).toEqual(expected);
    });
  });
});
