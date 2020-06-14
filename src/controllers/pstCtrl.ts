import { Request, Response, NextFunction } from 'express';
const logger = require('../middlewares/logger');

export default class pstCtrl {

    constructor() { }

    public async getAtmStatus(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            logger.info("Winston logger works!", { c: 1 })

            return res.json({ msg: 'Routed succesfully!!!' });
        }
        catch (e) {
            //Error handling goes here
            return res.json({ msg: 'Error' });
        }
    }
}