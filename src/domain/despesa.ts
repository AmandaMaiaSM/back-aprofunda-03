export interface Despesa {
    id: string;
    descricao: string;
    categoria: string;
    valor: number;
    tipo: string;
    data: string;
    userId: string
    //ed
    arquivado: boolean; //arquivar mensagem
}