import { DespesaRepository } from "../repositores/depesa-repository";

export class ArquivarDespesaUseCase {
    constructor(
        private despesaRepository: DespesaRepository
    ){}

    async execute(id:string): Promise<void>{
        await this.despesaRepository.arquivar(id);
    }
}