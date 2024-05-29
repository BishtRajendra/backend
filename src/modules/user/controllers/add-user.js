import { User } from "../../../models/user/user.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt';
import { v4 as uuid } from "uuid";

const SignInUser = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please provide username, email, and password.' })
    }

    try {
        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            _id: uuid(),
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        return res.status(StatusCodes.CREATED).json({ message: "User account has been created.", statuscodes: StatusCodes.CREATED });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }
}

export default SignInUser;