import { useState } from "react";

const faqs = [
  {
    q: "O sistema envia mensagens sozinho?",
    a: "Não. Você continua enviando pelo seu próprio WhatsApp. O sistema apenas mostra quem precisa ser lembrado e abre a conversa pronta com um clique.",
  },
  { q: "Preciso instalar?", a: "Não. É totalmente online." },
  { q: "Posso usar no celular?", a: "Sim." },
  { q: "Posso cancelar quando quiser?", a: "Sim. Não existe fidelidade." },
  { q: "Quanto custa?", a: "R$ 37,90 por mês." },
  { q: "Tenho teste grátis?", a: "Sim. Você pode utilizar durante 7 dias sem custo." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border bg-surface/50 py-24 sm:py-28">
      <div className="container-tight grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-primary">FAQ</div>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Perguntas frequentes.
          </h2>
          <p className="mt-4 text-muted-foreground">Se ficou uma dúvida, é bem provável que esteja aqui.</p>
        </div>
        <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-medium text-ink sm:text-base">{f.q}</span>
                  <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition ${isOpen ? "rotate-45" : ""}`}>
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 -mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
