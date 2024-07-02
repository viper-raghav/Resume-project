import express from 'express';
import { homecontroller } from '../controller/homecontroller.js';
import { contactcontroller } from '../controller/contactcontroller.js';
import { serivcecontroller } from '../controller/serivcecontroller.js';
import { skillcontroller } from '../controller/skillcontroller.js';

const router = express.Router();

router.get('/', homecontroller);
router.get('/contact', contactcontroller);
router.get('/service', serivcecontroller);
router.get('/skill', skillcontroller);


export default router;
