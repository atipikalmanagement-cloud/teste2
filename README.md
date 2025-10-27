# 🚀 Treinador de Vendas Digital Revolution v2.0

## ✨ Versão com Backend Serverless - SEM Problemas de CORS!

Esta versão usa **Vercel Serverless Functions** para eliminar completamente problemas de CORS, bloqueios de rede e outros erros de "Failed to fetch".

---

## 📁 ESTRUTURA DO PROJETO

```
vercel-project/
├── index.html              # Frontend principal
├── api/
│   ├── anthropic.js       # Backend para Anthropic API
│   └── elevenlabs.js      # Backend para ElevenLabs API
├── vercel.json            # Configuração Vercel
├── package.json           # Dependências
└── README.md              # Este ficheiro
```

---

## 🚀 COMO FAZER DEPLOY NO VERCEL

### OPÇÃO 1: Via GitHub (Recomendado)

#### PASSO 1: Criar Repositório no GitHub

1. Vai a: https://github.com/new
2. Nome: `sales-trainer-dr` (ou outro)
3. Marca como "Public"
4. Clica "Create repository"

#### PASSO 2: Fazer Upload dos Ficheiros

**Método A: Via Web (Mais Fácil)**

1. No repositório, clica em "uploading an existing file"
2. Arrasta TODOS os ficheiros da pasta `vercel-project`:
   - index.html
   - vercel.json
   - package.json
   - README.md
   - pasta `api/` com os 2 ficheiros dentro
3. Clica "Commit changes"

**Método B: Via Git (Se tiveres Git instalado)**

```bash
cd vercel-project
git init
git add .
git commit -m "Initial commit - Sales Trainer v2.0"
git branch -M main
git remote add origin https://github.com/teu-username/sales-trainer-dr.git
git push -u origin main
```

#### PASSO 3: Conectar ao Vercel

1. Vai a: https://vercel.com
2. Login (usa conta GitHub)
3. Clica "Add New" → "Project"
4. Clica "Import Git Repository"
5. Escolhe o repositório `sales-trainer-dr`
6. Clica "Import"

#### PASSO 4: Configurar e Deploy

1. **Framework Preset:** Leave as "Other"
2. **Root Directory:** `./` (deixa como está)
3. **Build Command:** (deixa vazio)
4. **Output Directory:** (deixa vazio)
5. **Environment Variables:** (opcional, já estão no vercel.json)
6. Clica **"Deploy"**

#### PASSO 5: Aguardar Deploy

- Deploy demora 1-3 minutos
- Quando terminar, aparece: **"🎉 Congratulations!"**
- Copia o URL: `https://sales-trainer-dr.vercel.app` (ou similar)

#### PASSO 6: TESTAR!

1. Abre o URL no browser
2. Escolhe um cenário
3. Clica "Iniciar Chamada"
4. **FUNCIONA!** 🎉

---

### OPÇÃO 2: Deploy Direto (Sem GitHub)

Se não quiseres usar GitHub:

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Entra na pasta do projeto:
```bash
cd vercel-project
```

3. Faz login:
```bash
vercel login
```

4. Deploy:
```bash
vercel --prod
```

5. Segue as instruções e pronto!

---

## 🔧 COMO FUNCIONA

### Antes (v1.0 - com problemas):
```
Browser → API Anthropic (BLOQUEADO por CORS)
Browser → API ElevenLabs (BLOQUEADO por CORS)
```

### Agora (v2.0 - sem problemas):
```
Browser → /api/anthropic (Vercel Function) → API Anthropic ✅
Browser → /api/elevenlabs (Vercel Function) → API ElevenLabs ✅
```

**As Vercel Functions:**
- Correm no servidor (não no browser)
- Não têm problemas de CORS
- Não são bloqueadas por firewalls/antivírus
- São **gratuitas** no plano Hobby do Vercel!

---

## 🎯 CENÁRIOS DISPONÍVEIS

1. **✅ Consultor Qualificado e Interessado**
   - Preencheu formulário, qualificado (50k€+/ano)
   - Genuinamente interessado em marketing digital
   - Bom para praticar apresentação e qualificação básica

