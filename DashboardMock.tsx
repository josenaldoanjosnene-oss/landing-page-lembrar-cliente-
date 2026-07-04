export function DashboardMock() {
  const clients = [
    { name: "Ana Ribeiro", service: "Retoque de cor", days: "hoje", tag: "urgente" },
    { name: "Carlos Mendes", service: "Revisão 10.000 km", days: "hoje", tag: "urgente" },
    { name: "Júlia Prado", service: "Limpeza de pele", days: "em 2 dias", tag: "ideal" },
    { name: "Rafael Souza", service: "Banho e tosa", days: "em 3 dias", tag: "ideal" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.02_30)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.9_0.05_90)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.08_150)]" />
          <div className="mx-auto text-xs text-muted-foreground">lembrarcliente.app</div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-0 sm:grid-cols-[180px_minmax(0,1fr)]">
          {/* sidebar */}
          <aside className="hidden border-r border-border bg-surface/40 p-4 sm:block">
            <div className="space-y-1 text-sm">
              {[
                { l: "Hoje", active: true, badge: "12" },
                { l: "Clientes" },
                { l: "Procedimentos" },
                { l: "Histórico" },
                { l: "Configurações" },
              ].map((i) => (
                <div
                  key={i.l}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                    i.active ? "bg-primary/10 text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span className="font-medium">{i.l}</span>
                  {i.badge && (
                    <span className="rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
                      {i.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Agenda</div>
                <h3 className="text-lg font-semibold text-ink">Hoje</h3>
              </div>
              <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
                <span className="pulse-dot h-2 w-2 rounded-full bg-primary" />
                Atualizado agora
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { l: "Urgentes", v: "4", c: "text-[oklch(0.55_0.2_25)]" },
                { l: "No ponto ideal", v: "8", c: "text-primary" },
                { l: "Contatados", v: "23", c: "text-muted-foreground" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-background p-3">
                  <div className={`text-2xl font-semibold tracking-tight ${s.c}`}>{s.v}</div>
                  <div className="text-[11px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            {/* list */}
            <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-background">
              {clients.map((c, i) => (
                <div key={i} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-3 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                      {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-ink">{c.name}</div>
                      <div className="truncate text-xs text-muted-foreground">{c.service} · {c.days}</div>
                    </div>
                  </div>
                  <span
                    className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium sm:inline ${
                      c.tag === "urgente"
                        ? "bg-[oklch(0.96_0.05_25)] text-[oklch(0.5_0.2_25)]"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {c.tag}
                  </span>
                  <button className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition hover:brightness-95">
                    Enviar mensagem
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
