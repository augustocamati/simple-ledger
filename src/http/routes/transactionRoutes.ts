import { FastifyInstance } from "fastify"

import { TransactionController } from "../controllers/TransactionController"

const controller = new TransactionController()

export async function transactionRoutes(app: FastifyInstance) {
  app.post("/transactions", controller.create.bind(controller))
}
