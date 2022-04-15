import expressJWT from "express-jwt";

export const checkAuth = (req, res, next) => {
    const isManager = true;
    if (isManager) {
        console.log("Quản lý đây à");
        next();
    } else {
        res.redirect("/");
        console.log("Bạn không phải là quản lý");
    }
}

export const requiredSignin = expressJWT({
    secret: "hihi",
    algorithms: ["HS256"],
    requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    const user = req.profile._id == req.auth._id;
        if(process.browser) {
            const cookieChecked = getCookie('token')
            if(cookieChecked){
                if(localStorage.getItem('user')){
                    return JSON.parse(localStorage.getItem('user'))
                }else{
                    return false;
                }
            }
        } else if (!user) {
        return res.status(402).json({
            message: "Bạn không được phép truy cập"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(402).json({
            message: "Bạn không phải là admin"
        })
    }
    next();
}
