import {NextFunction, Request, Response} from "express";
import path from "path";

export class HttpException extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export const errorMiddleware = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    console.log('Status : ' + status);
    console.log('Message : ' + message);
    response.status( status );
    response.sendFile(path.join(__dirname, './static/500Error.html'))
}
