const userModel = require("../model/userModel");
const passwordUtil = require("./hash_match_password");

const check = async (email, password) => {

    try {
        const user = await userModel.findOne({email});
        if (user == null) {
            console.log("null");
            return null;
        }
        else {
            const isPasswordMatching = await passwordUtil.matchPassword(password, user.password);
            if (isPasswordMatching) {
                console.log("true");
                return true;
            }
            else {
                console.log(user);
                return false;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = check;