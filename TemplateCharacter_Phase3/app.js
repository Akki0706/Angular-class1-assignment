const express = require('express');
const bodyParser = require('body-parser'); 
const {body , validationResult} = require('express-validator');
const multer = require('multer'); 
const path = require('path'); 

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.use('/Uploading' , express.static('Uploading'));
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'Uploading/')
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
    body('age').isInt().withMessage('Age must be an integer')
    .custom((value, { req }) => {
        if (parseInt(value) < 18) {
            throw new Error('Age must be at least 18');
        }
        return true;
    }),
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


    const {name , age } = req.body;
    res.render('submission-validate' , {name , age,imagePath});
})
const port = 4000;
app.listen(port , ()=>{
    console.log(`Server running on port ${port}....`);
})