const express = require('express');
const router = express.Router();
const inspectionsCtrl = require('../../controllers/inspections');
const multer = require('multer');
const upload = multer();

router.post('/properties/:id/inspections',inspectionsCtrl.create)

module.exports = router;