const Product = require('../models/product');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.getProductByID = (req, res, next, id) => {
    Product.findById(id).exec( (error, product) => {
        if(error) {
            return res.status(400).json({ error: 'Failed to Find Product' });
        }
        req.product = product;
        next();
    } )
}

exports.createProduct = (req, res) => {
    let form = new formidable.IncomingForm(); // Creating Object of Formidable
    form.keepExtensions = true; // We need to Keep it True because we need File with Original Extension

    form.parse(req, (error, fields, file) => { // Parsing Form
        if(error) {
            return res.status(400).json({ error: 'Problem With Image' });
        }
        // TODO: Restriction with Fields
        /* 
            TODO: We can have more aggresive fields checking like we do it in auth controller eg. signin or signup
        */
        const { name, description, price, category, stock } = fields; // Destructure Fields
        if( !name || !description || !price || !category || !stock ) {
            return res.status(400).json({ error: 'Please Include all Fields' })
        }
        let product = new Product(fields);
        
        if(file.photo) { // Handling File 
            if(file.photo.size > 5000000) { // Checking File Size if large than 5MB
                return res.status(400).json({ error: 'File Size to Big' })
            }
            product.photo.data = fs.readFileSync(file.photo.path); // Setting File Path
            product.photo.contentType = file.photo.type; // Setting File ContentType
        }
        // Save Image To DataBase
        product.save( (error, product) => {
            if(error) {
                return res.status(400).json({ error: 'Failed To Save Product' })
            }
            res.status(200).json(product);
        } )
    })
}