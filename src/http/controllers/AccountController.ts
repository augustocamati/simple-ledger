import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateAccountUseCase } from "../../main/factories/makeCreateAccountUseCase";
import { makeGetAccountUseCase } from "../../main/factories/makeGetAccountUseCase";
import { z } from "zod"
import { createAccountSchema, getAccountSchema } from "../validator/AccountValidator";



export class AccountController{

  async create(req: FastifyRequest, res: FastifyReply){
const body = createAccountSchema.parse(req.body)

    const usecase = makeCreateAccountUseCase()

    const account = await usecase.execute(body)

   return res
    .status(201)
    .send(account)

  }

  async findById(req: FastifyRequest, res: FastifyReply){
    const id = getAccountSchema.parse(req.params).id
    const usecase = makeGetAccountUseCase()
    const account = await usecase.execute(id)

    return res
    .status(200)
    .send(account)
  }
}