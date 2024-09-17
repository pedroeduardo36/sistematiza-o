import styles from "./infos.module.css";

export function Infos() {
  return (
    <div className={styles.infoContainer}>
      <strong>Informações importantes</strong>

      <div className={styles.textContainer}>
        <div>
          <p>
            Endereço: Rua Saúde e Bem-Estar, 123Bairro Centro, Cidade Exemplo,
            CEP 12345-678
            <br /> Horário de Funcionamento: Segunda a Sexta: 07:00h - 19:00h
            <br />
            Sábados: 08:00h - 14:00 Domingos e Feriados: Fechado
          </p>
        </div>
        <div>
          <p>
            Contato: Telefone: (11) 1234-5678
            <br />
            WhatsApp: (11) 91234-5678
            <br />
            E-mail: atendimento@clinicavidaplena.com
            <div>
              <p>
                Aceitamos diversos planos de saúde. Consulte nossa equipe para
                verificar a cobertura do seu convênio.
                <br />
                Agendamentos: Para sua comodidade, realizamos agendamentos
                online e via telefone.
                <br /> Atendemos pacientes particulares e de convênios.
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
