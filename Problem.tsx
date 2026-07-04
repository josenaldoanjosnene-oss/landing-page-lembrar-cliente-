const items = [
  { t: "Oficina", d: "Esqueceu da revisão." },
  { t: "Salão", d: "Esqueceu do retoque." },
  { t: "Clínica", d: "Esqueceu do retorno." },
  { t: "Pet Shop", d: "Esqueceu do banho." },
  { t: "Estética", d: "Esqueceu da manutenção." },
  { t: "Ar-condicionado", d: "Esqueceu da limpeza." },
];

export function Problem() {
  return (
    <section className="border-t border-border bg-surface/50 py-24 sm:py-28">
      <div className="container-tight">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Quanto dinheiro você perde porque seus clientes simplesmente esquecem de voltar?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Seu cliente não deixa de voltar porque não gostou. Ele apenas esqueceu. Enquanto isso, seu concorrente pode conquistá-lo.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-border bg-card p-5 transition hover:shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span className="text-sm font-semibold text-ink">{i.t}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg font-medium text-ink">
          O problema não é seu serviço. É a falta de acompanhamento.
        </p>
      </div>
    </section>
  );
}
