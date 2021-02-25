const{Schema,model} =require('mongoose');
const User=new Schema({
	name:{
		type:String,
		require:true,
		trim:true
	},
	photo:{
		type:String

	},
	birthdate:{
		type:String
	}


});
module.exports=model("Users",User);