2. **❌ Consultor Não Qualificado**
   - Só 8 meses de experiência (mínimo 1,5 anos)
   - Fatura apenas 15k€/ano (mínimo 50k€)
   - Pratica desqualificação educada e profissional

3. **🤔 Consultor Qualificado mas Frio/Esquecido**
   - É qualificado mas não se lembra do formulário
   - Frio e ocupado no início
   - Pratica despertar interesse e criar curiosidade

---

## ⚙️ VARIÁVEIS DE AMBIENTE (Opcional)

Se quiseres mais segurança, podes mover as API keys para variáveis de ambiente:

1. No Vercel Dashboard → Project → Settings → Environment Variables
2. Adiciona:
   - `ANTHROPIC_API_KEY` = `sk-ant-api03-...`
   - `ELEVENLABS_API_KEY` = `sk_2ebee...`
3. Remove do `vercel.json` (secção "env")
4. Redeploy

---

## 🐛 TROUBLESHOOTING

### "Failed to fetch /api/anthropic"

**Causa:** Functions não foram deployadas corretamente

**Solução:**
1. Verifica que a pasta `api/` está no repositório
2. Verifica que `vercel.json` tem a configuração correta
3. Faz redeploy: git push ou na interface Vercel

---

### "500 Internal Server Error"

**Causa:** Erro nas API keys ou nas functions

**Solução:**
1. Verifica logs no Vercel Dashboard → Deployments → Functions
2. Verifica se API keys são válidas
3. Testa manualmente as APIs (ver abaixo)

---

### Testar APIs Manualmente

**Anthropic:**
```bash
curl -X POST https://teu-site.vercel.app/api/anthropic \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"oi"}],"system":"És simpático","max_tokens":10}'
```

**ElevenLabs:**
```bash
curl -X POST https://teu-site.vercel.app/api/elevenlabs \
  -H "Content-Type: application/json" \
  -d '{"text":"Olá"}' \
  --output test.mp3
```

---

## 📊 CUSTOS

### Vercel
- **Grátis** no plano Hobby:
  - 100GB bandwidth/mês
  - 100 horas serverless execution/mês
  - Deploy ilimitado
  - SSL automático

### APIs
- **Anthropic:** ~$3 por 1000 conversas
- **ElevenLabs:** 10.000 caracteres grátis/mês (~40 chamadas)

Para uso normal de treino: **praticamente grátis!**

---

## 🔒 SEGURANÇA

As API keys estão no código/variáveis de ambiente (não expostas ao browser).

Para produção com múltiplos users, recomenda-se:
1. Autenticação de users
2. Rate limiting
3. API keys em secrets do Vercel
4. Logging e monitoring

---

## 📈 PRÓXIMOS PASSOS

Depois de funcionar:

1. **Domínio Personalizado:**
   - Vercel Settings → Domains
   - Adiciona: `treino.digitalrevolution.pt`

2. **Analytics:**
   - Vercel Analytics (grátis)
   - Rastreia uso e performance

3. **Melhorias:**
   - Adicionar mais cenários
   - Gravação de chamadas
   - Dashboard com estatísticas

---

## 🆘 SUPORTE

Se tiveres problemas:

1. Verifica logs: Vercel Dashboard → Deployments → Functions → View Logs
2. Abre console do browser (F12) e vê erros
3. Testa URLs das functions diretamente

---

## ✅ CHECKLIST DE DEPLOYMENT

- [ ] Todos os ficheiros no GitHub
- [ ] Estrutura de pastas correta (api/ com os 2 ficheiros)
- [ ] Vercel conectado ao repositório
- [ ] Deploy concluído com sucesso
- [ ] URL abre e mostra a página
- [ ] Cenários carregam
- [ ] Microfone funciona (dar permissão)
- [ ] Consultor responde em voz

---

**Pronto! Agora é só fazer deploy e usar! 🚀**

**Tempo total:** 10-15 minutos do zero ao funcional!
