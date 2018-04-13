const app = require("./src/app");
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/my_name_database";
mongoose.connect(mongoDB);

app.listen(3000);
