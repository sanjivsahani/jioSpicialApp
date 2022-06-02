const express = require("express")
const fetchuser = require('../middlewere/fetchuser')
const Student = require('../model/Student ')
const { body, validationResult } = require('express-validator');



const router = express.Router()

// inserting the all student at one time

router.post('/createstudent', fetchuser, async (req, res) => {

    try {
        let student = await Student.insertMany({
            name: req.body.name,
            age: req.body.age,
            contactno:req.body.contactno,
            studentid:req.body.studentid
        })
        res.status(200).json({sucess:true, student})

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Enternal server Error" })
    }
})
// get all students data usding the get method

router.get('/getstudent', fetchuser, async (req, res) => {
    try {
        let student = await Student.find()
        res.status(200).json({sucess:true , student})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Enternal server error"})
        
    }
    
})




module.exports = router;