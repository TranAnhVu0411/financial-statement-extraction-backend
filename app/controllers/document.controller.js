const db = require("../models");
const Document = db.documents;
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const sequelize = require('sequelize');

exports.create = async (req, res) => {
    try{
        const documentParams = {
            id: uuidv4(),
            userid: req.body.userid,
            documentname: path.parse(req.body.documentname)['name'],
            createdate: sequelize.literal('CURRENT_TIMESTAMP'),
            pagenum: req.body.pagenum,
        };
        const document = await Document.create(documentParams);
        res.status(200).json(document);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message || "Some error occurred while create document",
        });
    }
};

exports.update = async (req, res) => {
    try{
        const document = await Document.update(req.body, { where: {id: req.params.id}});
        res.status(200).json(document);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message || "Some error occurred while create document",
        });
    }
};

exports.index = async (req, res) => {
    try{
        const documents = await Document.findAll({ where: {userid: req.params.id}});
        res.status(200).json(documents);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message || "Some error occurred while create document",
        });
    }
};

exports.info = async (req, res) => {
    try{
        const document = await Document.findOne({ where: {id: req.params.id}});
        res.status(200).json(document);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message || "Some error occurred while create document",
        });
    }
};