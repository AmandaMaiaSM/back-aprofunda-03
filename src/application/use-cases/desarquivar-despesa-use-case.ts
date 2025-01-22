import { DespesaRepository } from '../../application/repositores/depesa-repository'
import { Despesa } from '../../domain/despesa';


export class DesarquivarDespesaUseCase {
    constructor(
        private despesaRepository: DespesaRepository
    ){}

    async execute(id:string): Promise<void>{
        await this.despesaRepository.Desarquivar(id);
        
    }
}