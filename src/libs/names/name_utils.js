const isMaleName = name => {
  const names = ["bob", "clark", "william"];
  return names.indexOf(name) !== -1;
};

module.exports.isMaleName = isMaleName;

const isFemaleName = name => {
  const names = ["susan", "anna", "jasmine"];
  return names.indexOf(name) !== -1;
};

module.exports.isFemaleName = isFemaleName;

const isOtherName = name => {
  const names = ["kim", "jamie", "billy"];
  return names.indexOf(name) !== -1;
};

module.exports.isOtherName = isOtherName;
