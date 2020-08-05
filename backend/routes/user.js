const router = require('express').Router();

const { getUserByID, getUser, updateUser } = require('../controllers/user');
const { isSignedIN, isAuthenticated, isAdmin } = require('../controllers/auth');

router.param('userID', getUserByID); // Fetch User-ID from URL

router.post('/user/:userID',isSignedIN, isAuthenticated, getUser); // Route for Getting User NOTE:- Only if User if SignedIN and is Authenticated will be able to get User
router.put('/user/:userID',isSignedIN, isAuthenticated, updateUser); // Route for Updating User NOTE:- Only If User is SignedIn and is Authenticated will be able to update User
// TODO: User-Purchase-List

module.exports = router;