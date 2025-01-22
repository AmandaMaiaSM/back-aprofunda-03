import { DespesaRepository } from '../repositores/depesa-repository';
import { Despesa } from '../../domain/despesa';

export class GetDespesasByUserUseCase {
    constructor(
        private despesaRepository: DespesaRepository
    ){}

    async execute( userId: string): Promise<Despesa[]>{
        const allDespesas =  await this.despesaRepository.findAll();

        const despesasByUse = allDespesas.filter(despesa => despesa.userId === userId);

        return despesasByUse;
    }

}