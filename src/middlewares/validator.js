module.exports = (req,res,next) =>{
    if (!req.params.id){
        next();
        
    } else {
        res.status(500);
        res.send({ error : 'Error'});
        next('INVALID ID');
    }
}

