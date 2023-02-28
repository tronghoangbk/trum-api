import {Router} from 'express';
import {getHomeContent} from '../controllers/home.controller';
const HomeRouter = Router();
HomeRouter.get('/', getHomeContent);

export default HomeRouter;

