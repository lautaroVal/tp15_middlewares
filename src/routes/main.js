const router = require('express').Router()
const {index, music, about, contact, admin, login, noentry} = require('../controllers/mainController')


const accessAdmin = require('../middlewares/accessAdmin')
router
   .get('/', index)
   .get('/music', music)
   .get('/about', about)
   .get('/contact', contact)
   .get('/admin',accessAdmin, admin)
   .get('/login', login)
   .get('/noentry', noentry)



module.exports = router;