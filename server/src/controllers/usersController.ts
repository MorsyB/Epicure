import e, { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class UsersController {
    public static async getUser(req: Request, res: Response) {
        const email = req.params.email;
        const password = req.params.password;
        const service = new UsersService();
        const user = await service.getUser(email, password);
        let status = 400;
        if(user.length == 1 && user[0] != 'password' && user[0] != 'Email')
            status = 200
        return res.status(status).send(user);
    }

    public static async createUser(req: Request, res: Response) {
        const params = req.body;
        const service = new UsersService();
        const user = await service.createUser(params);
        return res.send(user);
    }
}
