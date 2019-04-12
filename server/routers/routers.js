import express from 'express'
import sign from '../controllers/signup'
import signin from "../controllers/signin"
import del from "../controllers/del"
import Updated from "../controllers/update"
import accounts from "../controllers/createAcc"
import transact from "../controllers/debit"
const router = express.Router()

router.post('/auth/signup', sign )
router.post('/auth/signin', signin )
router.delete('/user/:id',del)
router.patch('/user/:id',Updated)
router.post('/account',accounts)
router.post('/account/:accountNumber/debit',transact)
export default router