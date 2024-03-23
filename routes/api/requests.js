const express = require('express');
const router = express.Router();
const requestsCtrl = require('../../controllers/properties');
const multer = require('multer');
const upload = multer();

router.post('/property/:id/requests', requestsCtrl.create);

module.exports = router;
