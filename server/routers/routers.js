import express from 'express'
import sign from '../controllers/signup'
import signin from "../controllers/signin"
import del from "../controllers/del"
import Updated from "../controllers/update"
import accounts from "../controllers/createAcc"
import transact from "../controllers/debit"
import userValidator from "../middleware/userValidator"
import signinValidator from '../middleware/signinValidator';
import createAccountValidator from '../middleware/createAccountValidator';

const router = express.Router()
const signupReq  = userValidator();
const signinReg = signinValidator();
const created = createAccountValidator();
router.post('/auth/signup',signupReq , sign )
router.post('/auth/signin', signinReg, signin )
router.delete('/user/:id',del)
router.patch('/user/:id',Updated)
router.post('/account',created,accounts)
router.post('/account/:accountNumber/debit',transact)
export default router