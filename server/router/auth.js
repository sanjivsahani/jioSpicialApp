const express = require("express")
const { body, validationResult } = require('express-validator');
const User = require("../model/user")
const bcrypt = require('bcryptjs');
const router = express.Router()
const jwt = require('jsonwebtoken');
const fetchuser = require("../middlewere/fetchuser");
const jwt_secrate = process.env.secrateKey;


// creating the user using the post method

router.post('/signup', [
    // name must be at least 3 chars long
    body('name', 'name sholud be atleast 3 character').isLength({ min: 3 }),
    // email must be an email
    body('email', "plaese Enter a valid email ").isEmail(),
    // password must be at least 5 chars long
    body('password', 'password must be at least 5 character ').isLength({ min: 5 }),
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let createsuer = await User.findOne({ email: req.body.email })
        if (createsuer) {
            return res.status(400).json({ sucess: false, message: "A user is with this email aleady exists" })
        }

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        createsuer = await User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        const data = {
          user: {
                id:createsuer.id
            }
        }
        const token = jwt.sign(data, jwt_secrate)
        createsuer.save()
        res.status(200).json({ sucess: true, token })
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Enternal server Error"})
    }
})
// login routes to login a user
router.post('/login',
    [
        // email must be an email
        body('email', "plaese Enter a valid email ").isEmail(),
        // password must be at least 5 chars long
        body('password', 'password must be at least 5 character ').exists()
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const {email,password} = req.body
            let user = await User.findOne({ email})
            if (!user) {
                return res.status(400).json({sucess:false,message:"Enter a valid Email"})
            }
            
            let comparepassword = await bcrypt.compare(password, user.password)
            if (!comparepassword) {
                return res.status(400).json({sucess:false,message:"Enter a vlid Password"})
            }
            const data = {
                user: {
                    id:user.id
                }
            }
           const token =  jwt.sign(data,jwt_secrate)
            res.status(200).json({ sucess: true, token:token})
        } catch (error) {
            console.error(error)
            res.status(500).json({message:"Enternal Server Error"})
        } 
})
// geting the user 
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    let id = req.user.id
    let user = await User.findById(id).select('-password')
    res.status(200).json({user})
  } catch (error) {
    console.error(error)
    res.status(500).json({message:"Enternal Server Error"})
  }
})



module.exports = router;