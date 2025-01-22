import { DespesaRepository } from "../repositores/depesa-repository";

export class DeletartDespesaUseCase {
    constructor(
            private despesaRepository: DespesaRepository
        ){}
    
        async execute(id: string){
            const despesaDeletada = this.despesaRepository.deletar(id);
            if(despesaDeletada){
                return despesaDeletada;
            }else{
                return null;
            }

    }
}
