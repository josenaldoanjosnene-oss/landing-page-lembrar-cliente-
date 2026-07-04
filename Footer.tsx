export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-tight grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
            </span>
            <span className="text-[15px] font-semibold text-ink">Lembrar Cliente</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Cinco minutos por dia para nunca mais esquecer um cliente.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#" className="transition hover:text-ink">Contato</a>
          <a href="#" className="transition hover:text-ink">WhatsApp</a>
          <a href="#" className="transition hover:text-ink">Instagram</a>
          <a href="#" className="transition hover:text-ink">Termos</a>
          <a href="#" className="transition hover:text-ink">Privacidade</a>
        </nav>
      </div>
      <div className="container-tight mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lembrar Cliente. Todos os direitos reservados.
      </div>
    </footer>
  );
}
