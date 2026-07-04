# Lembrar Cliente — Landing Page

Projeto convertido para um site estático simples (Vite + React + Tailwind),
sem dependências de servidor. Isso torna o deploy na Netlify direto e sem erros.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Gerar build de produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

## Subir no GitHub

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin SEU_REPOSITORIO_AQUI
git push -u origin main
```

## Conectar na Netlify

1. Entre em [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
2. Escolha o repositório do GitHub.
3. A Netlify vai detectar automaticamente as configurações pelo arquivo `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Clique em **Deploy**.

A partir daí, todo `git push` para o GitHub atualiza automaticamente o site na Netlify.

## Estrutura

- `src/App.tsx` — página principal (seções da landing page)
- `src/components/landing/` — seções (Hero, Preço, FAQ, etc.)
- `src/components/ui/` — componentes de interface (shadcn/ui)
- `src/styles.css` — tema e estilos (Tailwind v4)
