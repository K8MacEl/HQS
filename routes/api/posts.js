const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer = require('multer');
const upload = multer();

// /*---------- Public Routes ----------*/
// /api/posts 
// 'photo' in upload.single, comes from the key 
// on the  formData.append('photo', photo) which 
// is the formData being sent from the react app(client) to express
router.post('/', upload.single('photo'), postsCtrl.create);

// /api/posts the index functions job is to return all of the posts
router.get('/', postsCtrl.index)



/*---------- Protected Routes ----------*/




module.exports = router;