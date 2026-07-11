import logo from "./logo.png";

export function Nav({ simple = false }: { simple?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-tight flex items-center justify-between py-2">
        <a href={simple ? "/" : "#top"} className="flex items-center gap-2">
          <img src={logo} alt="Lembrar Cliente — O cliente esquece. A gente lembra." className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20" />
          <span className="text-[15px] font-semibold tracking-tight text-ink">Lembrar Cliente</span>
        </a>
        {!simple && (
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#como-funciona" className="text-sm text-muted-foreground transition hover:text-ink">Como funciona</a>
            <a href="#demonstracao" className="text-sm text-muted-foreground transition hover:text-ink">Demonstração</a>
            <a href="#preco" className="text-sm text-muted-foreground transition hover:text-ink">Preço</a>
            <a href="#faq" className="text-sm text-muted-foreground transition hover:text-ink">FAQ</a>
          </nav>
        )}
        <div className="flex items-center gap-2">
          <a href="https://lembrarcliente.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary !h-10 !px-4 !text-sm">Começar teste grátis</a>
        </div>
      </div>
    </header>
  );
}
