// Documentation about Mongoose: https://mongoosejs.com/

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userDb", { useNewUrlParser: true });

const attributes = {
  firstName: String,
  lastName: String,
  email: String,
};

const User = mongoose.model("User", attributes);

const user = new User({
  firstName: "Jhon",
  lastName: "Doe",
  email: "example@example.com",
});

(async () => {
  // Guardar un documento
  let savedUser = await user.save();
  console.log(savedUser);

  // Obtener todos los documentos
  User.find({}, (err, users) => {
    console.log(users);
  });
})();
