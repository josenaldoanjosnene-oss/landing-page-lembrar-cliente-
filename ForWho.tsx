const segments = [
  "Clínicas", "Dentistas", "Salões", "Barbearias", "Estética", "Pet Shops",
  "Oficinas", "Piscinas", "Ar-condicionado", "Assistências técnicas", "Academias",
  "Consultórios", "Lavagem automotiva",
];

export function ForWho() {
  return (
    <section className="border-t border-border bg-surface/50 py-24 sm:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">Para quem é</div>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Feito para negócios que dependem de retorno.
          </h2>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {segments.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-ink transition hover:border-primary/40 hover:text-primary">
              {s}
            </span>
          ))}
          <span className="rounded-full bg-ink px-4 py-2 text-sm text-background">
            E qualquer empresa com retorno de clientes
          </span>
        </div>
      </div>
    </section>
  );
}
