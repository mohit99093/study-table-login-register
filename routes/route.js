const express = require('express')
const ctrl    = require('../controllers/control')

const router = new express.Router()

router.post('/api/info',ctrl.postContact)
router.post('/api/email',ctrl.postEmail)
router.post('/api/register' , ctrl.postRegister)
router.post('/api/signin' , ctrl.signin)
router.post('/api/forgot',ctrl.sendOTP)
router.post('/api/changePassword',ctrl.changePassword)


module.exports = router;