import { FastifyInstance } from "fastify"

import { AccountController } from "../controllers/AccountController"

const controller = new AccountController()

export async function accountRoutes(app: FastifyInstance) {
  app.post("/accounts", controller.create.bind(controller))

  app.get("/accounts/:id", controller.findById.bind(controller))
}
