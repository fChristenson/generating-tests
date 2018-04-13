const express = require("express");
const app = express();
const Name = require("./libs/names/name_model");
const {
  isFemaleName,
  isMaleName,
  isOtherName
} = require("./libs/names/name_utils");

app.get("/names", async (req, res) => {
  const savedName = await Name.findOne({ name: req.query.name });
  res.json(savedName || { error: `Name: ${req.query.name} is not saved` });
});

const makeSaveNameFunc = type => async (name, res) => {
  const newName = new Name({ name: name.toLowerCase(), type });
  const savedName = await newName.save();
  return res.json(savedName);
};

const saveMaleName = makeSaveNameFunc("male");
const saveFemaleName = makeSaveNameFunc("female");
const saveOtherName = makeSaveNameFunc("other");
const saveUndefinedName = makeSaveNameFunc("undefined");

app.post("/names", async (req, res) => {
  const name = req.query.name;

  if (!name) return res.json({ error: "No name found" });

  const savedName = await Name.findOne({ name: name.toLowerCase() });

  if (savedName) return res.json({ error: "Name is already saved" });

  if (isOtherName(name)) return saveOtherName(name, res);
  if (isMaleName(name)) return saveMaleName(name, res);
  if (isFemaleName(name)) return saveFemaleName(name, res);

  return saveUndefinedName(name, res);
});

app.put("/names", async (req, res) => {
  const name = req.query.name;

  if (!name) return res.json({ error: "No name found" });

  const savedName = await Name.findOne({
    name: name.toLowerCase(),
    type: "undefined"
  });

  if (isOtherName(savedName)) return saveOtherName(savedName, res);
  if (isMaleName(savedName)) return saveMaleName(savedName, res);
  if (isFemaleName(savedName)) return saveFemaleName(savedName, res);

  return res.json({ error: "Could not categories name" });
});

app.get("/names/undefined", async (req, res) => {
  const names = await Name.find({ type: "undefined" });
  res.json(names);
});

module.exports = app;
