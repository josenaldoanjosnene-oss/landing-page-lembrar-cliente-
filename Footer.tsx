import logo from "./logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-tight grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
          <img src={logo} alt="Lembrar Cliente — O cliente esquece. A gente lembra." className="h-40 w-40 object-contain" />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Cinco minutos por dia para nunca mais esquecer um cliente.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="/suporte.html" className="transition hover:text-ink">Suporte</a>
          <a href="#" className="transition hover:text-ink">Instagram</a>
          <a href="/termos.html" className="transition hover:text-ink">Termos</a>
          <a href="/privacidade.html" className="transition hover:text-ink">Privacidade</a>
        </nav>
      </div>
      <div className="container-tight mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lembrar Cliente. Todos os direitos reservados.
      </div>
    </footer>
  );
}
