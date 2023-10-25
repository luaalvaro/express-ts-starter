import { Router } from 'express';
import { handleHandler } from '../controllers/handler';

const router = Router();

// /**
//  * @swagger
//  * /v1/verify/phone:
//  *   post:
//  *     summary: Verificar a existência de um número do whatsapp...
//  *     description: >
//  *       Permite verificar a existência de um número do whatsapp, se ele está ativo e se ele for um contato Bussness, retorna as informações comerciais públicas.
//  *     tags:
//  *       - Verify
//  *     parameters:
//  *       - in: header
//  *         name: user_token_id
//  *         required: true
//  *         type: string
//  *         description: Token de autenticação do usuário.
//  *       - in: body
//  *         name: body
//  *         required: true
//  *         schema:
//  *           type: object
//  *           properties:
//  *             phone:
//  *               type: string
//  *               required: true
//  *         description: Dados necessários para consultar.
//  *     responses:
//  *       200:
//  *         description: Mensagem enviada com sucesso.
//  *       400:
//  *         description: Erro ao processar a solicitação. Verifique os parâmetros fornecidos.
//  *       401:
//  *         description: Não autorizado. Token de autenticação inválido ou ausente.
//  *       500:
//  *         description: Erro interno do servidor. Tente novamente mais tarde.
//  */
router.get('/test', handleHandler);

export default router;