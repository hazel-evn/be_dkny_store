import User from "../models/auth.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  try {
    // check tài khoản
    const { username, email, password } = req.body;
    const existUser = await User.findOne({ email }).exec();
    if (existUser) {
      return res.status(400).json({
        message: "Tài khoản đã tồn tại, vui lòng đăng ký lại",
      });
    }
    // đăng ký
    const user = await new User({ username, email, password }).save();
    return res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    // return res.status(400).json({
    //     message: "Không đăng ký được tài khoản"
    // })
    console.log(error);
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await User.findOne({ email }).exec();
    if (!users) {
      return res.status(400).json({
        message: "Không tồn tại user",
      });
    }
    if (!users.authenticate(password)) {
      return res.status(400).json({
        message: "Sai mật khẩu, vui lòng nhập lại",
      });
    }
    const accesstoken = jwt.sign(
      { email, password },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: 60 * 60,
      }
    );
    return res.json({ accesstoken });
  } catch (error) {
    return res.status(400).json({
      message: "Sai tài khoản hoặc mật khẩu",
    });
  }
};
export const getAll = async (req, res) => {
  // lấy ra tất cả tài khoản
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (error) {
    return res.status(400).json({
      message: "Không tìm thấy tài khoản",
    });
  }
};
