const express=require('express');
const router=express.Router();
const multer = require('multer');
const  User=require('../model/usermodel.js');
let path = require('path');
const { v4: uuidv4 } = require('uuid');
module.exports=router;

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '/images/'));
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
	console.log(file);
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png','image/pdf'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload=multer({storage,fileFilter});


router.route('/add').post(upload.single('photo'), (req, res) => {
	console.log(req.file.filename);
    const name = req.body.name;
    console.log(name);

    const birthdate = req.body.birthdate;
    const photo = req.file.filename;

    const newUserData = {
        name,
        birthdate,
        photo
    }

    const Users = new User(newUserData);

    Users.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

