const express=require('express');
const router=express.Router();
const {authorizeUser}=require('../Middleware/authMiddleware')
const QuestionController=require('../Controllers/QuestionController')
router.get('/',QuestionController.getAllQuestions);
router.get('/:id',QuestionController.getQuestionById);
router.post('/',QuestionController.createQuestion);
router.put('/:id',authorizeUser('admin'),QuestionController.updateQuestion);
router.delete('/:id',authorizeUser('admin'),QuestionController.deleteQuestion);
module.exports=router;
