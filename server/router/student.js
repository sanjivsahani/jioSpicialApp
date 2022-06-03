const express = require("express")
const fetchuser = require('../middlewere/fetchuser')
const StudentModal = require('../model/Student ')


const router = express.Router()

// inserting the all student at one time
router.get('/', (req, res) => {
    res.send("hello")
})
router.post('/post', fetchuser, async (req, res) => {
    try {
        
        let student = await StudentModal.insertMany(req.body)
        res.status(200).json({sucess:true, student})

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Enternal server Error" })
    }
})
// get all students data usding the get method

router.get('/getstudent', fetchuser, async (req, res) => {
    try {
        let student = await StudentModal.find()
        res.status(200).json({sucess:true , student})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Enternal server error"})
        
    }
    
})


// // ROUTE 3: Update an existing student using: PUT "/api/notes/updatenote". Login required
// router.put('/updatstudent/:id', fetchuser, async (req, res) => {
//     const { name,age,contact,studentId } = req.body;

//     try {
//         // Create a newstudent object
//         const newstudent = {};
//         if (name) { newstudent.title = name };
//         if (age) { newstudent.description = age };
//         if (contact) { newstudent.tag = contact };
//         if (studentId) { newstudent.tag = studentId };


//         // // Find the note to be updated and update it
//         // let student = await StudentModal.findById(req.params.id);
//         // if (!student) { return res.status(404).send("Not Found") }

//         // if (note.user.toString() !== req.user.id) {
//         //     return res.status(401).send("Not Allowed");
//         // }
//         student = await StudentModal.findByIdAndUpdate(req.params.id, { $set: newstudent }, { new: true })
//         res.json({ student });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
// })

// // ROUTE 4: Delete an existing student using: DELETE "/api/notes/deletenote". Login required
// router.delete('/deltestudent/:id', fetchuser, async (req, res) => {
//     try {
//         // Find the note to be delete and delete it
//         let student = await StudentModal.findById(req.params.id);
//         if (!student) { return res.status(404).send("Not Found") }

//         // // Allow deletion only if user owns this student
//         // if (student.user.toString() !== req.user.id) {
//         //     return res.status(401).send("Not Allowed");
//         // }

//         student = await StudentModal.findByIdAndDelete(req.params.id)
//         res.json({ "Success": "student has been deleted", res: student });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
// })


module.exports = router;