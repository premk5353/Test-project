var serverResponse=require(__dirname+"/../config/constants");
var db=require(__dirname+"/../../models");
module.exports.createUser=async function(req,res){	
	console.log(req.body.password);
	await db.users.create({
		id:req.body.id,
		 name:req.body.name,
		 phone_number:req.body.phone_number,
		 password:req.body.password,
		 email:req.body.password,
		 gender:req.body.gender,
		 city_name:req.body.city_name,
		 state_name:req.body.state_name,
		 contry_name:req.body.contry_name

	}).then(result=>{		
		serverResponse.successResponse.status="true";
		serverResponse.successResponse.data=result;
		serverResponse.successResponse.message="data inserted";		 
		return res.send(serverResponse.successResponse)
		
	});
	// if(req.query.success=="true"){
    //     // DB communication bussiness logic
	// 	serverResponse.successResponse.status=true;
	// 	serverResponse.successResponse.data=req.query;
	// 	serverResponse.successResponse.message=serverResponse.retriveSuccessMessage;
	// 		res.send(serverResponse.successResponse);
	// }else{
	// 	serverResponse.errorResponse.status=false;
	// 	serverResponse.errorResponse.message="try after some time";
	// 	serverResponse.errorResponse.errorCode="503";
	// 		res.send(serverResponse.errorResponse);
	// }
	
	
}



module.exports.updateUser=function(req,res){	
	if(req.query.success=="true"){
        // DB communication bussiness logic
		serverResponse.successResponse.status=true;
		serverResponse.successResponse.data=req.query;
		serverResponse.successResponse.message=serverResponse.retriveSuccessMessage;
			res.send(serverResponse.successResponse);
	}else{
		serverResponse.errorResponse.status=false;
		serverResponse.errorResponse.message="try after some time";
		serverResponse.errorResponse.errorCode="503";
			res.send(serverResponse.errorResponse);
	}
	
	
}

module.exports.deleteuser= async function(req,res){	
	 console.log(req);
	  db.users.destroy({where:{id:req.body.id}}).then(result=>{
		serverResponse.errorResponse.status=true;
		serverResponse.errorResponse.message="record deleted";
		res.send(serverResponse.errorResponse);
	  }
		);		
	 
	
}


module.exports.getUserinfo=function(req,res){	
	if(req.query.id!=undefined){
		try{		
			db.users.findAll({
				where:{id:req.query.id}
			}).then(result=>{		
				if(result.length>0){
					serverResponse.successResponse.status="true";
					serverResponse.successResponse.data=result;
					serverResponse.successResponse.message=serverResponse.retriveSuccessMessage;			 
					return res.send(serverResponse.successResponse)
				}	else{
					serverResponse.errorResponse.status=false;
					serverResponse.errorResponse.message="data set id empty";
					serverResponse.errorResponse.errorCode="503";
					res.send(serverResponse.errorResponse);			
				}
				
			});
		}catch(e){
			serverResponse.errorResponse.status=false;
			serverResponse.errorResponse.message="try after some time";
			serverResponse.errorResponse.errorCode="503";
			res.send(serverResponse.errorResponse);
		}
	
	}else{
		serverResponse.errorResponse.status=false;
		serverResponse.errorResponse.message="id paramet is missing";
		serverResponse.errorResponse.errorCode="503";
		res.send(serverResponse.errorResponse);
	}
		

	
	
}



module.exports.getUsersinfo=function(req,res){	
	try{
		db.users.findAll().then(result=>{			
			serverResponse.successResponse.status="true";
			serverResponse.successResponse.data=result;
			serverResponse.successResponse.message=serverResponse.retriveSuccessMessage;			 
			return res.send(serverResponse.successResponse)
		});
	}catch(e){
		serverResponse.errorResponse.status=false;
		serverResponse.errorResponse.message="try after some time";
		serverResponse.errorResponse.errorCode="503";
		res.send(serverResponse.errorResponse);
	}
	
	
	
	
	// if(req.query.success=="true"){
    //     // DB communication bussiness logic
	// 	serverResponse.successResponse.status=true;
	// 	serverResponse.successResponse.data=req.query;
	// 	serverResponse.successResponse.message=serverResponse.retriveSuccessMessage;
	// 		res.send(serverResponse.successResponse);
	// }else{
	// 	serverResponse.errorResponse.status=false;
	// 	serverResponse.errorResponse.message="try after some time";
	// 	serverResponse.errorResponse.errorCode="503";
	// 		res.send(serverResponse.errorResponse);
	// }
	
	
}