const included = [
  "Cadastro ilimitado de clientes",
  "Cadastro de procedimentos",
  "Agenda diária",
  "Lista de clientes para lembrar",
  "Mensagem pronta",
  "Abertura direta no WhatsApp",
  "Histórico de contatos",
  "Atualizações",
  "Suporte",
  "Teste grátis de 7 dias",
];

export function Pricing() {
  return (
    <section id="preco" className="py-24 sm:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">Plano</div>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Um cliente recuperado já paga a assinatura.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-lift)]">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Plano único
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-ink">R$ 37,90</span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Cancele quando quiser. Sem fidelidade.</p>

              <a href="#" className="btn-primary mt-6 !h-12 w-full !text-base">Começar Agora</a>

              <div className="mt-8 h-px bg-border" />
              <ul className="mt-6 grid gap-2.5">
                {included.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">7 dias grátis · sem cartão de crédito</p>
        </div>
      </div>
    </section>
  );
}
