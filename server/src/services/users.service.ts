import { UsersDal } from "../dal/users.dal";

export class UsersService {
    public async getUser(email: String, password: String) {
        const dal = new UsersDal();
        const res = await dal.getUser(email, password);
        return res;
    }

    public async createUser(user: any) {
        const dal = new UsersDal();
        const res = await dal.createUser(user);
        return res;
    }
}
