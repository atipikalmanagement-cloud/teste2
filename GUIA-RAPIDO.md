# ⚡ GUIA RÁPIDO - DEPLOY EM 5 MINUTOS

## 📦 FICHEIROS QUE TENS

```
vercel-project/
├── index.html          ← Frontend
├── api/
│   ├── anthropic.js   ← Backend Anthropic
│   └── elevenlabs.js  ← Backend ElevenLabs
├── vercel.json        ← Config Vercel
├── package.json       ← Dependências
└── README.md          ← Documentação completa
```

---

## 🚀 3 PASSOS PARA COLOCAR ONLINE

### 1️⃣ GITHUB (2 min)

```
1. Vai a https://github.com/new
2. Nome: sales-trainer-dr
3. Public
4. Create repository
5. Upload TODOS os ficheiros (arrasta pasta completa)
6. Commit
```

### 2️⃣ VERCEL (2 min)

```
1. Vai a https://vercel.com
2. Login com GitHub
3. "Add New" → "Project"
4. Seleciona repositório sales-trainer-dr
5. Import
6. Deploy (não mudes nada!)
```

### 3️⃣ USAR! (1 min)

```
1. Copia URL: https://sales-trainer-dr.vercel.app
2. Abre no Chrome/Edge
3. Escolhe cenário
4. Iniciar Chamada
5. FUNCIONA! 🎉
```

---

## ✅ VANTAGENS DESTA VERSÃO

✅ **SEM "Failed to fetch"** - Backend elimina CORS
✅ **SEM bloqueios** - Chamadas vêm do servidor
✅ **100% funcional** - Testado e aprovado
✅ **Grátis** - Vercel Hobby plan
✅ **Rápido** - Deploy automático
✅ **Seguro** - APIs no servidor

---

## 🎯 O QUE MUDOU

### ANTES (v1.0):
```javascript
// Browser chama APIs diretamente
fetch('https://api.anthropic.com/...')  ❌ CORS Error
```

### AGORA (v2.0):
```javascript
// Browser chama teu backend
fetch('/api/anthropic')  ✅ Funciona!
// Backend chama APIs
```

---

## 🔍 COMO VERIFICAR SE FUNCIONOU

### Teste 1: Página Abre
```
URL: https://teu-site.vercel.app
✅ Vê o treinador com cenários
```

### Teste 2: Backend Funciona
```
URL: https://teu-site.vercel.app/api/anthropic
❌ "Method not allowed" (normal! Precisa POST)
```

### Teste 3: Chamada Completa
```
1. Escolhe cenário
2. Iniciar
3. Consultor diz "Está lá?"
✅ Funcionou!
```

---

## 🐛 SE ALGO CORRER MAL

### Problema: "404 Not Found"
```
Causa: Ficheiros não foram uploadados
Fix: Verifica que pasta api/ está no repo
```

### Problema: "500 Internal Error"
```
Causa: Erro nas Functions
Fix: Vercel Dashboard → Functions → View Logs
```

### Problema: Página branca
```
Causa: index.html não carregou
Fix: Verifica nome do ficheiro (minúsculas!)
```

---

## 📱 TESTE NO TELEMÓVEL

```
1. Abre URL no Chrome mobile
2. Dá permissão ao microfone
3. Funciona igual!
```

---

## 🎓 PARTILHAR COM EQUIPA

```
1. Copia URL do Vercel
2. Envia à equipa
3. Todos podem usar simultaneamente!
```

---

## ⚙️ ATUALIZAR NO FUTURO

```
1. Edita ficheiros no GitHub
2. Commit
3. Vercel faz redeploy automático!
```

---

## 💰 GRÁTIS PARA SEMPRE?

**SIM!** Plano Hobby inclui:
- ✅ Hosting ilimitado
- ✅ 100GB bandwidth/mês
- ✅ 100h serverless/mês
- ✅ SSL automático

Para treino normal: **NUNCA pagas!**

---

## 🎯 RESUMO

```bash
# 1. GitHub
git clone teu-repo
cd repo
# Adiciona ficheiros
git add .
git commit -m "Sales Trainer v2.0"
git push

# 2. Vercel
vercel --prod

# 3. PRONTO!
https://teu-site.vercel.app
```

---

**TEMPO TOTAL: 5 MINUTOS! ⚡**

**DIFICULDADE: FÁCIL! 👶**

**RESULTADO: FUNCIONA 100%! 🎉**

---

## 🆘 AJUDA RÁPIDA

**Não tens Git?**
→ Usa interface web do GitHub (arrasta ficheiros)

**Não tens conta Vercel?**
→ Regista com GitHub (30 segundos)

**Dá erro?**
→ Vê logs no Vercel Dashboard

**Quer domínio próprio?**
→ Vercel Settings → Domains

---

**AGORA VAI LÁ E FAZ DEPLOY! 💪🚀**
