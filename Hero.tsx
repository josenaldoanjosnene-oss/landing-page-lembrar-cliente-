import { DashboardMock } from "./DashboardMock";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.96_0.06_152/0.5),transparent)]" />
      <div className="container-tight grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Teste grátis por 7 dias · sem cartão
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Nunca mais esqueça <br className="hidden sm:block" />
            de chamar um cliente.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Todos os dias o sistema mostra exatamente quais clientes precisam ser lembrados. Com apenas um clique, o WhatsApp abre com a mensagem pronta.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#preco" className="btn-primary">Começar teste grátis</a>
            <a href="#demonstracao" className="btn-ghost">Ver demonstração</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Cinco minutos por dia
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Sem instalação
            </div>
          </div>
        </div>
        <div className="fade-up [animation-delay:120ms]">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
