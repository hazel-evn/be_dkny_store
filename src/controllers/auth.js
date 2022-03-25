import User from "../models/auth";
import jwt from "jsonwebtoken";
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

export const signin = async (req, res) => {
    const { email , password } = req.body;
    console.log(req.body);
    const users = await User.findOne({email}).exec();
    if(!users){
        res.status(401).json({
            message: "Không tồn tại user"
        })
    }
    if(!users.authenticate(password)){
        res.status(401).json({
            message: "Sai mật khẩu, vui lòng nhập lại"
        })
    }
    const token = jwt.sign({email}, "hihi", {expiresIn: 60 * 60})
    res.json({
        users: {
            token,
            _id: users._id,
            email: users.email,
            name: users.username
        }
    })
}