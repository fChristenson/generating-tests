const names = require("./data/undefined_names.json");
const { isMaleName, isFemaleName, isOtherName } = require("../name_utils");

describe("Undefined names test", () => {
  it("matches our test data", () => {
    names.forEach(name => {
      const isMatch =
        isMaleName(name) || isFemaleName(name) || isOtherName(name);

      if (!isMatch) throw new Error(`Name could not be matched: ${name}`);
    });
  });
});
