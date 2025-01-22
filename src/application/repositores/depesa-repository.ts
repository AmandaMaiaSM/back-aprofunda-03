import { Despesa } from '../../domain/despesa';

export interface DespesaRepository {
    arquivar(id: string): unknown;
    save(despesa:Despesa): Promise<void>;
    findAll(): Promise<Despesa[]>;
    arquivar(id: string): Promise<void>;
    findAquivar(): Promise<Array<Despesa>>;
    Desarquivar(id: string): Promise<void>


}