const express = require('express')
const newsLetterModel = require("../models/newsletter.model");

const router = express.Router();
var userEmail;

router.post("/newsletter", async(req, res)=>{
    const {email} = req.body;
    userEmail = email.email;

    if(!userEmail){
        return res.status(404).json({error : "Email Not Found"})
    }else{
        try {
            const fetch = await newsLetterModel.findOne({userEmail : userEmail});

            if(fetch){
                return res.status(501).json({error : "Email Already Registered"})
            }else{
                const add = new newsLetterModel({userEmail});
                const save = await add.save();

                if
                (save){
                    return res.status(200).json({message : "Email Subscribed for NewsLetter"})
                }else{
                    return res.status(502).json({error : "Error occurred while registering"})
                }
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({error : "Some Error Occurred"})
        }
    }
})

module.exports = router