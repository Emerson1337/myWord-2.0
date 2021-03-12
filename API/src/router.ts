import { Router } from 'express'
import { AddWordsControllers } from './controllers/AddWordsControllers';
import { WelcomeController } from './controllers/WelcomeController';
import { LoginController } from './controllers/LoginController'
import { UserSignUpController } from './controllers/UserSignUpController';
import { authMiddleware } from './middlewares/auth';
import cors from 'cors'


const addWordsControllers = new AddWordsControllers();
const welcomeControllers = new WelcomeController();
const loginController = new LoginController();
const userSignUpController = new UserSignUpController();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const router = Router();

router.post('/api/insert-words', authMiddleware, addWordsControllers.create);
router.post('/api/show-words', addWordsControllers.show);
router.post('/api/signup', userSignUpController.execute);
router.post('/api/login', loginController.execute);

router.get('/api/login', cors(corsOptions), loginController.show);
router.get('/api/signup', userSignUpController.show);
router.get('/api/', welcomeControllers.execute)


export { router }