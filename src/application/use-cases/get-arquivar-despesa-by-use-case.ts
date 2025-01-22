import { DespesaRepository } from "../repositores/depesa-repository";
import { Despesa } from "../../domain/despesa";

export class GetArquivarDespesasUseCase{
    constructor(

        private despesaRepository:DespesaRepository

    ){}

    async execute(): Promise<Despesa[]> {
        return await this.despesaRepository.findAquivar();
    }

}