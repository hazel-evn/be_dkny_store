export const checkAuth = (req,res,next) => {
    const isManager = true;
    if(isManager){
        console.log("Quản lý đây à");
        next();
    }else{
        res.redirect("/");
        console.log("Bạn không phải là quản lý");
    }
}