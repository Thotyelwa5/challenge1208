const db = require("../config") //this imprt the db con from config
class Users{
fetchUsers(req, res){
    const query = `
    SELECT userID, firstName, lastNmae, gende, userDOB,
    emailAdd, profileUrl
    FROM Users;
    `
    db.query(query,(err, result)=>{
        if(err)throw err
        res.json({
            status: res.stausCode,
            results
        })
    })
}
fetchUser(req, res){
    const query = `
    SELECT userID, firstName, lastNmae, gende, userDOB,
    emailAdd, profileUrl
    FROM Users
    WHERE userId = ${req.params.id};
    `
    db.query(query,
         (err, results)=>{
            if (err) throw err 
            res.json({
                status: res.statusCode,
                result
            })
         })
}
login(req, res){    
}
register(req, res){
}
updateUser(req, res){
    const query =`
    UPDATE User
    SET ?
    WHERE userID = ?
    `
    db.query(query,
        [req.body, req.params.id],
        (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record was updated."
            })
        })
}
deleteUser(req, res){
    const query = ` DELETE FROM Users 
    WHERE userID = ${req.params.id};
    `
    db.query(query,(err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: "A user recored was deleted."
        })
    })
}
}
module.exports = Users