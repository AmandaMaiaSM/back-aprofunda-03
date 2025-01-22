import { DespesaRepository } from '../../application/repositores/depesa-repository'
import { Despesa } from '../../domain/despesa';
import { DespesaModel } from './model';

export class RepositoryData implements DespesaRepository {
    
    findAquivar(): Promise<Array<Despesa>> {
        throw new Error('Method not implemented.');
    }
    async save (despesa: Despesa): Promise<void> {
        const newDespesa = new DespesaModel(despesa)
        await newDespesa.save();
    }

    async findAll (): Promise<Array<Despesa>> {
    const despesas = await DespesaModel.find();

    const translatedDespesas = despesas.map(item => {
        return {
            id: item._id.toString(),
            descricao: item.descricao,
            categoria: item.categoria,
            valor: item.valor,
            tipo: item.tipo,
            data: item.data,
            userId: item.userId,
            //ed
            arquivado: item.arquivado
        }
    }) as Array<Despesa>

    return translatedDespesas;
    }

    //adcionando o metodo arquivar que vai procurar uma despesa pelo ID

    async arquivar(id: string): Promise<void> {
        try {
            const despesa = await DespesaModel.findById(id);
            if (despesa) {
                despesa.arquivado = true; 
                await despesa.save();
            }
        } catch (error) {
            console.error("Erro ao arquivar a despesa: ", error);
        }
    }
    
    async findArquivar(): Promise<Array<Despesa>> { // Implementando findArquivar aqui
        const despesas = await DespesaModel.find({ arquivar: true });
        const translatedDespesas = despesas.map(item => {
            return {
                id: item._id.toString(),
                descricao: item.descricao,
                categoria: item.categoria,
                valor: item.valor,
                tipo: item.tipo,
                data: item.data,
                userId: item.userId
            };
        }) as Array<Despesa>;
        return translatedDespesas;
    }

    
    //adcionando o metodo arquivar que vai procurar uma despesa pelo ID

    async Desarquivar(id: string): Promise<void> {
        try {
            const despesa = await DespesaModel.findById(id);
            if (despesa) {
                despesa.arquivado = false; 
                await despesa.save();
            }
        } catch (error) {
            console.error("Erro ao arquivar a despesa: ", error);
        }
    }
}