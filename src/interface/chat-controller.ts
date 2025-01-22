import { Request, Response } from 'express';
import { CreateChatUseCase } from '../application/use-cases/create-chat-use-case';
import { CreateDespesaUseCase } from '../application/use-cases/create-despesa-use-case';
import { GetDespesasByUserUseCase } from '../application/use-cases/get-despesas-by-user-use-case';
import { create } from 'domain';

export class ChatController {
    constructor(
        private createChatUseCase: CreateChatUseCase
    ){}

    async open( req: Request, res: Response){
        const {uid, message} = req.body


        try{
            const chatSession = await this.createChatUseCase.execute(uid, message)
            res.status(201).json(chatSession)

        }catch(error: any){
            res.status(400).json({error: error.message})
        }
    }

}
