import { StatusCodes } from "http-status-codes";
import { User } from "../../../models/user/user.js";

const GetAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();

        if (allUsers.length > 0) {
            return res.status(StatusCodes.OK).json(allUsers)
        } else {
            return res.status(StatusCodes.NOT_FOUND).json({ message: 'No users found.' })
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
    }
}

export default GetAllUsers;