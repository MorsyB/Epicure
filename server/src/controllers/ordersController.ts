import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";

export class OrdersController {
    public static async getOrders(req: Request, res: Response) {
        const userName = req.params.name;
        const service = new OrdersService();
        const orders = await service.getOrders(userName);
        return res.send(orders);
    }
    public static async getActiveOrder(req: Request, res: Response) {
        const userName = req.params.name;
        const service = new OrdersService();
        const orders = await service.getActiveOrder(userName);
        return res.send(orders);
    }
    public static async createOrder(req: Request, res: Response) {
        const params = req.body;
        const service = new OrdersService();
        const order = await service.createOrder(params);
        return res.send(order);
    }
}
