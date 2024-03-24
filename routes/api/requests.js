const express = require('express');
const router = express.Router();
const requestsCtrl = require('../../controllers/requests');
const multer = require('multer');
const upload = multer();

router.post('/property/:id/requests', requestsCtrl.createRequest);

module.exports = router;
