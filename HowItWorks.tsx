const steps = [
  "Cadastre o cliente.",
  "Informe qual procedimento foi realizado.",
  "Defina em quantos dias ele deve retornar.",
  "Todos os dias abra a aba \"Hoje\".",
  "Veja exatamente quem precisa ser lembrado.",
  "Clique em \"Enviar mensagem\".",
  "O WhatsApp abre automaticamente.",
  "Pronto. Leva menos de cinco minutos.",
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 sm:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">Como funciona</div>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Simples do começo ao fim.
          </h2>
          <p className="mt-4 text-muted-foreground">Sem CRM, sem complicação. Apenas o essencial.</p>
        </div>

        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={i}
              className="group relative rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
