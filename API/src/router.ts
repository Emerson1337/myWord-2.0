import { Router } from 'express'
import { AddWordsControllers } from './controllers/AddWordsControllers';
import { WelcomeController } from './controllers/WelcomeController';
import { LoginController } from './controllers/LoginController'
import { UserSignUpController } from './controllers/UserSignUpController';
import { authMiddleware } from './middlewares/auth';
import cors from 'cors'
import { ListingWordsController } from './controllers/ListingWordsController';
import { RemoveWordsController } from './controllers/RemoveWordsController';


const addWordsControllers = new AddWordsControllers();
const welcomeControllers = new WelcomeController();
const loginController = new LoginController();
const userSignUpController = new UserSignUpController();
const listingWordsController = new ListingWordsController();
const removeWordsController = new RemoveWordsController();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const router = Router();

router.post('/api/insert-words', authMiddleware, addWordsControllers.create);
router.post('/api/remove-words', authMiddleware, removeWordsController.delete);
router.post('/api/wordslist', authMiddleware, listingWordsController.listing);
router.post('/api/signup', userSignUpController.execute);
router.post('/api/login', loginController.execute);

router.get('/api/login', cors(corsOptions), loginController.show);
router.get('/api/', welcomeControllers.execute)


export { router }