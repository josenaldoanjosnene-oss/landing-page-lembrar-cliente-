export function FinalCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,oklch(0.72_0.18_152.5/0.35),transparent)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold text-background sm:text-4xl lg:text-5xl">
              Reserve apenas cinco minutos por dia para nunca mais esquecer um cliente.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-background/70">
              Todos os dias abra o sistema, veja quem precisa ser lembrado e envie a mensagem pelo WhatsApp com apenas um clique.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="https://lembrarcliente.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-primary !h-12 !px-6 !text-base">Começar teste grátis</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
