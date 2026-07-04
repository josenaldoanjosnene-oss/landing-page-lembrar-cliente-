# Lembrar Cliente — Landing Page

Projeto 100% estático (Vite + React + Tailwind), com todos os arquivos na raiz
(sem pastas), para facilitar o upload direto pelo site do GitHub.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar build de produção

```bash
npm run build
```

Os arquivos finais vão para a pasta `dist/` (essa pasta é gerada automaticamente,
não precisa subir ela pro GitHub).

## Como subir no GitHub (upload pelo site, sem pastas)

1. Apague todos os arquivos do repositório atual (ou crie um repositório novo vazio).
2. Vá em **Add file → Upload files**.
3. Selecione **todos os arquivos** desta pasta de uma vez (Ctrl+A no Explorer) e arraste.
4. Clique em **Commit changes**.

## Conectar na Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. Selecione o repositório
3. A Netlify detecta tudo sozinha pelo `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**

Depois disso, todo `git push` (ou upload novo no GitHub) atualiza o site automaticamente.
