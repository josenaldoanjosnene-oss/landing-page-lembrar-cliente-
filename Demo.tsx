import { DashboardMock } from "./DashboardMock";

export function Demo() {
  return (
    <section id="demonstracao" className="border-y border-border bg-surface/50 py-24 sm:py-28">
      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-primary">Demonstração</div>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Tudo o que você precisa em uma única tela.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Indicadores claros, lista organizada e ação imediata. A aba "Hoje" mostra quem precisa ser lembrado e abre a conversa com um clique.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            {[
              "Indicadores de urgentes, ideais e contatados.",
              "Lista de clientes ordenada automaticamente.",
              "Botão para ver a mensagem e marcar como contatado.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
