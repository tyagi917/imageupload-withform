import React,{useState} from 'react';
import axios from 'axios';
const User =()=>{
	const[newUser,setNewUser]=useState({
		name:'',
		birthdate:'',
		photo:'',
	});
	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log(newUser.birthdate);
		const formData=new FormData();
		formData.append('photo',newUser.photo);
		formData.append('birthdate',newUser.birthdate);
		formData.append('name',newUser.name);
		console.log(formData);
		console.log(newUser.photo);
		    axios.post('http://localhost:5000/users/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }



	
	const handleChange=(e)=>{
		setNewUser({
			...newUser,
			[e.target.name]:e.target.value
		})


	}
	const handlePhoto=(e)=>{
		console.log(e.target.files);
		setNewUser({
			...newUser,
			photo:e.target.files[0]
		})

	}
	return(
		<form onSubmit={handleSubmit} enctype='multipart/form-data'>
		<input type="file" name="photo" onChange={handlePhoto}/>
		<input type="text" Placeholder="Enter the name"  name="name" onChange={handleChange}/>
		<input type="date" name="birthdate" onChange={handleChange}/>
		<input type="submit"/>
		</form>
		)
	}
	export default User;

