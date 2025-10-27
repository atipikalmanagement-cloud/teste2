// Vercel Serverless Function para Anthropic
// Caminho: api/anthropic.js

export default async function handler(req, res) {
    // Permitir CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Só aceitar POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // API Key (melhor usar variável de ambiente, mas por agora no código)
    const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || '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';

    try {
        const { messages, system, max_tokens = 300 } = req.body;

        console.log('Recebido pedido para Anthropic:', {
            messagesCount: messages?.length,
            systemLength: system?.length,
            max_tokens
        });

        // Fazer chamada à API da Anthropic
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ANTHROPIC_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: max_tokens,
                system: system,
                messages: messages
            })
        });

        console.log('Resposta Anthropic:', response.status);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Erro Anthropic API:', errorData);
            return res.status(response.status).json({
                error: errorData.error?.message || 'Erro na API Anthropic',
                details: errorData
            });
        }

        const data = await response.json();
        console.log('Sucesso! Resposta recebida da Anthropic');

        return res.status(200).json(data);

    } catch (error) {
        console.error('Erro no servidor:', error);
        return res.status(500).json({
            error: 'Erro interno do servidor',
            message: error.message
        });
    }
}
