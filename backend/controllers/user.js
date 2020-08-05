const User = require('../models/user');

exports.getUserByID = (req, res, next, id) => { // Function to find User by ID
    User.findById(id).exec( (error, user) => {
        if(error) {
            return res.status(400).json({ error: 'No User Found' });
        }
        req.profile = user; // Saving user Profile in Request Object for Further Use
        next();
    } );
}

exports.getUser = (req, res) => { // Function to get User
    req.profile.salt = undefined;
    req.profile.encryptedPassword = undefined;
    req.status(200).json(req.profile);
}

exports.updateUser = (req, res) => { // Function to Update User
    User.findByIdAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (error, updatedUser) => {
            if(error) {
                return res.status(400).json({ error: 'Failed to Update User' });
            }
            updatedUser.salt = undefined;
            updatedUser.encryptedPassword = undefined;
            req.status(200).json(updatedUser);
        }
    )
}