require("dotenv").config();
const jwt = require("jsonwebtoken");
const generateToken = async (email) => {
    const token = await jwt.sign({ email },
        "THIS IS A SECRET",
        {
            expiresIn: "5m"
        }

    )
    return token;
}

module.exports = generateToken;