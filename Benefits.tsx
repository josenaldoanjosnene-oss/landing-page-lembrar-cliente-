const benefits = [
  { t: "Nunca esqueça um cliente", d: "O sistema organiza por você quem precisa ser lembrado hoje." },
  { t: "Mais retorno, mais receita", d: "Clientes voltando de forma consistente todos os meses." },
  { t: "Tudo em um único lugar", d: "Clientes, procedimentos e mensagens em uma única tela." },
  { t: "Interface simples", d: "Aprenda em poucos minutos. Sem manual, sem treinamento." },
  { t: "Funciona em qualquer computador", d: "Totalmente online. Sem instalação, sem configuração." },
  { t: "Cinco minutos por dia", d: "Abra o sistema, envie as mensagens e siga o seu dia." },
];

export function Benefits() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">Benefícios</div>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-ink sm:text-4xl">
            O que muda no seu dia a dia.
          </h2>
        </div>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-soft)]">
              <h3 className="text-base font-semibold text-ink">{b.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
