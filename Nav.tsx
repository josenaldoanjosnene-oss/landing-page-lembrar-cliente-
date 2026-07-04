export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">Lembrar Cliente</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#como-funciona" className="text-sm text-muted-foreground transition hover:text-ink">Como funciona</a>
          <a href="#demonstracao" className="text-sm text-muted-foreground transition hover:text-ink">Demonstração</a>
          <a href="#preco" className="text-sm text-muted-foreground transition hover:text-ink">Preço</a>
          <a href="#faq" className="text-sm text-muted-foreground transition hover:text-ink">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://lembrarcliente.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary !h-10 !px-4 !text-sm">Começar teste grátis</a>
        </div>
      </div>
    </header>
  );
}
