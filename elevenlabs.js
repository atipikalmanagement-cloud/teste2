// Vercel Serverless Function para ElevenLabs
// Caminho: api/elevenlabs.js

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

    // API Key (melhor usar variável de ambiente)
    const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY || 'sk_2ebee93f290d124cf8498ca58d3bcf7c3e8aa7e3fcb68670';
    const VOICE_ID = req.body.voice_id || '21m00Tcm4TlvDq8ikWAM';

    try {
        const { text, voice_settings } = req.body;

        if (!text) {
            return res.status(400).json({ error: 'Texto é obrigatório' });
        }

        console.log('Gerando voz para texto:', text.substring(0, 50) + '...');

        // Fazer chamada à API da ElevenLabs
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': ELEVENLABS_KEY
            },
            body: JSON.stringify({
                text: text,
                model_id: 'eleven_multilingual_v2',
                voice_settings: voice_settings || {
                    stability: 0.5,
                    similarity_boost: 0.75
                }
            })
        });

        console.log('Resposta ElevenLabs:', response.status);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Erro ElevenLabs API:', errorData);
            return res.status(response.status).json({
                error: errorData.detail?.message || 'Erro na API ElevenLabs',
                details: errorData
            });
        }

        // Retornar o áudio como buffer
        const audioBuffer = await response.arrayBuffer();
        
        console.log('Áudio gerado com sucesso, tamanho:', audioBuffer.byteLength);

        // Definir headers para áudio
        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Content-Length', audioBuffer.byteLength);

        return res.status(200).send(Buffer.from(audioBuffer));

    } catch (error) {
        console.error('Erro no servidor:', error);
        return res.status(500).json({
            error: 'Erro interno do servidor',
            message: error.message
        });
    }
}
