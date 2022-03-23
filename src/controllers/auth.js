import User from "../models/auth";

export const signup = async (req, res) => {
    try {
        // check tài khoản
        const { username, email, password } = req.body;
        const existUser = await User.findOne({ email }).exec();
        if(existUser){
            res.json({
                message: "Tài khoản đã tồn tại, vui lòng đăng ký lại"
            })
        }
        // đăng ký
        const user = await new User({username, email, password}).save();
        res.json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "Không đăng ký được tài khoản"
        })
    }
}

export const signin = () => {

}