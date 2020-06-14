import express from "express";
import * as bodyParser from "body-parser";
import Routes from "./routes";
import dotenv from 'dotenv';
class ATMService {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.startServer();
        new Routes(this.app);
    }

    private config(): void {

        dotenv.config();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private startServer(): void {
        let port = process.env.PORT || 3000;
        this.app.listen(port, () => console.log(`Server running on port ${port} !`));
    }

}

export default new ATMService().app;