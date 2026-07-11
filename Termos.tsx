import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Termos() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav />
      <main className="container-tight max-w-3xl py-16">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Termos de Uso</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/90">
          <section>
            <h2 className="text-lg font-semibold text-ink">1. Aceitação dos Termos</h2>
            <p className="mt-2">
              Ao acessar ou usar o Lembrar Cliente ("Serviço", "Plataforma"), você concorda com estes
              Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar
              o Serviço. O uso continuado da plataforma após alterações nestes termos representa aceitação
              das mudanças.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">2. Descrição do Serviço</h2>
            <p className="mt-2">
              O Lembrar Cliente é uma ferramenta que ajuda pequenos negócios a organizar o cadastro de
              clientes e procedimentos, e a gerar lembretes de contato com envio de mensagens via WhatsApp.
              O Serviço não envia mensagens automaticamente em nome do usuário; ele apenas prepara o texto
              e abre a conversa no WhatsApp, cabendo ao usuário confirmar e enviar.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">3. Cadastro e Conta</h2>
            <p className="mt-2">
              Para usar o Serviço, você deve fornecer informações verdadeiras, completas e atualizadas no
              momento do cadastro. Você é responsável por manter a confidencialidade de sua senha e por
              todas as atividades realizadas em sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">4. Assinatura, Pagamento e Cancelamento</h2>
            <p className="mt-2">
              O acesso ao Serviço é oferecido por meio de assinatura mensal recorrente. Você pode cancelar
              a qualquer momento, sem multa ou fidelidade; o cancelamento interrompe as cobranças futuras,
              mas não gera reembolso proporcional ao período já pago, salvo quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">5. Uso Adequado</h2>
            <p className="mt-2">
              Você concorda em não utilizar o Serviço para fins ilegais, para enviar spam, ou para armazenar
              dados de terceiros sem autorização adequada. Reservamo-nos o direito de suspender contas que
              violem estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">6. Dados dos Clientes Cadastrados</h2>
            <p className="mt-2">
              Você é o responsável (controlador) pelos dados dos seus clientes que cadastrar na plataforma,
              e deve garantir que possui base legal e consentimento adequado para armazená-los e utilizá-los,
              conforme a Lei Geral de Proteção de Dados (LGPD). Mais detalhes sobre como tratamos esses dados
              estão na nossa <a href="/privacidade.html" className="text-primary underline">Política de Privacidade</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">7. Propriedade Intelectual</h2>
            <p className="mt-2">
              Todo o conteúdo, marca, design e código da plataforma Lembrar Cliente são de propriedade
              exclusiva do Lembrar Cliente, sendo vedada a reprodução, cópia ou engenharia reversa sem
              autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">8. Limitação de Responsabilidade</h2>
            <p className="mt-2">
              O Serviço é fornecido "como está". Não garantimos disponibilidade ininterrupta e não nos
              responsabilizamos por perdas decorrentes de uso indevido da plataforma, falhas de conexão do
              usuário, ou indisponibilidade temporária de serviços de terceiros (como o próprio WhatsApp).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">9. Alterações nestes Termos</h2>
            <p className="mt-2">
              Podemos atualizar estes Termos de Uso periodicamente. Alterações relevantes serão comunicadas
              por e-mail ou aviso na plataforma, com razoável antecedência quando possível.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">10. Lei Aplicável e Foro</h2>
            <p className="mt-2">
              Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro do
              domicílio do usuário para dirimir eventuais controvérsias, salvo disposição legal em contrário.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">11. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato através dos canais de suporte
              disponíveis na plataforma.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
