const User = require("../../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TOKEN_KEY="HereShouldYouGo"
const postRegister = async (req, res) => {
  try {
    const { username, password, mail } = req.body;
    console.log("Ssssss",req.body)
    const userExists = await User.exists({ mail: mail.toLowerCase() });
    if (userExists) {
      return res
        .status(409)
        .send("E-mail is already exists. Please try again!");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      {
        userId: user._id,
        mail,
      },
      TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      userDetails: {
        mail: user.mail,
        username: user.username,
        token:token
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error Occurd,Please try again!");
  }
};

module.exports = postRegister;
