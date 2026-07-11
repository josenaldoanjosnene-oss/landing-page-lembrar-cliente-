import { Nav } from "./Nav";
import { Footer } from "./Footer";

const WHATSAPP_NUMBER = "5579996818929"; // (79) 9.9681-8929
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Preciso de ajuda com o Lembrar Cliente.")}`;
const EMAIL = "rr.robison@hotmail.com";

export function Suporte() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav />
      <main className="container-tight max-w-3xl py-16">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Suporte</h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Precisa de ajuda com o Lembrar Cliente? Fale com a gente por WhatsApp ou e-mail — respondemos o
          mais rápido possível.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50 hover:shadow-md"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.6 0-3.13-.43-4.47-1.24l-.32-.19-3.11.82.83-3.03-.21-.31A8.17 8.17 0 0 1 3.86 12c0-4.5 3.66-8.16 8.18-8.16 4.5 0 8.16 3.66 8.16 8.16 0 4.5-3.66 8.18-8.16 8.18Zm4.47-6.12c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-ink">WhatsApp</div>
              <div className="mt-1 text-sm text-muted-foreground">(79) 9.9681-8929</div>
            </div>
            <span className="mt-auto text-sm font-medium text-primary">Chamar no WhatsApp →</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50 hover:shadow-md"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-ink">E-mail</div>
              <div className="mt-1 text-sm text-muted-foreground">{EMAIL}</div>
            </div>
            <span className="mt-auto text-sm font-medium text-primary">Enviar e-mail →</span>
          </a>
        </div>

        <div className="mt-12 rounded-2xl bg-secondary/40 p-6 text-sm text-muted-foreground">
          <p className="font-medium text-ink">Horário de atendimento</p>
          <p className="mt-1">Segunda a sexta, das 8h às 18h. Fora desse horário, deixe sua mensagem que respondemos assim que possível.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
