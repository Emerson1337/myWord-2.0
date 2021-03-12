if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import { router } from "./router";
import './database'
import cors from 'cors'
import express from 'express';

const App = express();
App.use(cors())


App.use(express.json())
App.use(router);


export { App };