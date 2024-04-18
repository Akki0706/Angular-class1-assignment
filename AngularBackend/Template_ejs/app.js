const express = require('express');
const bodyParser = require('body-parser'); // Body parser is use to pass the jason data.
const {body , validationResult} = require('express-validator');
const multer = require('multer'); //Multer is used to store the photos and upload it.
const path = require('path');  // to provide the path to the uploads.

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.use('/uploads' , express.static('uploads'));
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
})


const uploads = multer({storage:storage});

app.get('/' , (req,res)=>{
    res.render('form-validate' , {errors:null});
})
app.post('/submit',uploads.single('image'),[
    body('name').isLength({min:5}).withMessage('Name is required with min 5 chars'),
    body('email').isEmail().withMessage('Invalid email'),
    body('image').custom((value , {req})=>{

        if(!req.file){

            throw new Error('Image is required');

        }

        return true;

    })


],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.render('form-validate' , {errors: errors.array()})
    }
    const imagePath = req.file.path;


    const {name , email } = req.body;
    res.render('submission-validate' , {name , email,imagePath});
})
const port = 3000;
app.listen(port , ()=>{
    console.log(`Server running on port ${port}....`);
})