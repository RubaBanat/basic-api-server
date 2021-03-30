module.exports = (req,res,next) =>{
    if (!req.query.name){
        next();
    } else {
        next('INVALID CLOTHES ID');
    }
}

module.exports = (req,res,next) =>{
    if (!req.query.name){
        next();
    } else {
        next('INVALID FOOD ID');
    }
}
