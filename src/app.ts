import fastify from "fastify"
import cors from "@fastify/cors"
import { accountRoutes } from "./http/routes/accountRoutes"
import { transactionRoutes } from "./http/routes/transactionRoutes"

export const app = fastify()

app.register(cors)

app.register(accountRoutes)

app.register(transactionRoutes)

app.get("/ping", () => {
  return { pong: true }
})
