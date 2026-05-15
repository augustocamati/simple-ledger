import fastify from "fastify";
import cors from "@fastify/cors";

export const app = fastify()

app.register(cors)

app.get('/ping', () => {
  return { pong: true }
})