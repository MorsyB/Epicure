import { OrdersDal } from "../dal/orders.dal";

export class OrdersService {
    public async getOrders(userName: String) {
        const dal = new OrdersDal();
        const res = await dal.getOrders(userName);
        return res;
    }
    public async getActiveOrder(userName: String) {
        const dal = new OrdersDal();
        const res = await dal.getActiveOrder(userName);
        return res;
    }

    public async createOrder(order: any) {
        const dal = new OrdersDal();
        const res = dal.createOrder(order);
        return res;
    }
}
