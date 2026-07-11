import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Privacidade() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav simple />
      <main className="container-tight max-w-3xl py-16">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/90">
          <section>
            <h2 className="text-lg font-semibold text-ink">1. Introdução</h2>
            <p className="mt-2">
              Esta Política de Privacidade explica como o Lembrar Cliente coleta, usa, armazena e protege
              dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 —
              LGPD). Ao usar a plataforma, você concorda com as práticas descritas aqui.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">2. Quais Dados Coletamos</h2>
            <p className="mt-2">Coletamos duas categorias principais de dados:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong>Dados da sua conta:</strong> nome, e-mail, telefone, dados de pagamento (processados por parceiros de pagamento) e informações de uso da plataforma.</li>
              <li><strong>Dados dos seus clientes:</strong> nome, telefone e histórico de procedimentos/contatos que você mesmo cadastra para usar a funcionalidade de lembretes. Você é o responsável (controlador) por esses dados; nós atuamos como operador, tratando-os apenas para viabilizar o Serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">3. Cookies e Ferramentas de Análise</h2>
            <p className="mt-2">
              Utilizamos o <strong>Microsoft Clarity</strong>, uma ferramenta de análise que registra a
              navegação no site (cliques, rolagem e gravações de sessão) para entendermos como melhorar a
              experiência do usuário. O Clarity mascara automaticamente campos sensíveis e não coleta dados
              como senhas. Saiba mais na{" "}
              <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                política de privacidade da Microsoft
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">4. Como Usamos os Dados</h2>
            <p className="mt-2">Usamos os dados coletados para:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Viabilizar o funcionamento do Serviço (cadastro de clientes, lembretes, envio de mensagens via WhatsApp);</li>
              <li>Processar pagamentos e gerenciar sua assinatura;</li>
              <li>Melhorar a plataforma com base em dados de uso e navegação;</li>
              <li>Enviar comunicações importantes sobre o Serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">5. Compartilhamento de Dados</h2>
            <p className="mt-2">
              Não vendemos dados pessoais. Compartilhamos informações apenas com prestadores de serviço
              essenciais à operação da plataforma (como processadores de pagamento e provedores de
              infraestrutura), sempre limitado ao necessário para a prestação do Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">6. Armazenamento e Segurança</h2>
            <p className="mt-2">
              Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados armazenados
              contra acesso não autorizado, perda ou alteração. Nenhum sistema é 100% imune a falhas, mas
              trabalhamos continuamente para manter a plataforma segura.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">7. Seus Direitos como Titular de Dados</h2>
            <p className="mt-2">Conforme a LGPD, você pode, a qualquer momento, solicitar:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso, correção ou atualização dos seus dados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portabilidade dos dados a outro fornecedor;</li>
              <li>Exclusão da sua conta e dos dados associados.</li>
            </ul>
            <p className="mt-2">
              Para exercer esses direitos, entre em contato pelos canais de suporte da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">8. Retenção de Dados</h2>
            <p className="mt-2">
              Mantemos seus dados enquanto sua conta estiver ativa ou pelo tempo necessário para cumprir
              obrigações legais, fiscais ou regulatórias. Ao solicitar o cancelamento da conta, os dados
              podem ser excluídos ou anonimizados, salvo obrigação legal de retenção.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">9. Alterações nesta Política</h2>
            <p className="mt-2">
              Podemos atualizar esta Política de Privacidade periodicamente. Alterações relevantes serão
              comunicadas por e-mail ou aviso na plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">10. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados,
              entre em contato através dos canais de suporte disponíveis na plataforma.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
