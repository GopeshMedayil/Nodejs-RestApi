import { Application, Request, Response } from 'express';
import pstCtrl from './controllers/pstCtrl';
export default class Routes {
    pstCtrl = new pstCtrl();

    constructor(app: Application) {
        this.initializeRoutes(app);
    }
    /**
     * Method to initialize all the routes for the application..
     * @param app 
     */
    private initializeRoutes(app: Application) {
        app.route('/').get(this.pstCtrl.getAtmStatus);
    }

}