const express= require('express');
var router=express.Router();
var serverResponse=require(__dirname+"/../config/constants");
const userCntrl=require(__dirname+"/../controllers/userCntrl");
router.post("/createUser",userCntrl.createUser);
router.post("/updateUser",userCntrl.updateUser);
router.post("/deleteUser",userCntrl.deleteuser);
router.get("/getUserinfo",userCntrl.getUserinfo);
router.get("/getUsersinfo",userCntrl.getUsersinfo);

module.exports=router;

