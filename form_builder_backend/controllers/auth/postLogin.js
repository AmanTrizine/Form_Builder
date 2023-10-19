const User = require("../../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const TOKEN_KEY="HereShouldYouGo"
const postLogin = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const user = await User.findOne({ mail: mail.toLowerCase() });
    if (user && (await bcrypt.compare(password, user.password))) {
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

      return res.status(200).json({
        userDetails: {
          username: user.username,
          token: token,
          mail: user.mail,
          // _id: user._id,
        },
      });
    }

    return res.status(400).send("Invalid Crenditials, Please Try Again!");
  } catch (err) {
    return res.status(500).send("Something went worng!");
  }
};

module.exports = postLogin;
