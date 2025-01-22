import { Request, Response } from 'express';
import { Despesa } from '../domain/despesa';
import { CreateDespesaUseCase } from '../application/use-cases/create-despesa-use-case';
import { GetDespesasByUserUseCase } from '../application/use-cases/get-despesas-by-user-use-case';
import { ArquivarDespesaUseCase } from '../application/use-cases/arquivar-despesa-use-case';
import { GetArquivarDespesasUseCase } from '../application/use-cases/get-arquivar-despesa-by-use-case';
import { DesarquivarDespesaUseCase } from '../application/use-cases/desarquivar-despesa-use-case';
import { DeletartDespesaUseCase } from '../application/use-cases/delete-despesa-use-casa';


export class DespesaController {
    [x: string]: any;
    constructor(
      private createDespesaUseCase: CreateDespesaUseCase,
      private getDespesasByUserUseCase: GetDespesasByUserUseCase,
      private arquivarDespesaUseCase: ArquivarDespesaUseCase,
      private getArquivarDespesaUseCase: GetArquivarDespesasUseCase,
      private desarquivarDespesaUseCase: DesarquivarDespesaUseCase,
      private deletarDespesaUseCase : DeletartDespesaUseCase
    ){}
  
    create(req: Request, res: Response) {
      const params: Despesa = req.body;
      const despesa = this.createDespesaUseCase.execute(params);
      res.status(201).json(despesa);
    }
  
    async getAll(req: Request, res: Response) {
      const userId = req.params.userId;
      const despesas = await this.getDespesasByUserUseCase.execute(userId);
      res.json(despesas);
    }


    async arquivar(req: Request, res: Response) {
      const { id } = req.params;
      await this.arquivarDespesaUseCase.execute(id);
      res.status(200).send({ message: "Despesa arquivada com sucesso." });
    }

    async getArquivar(req: Request, res: Response) {
      const despesas = await this.getArquivarDespesaUseCase.execute();
      res.json(despesas);
  }

  async Desarquivar(req: Request, res: Response) {

      const { id } = req.params;
      await this.desarquivarDespesaUseCase.execute(id);
      res.status(200).send({ message: "Desarquivada com sucesso." });
    }
  
    async deletar (req: Request, res: Response) {

      const { id } = req.params;
      await this.deletarDespesaUseCase.execute(id);
      res.status(200).send({ message: "Deletado  com sucesso." });

    }

}
 





