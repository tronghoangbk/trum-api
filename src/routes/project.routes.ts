import {Router} from 'express';
import {getProjectController, getProjectByTitleController} from '../controllers/project.controller';

const ProjectRouter = Router();
ProjectRouter.get('/', getProjectController);
ProjectRouter.get('/get-by-title/:title', getProjectByTitleController);

export default ProjectRouter;