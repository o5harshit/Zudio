const mongoose = require("mongoose");
const user = require("./user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Users";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const inuser = async () => {
  const use = await new user({
    Emailaddress: "srivastavaharshit400@gmail.com",
    Name: "Harshit",
    Branch: "CSE",
    year: "3",
  });
  await use.save();
};

//inuser();