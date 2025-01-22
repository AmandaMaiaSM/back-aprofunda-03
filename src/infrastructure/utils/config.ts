import { RepositoryData } from '../database/repository';
import { CreateDespesaUseCase } from '../../application/use-cases/create-despesa-use-case';
import { GetDespesasByUserUseCase } from '../../application/use-cases/get-despesas-by-user-use-case';
import { DespesaController } from '../../interface/despesa-controller';
import { RepositoryAI } from '../genai/repository';
import { ChatController } from '../../interface/chat-controller';
import { CreateChatUseCase } from '../../application/use-cases/create-chat-use-case';
import { ArquivarDespesaUseCase } from '../../application/use-cases/arquivar-despesa-use-case';
import { GetArquivarDespesasUseCase } from '../../application/use-cases/get-arquivar-despesa-by-use-case';
import { DesarquivarDespesaUseCase } from '../../application/use-cases/desarquivar-despesa-use-case';
import { DeletartDespesaUseCase } from '../../application/use-cases/delete-despesa-use-casa';


export function configureDependencies() {
    const repositoryData = new RepositoryData();
    const createDespesaUseCase = new CreateDespesaUseCase(repositoryData);
    const getDespesasByUserUseCase = new GetDespesasByUserUseCase(repositoryData);
    const arquivarDespesaUseCase = new ArquivarDespesaUseCase(repositoryData);
    const getArquivarDespesasUseCase = new GetArquivarDespesasUseCase(repositoryData);
    const desarquivarDespesaUseCase = new DesarquivarDespesaUseCase(repositoryData);
    const deletarDespesaUseCase = new DeletartDespesaUseCase(repositoryData)

    const despesaController = new DespesaController(
        createDespesaUseCase, 
        getDespesasByUserUseCase, 
        arquivarDespesaUseCase, 
        getArquivarDespesasUseCase,
        desarquivarDespesaUseCase,
        deletarDespesaUseCase

        
    );

    const repositoryAI = new RepositoryAI();
    const createChatUseCase = new CreateChatUseCase(repositoryAI,repositoryData );
    const chatController = new ChatController(createChatUseCase);

    return{ despesaController,chatController };
} 