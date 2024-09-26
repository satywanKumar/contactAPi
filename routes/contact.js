const express = require('express');
const Router = express.Router();
const Contact = require('../model/Contact')
const mongoose = require('mongoose')

// add new contact api
Router.post('/',(req,res)=>{
    const newContact = new Contact({
        _id:new mongoose.Types.ObjectId,
        fullName:req.body.fullName,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    })

    newContact.save()
    .then(result=>{
        res.status(200).json({
            contact:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

// get all contact

Router.get('/',(req,res)=>{
    Contact.find()
    .select("_id fullName phone")
    .then(result=>{
        res.status(200).json({
            contactList:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


// get contact detail by id
Router.get('/:id',(req,res)=>{
    Contact.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            contact:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


// delete contact api 
Router.delete('/:id',(req,res)=>{
    Contact.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.status(200).json({
            msg:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

// update
Router.put('/:id',(req,res)=>{
    Contact.findByIdAndUpdate(req.params.id,{
        fullName:req.body.fullName,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    },{new:true})
    .then(result=>{
        res.status(200).json({
            updatedContact:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

module.exports = Router;