import { BowlFood, Radioactive, Stethoscope } from "@phosphor-icons/react";
import styles from "./Services.module.css";
import { FirstAid } from "phosphor-react";

export function Services() {
  return (
    <div className={styles.mainServicesContainer}>
      <strong>Nossos Serviços</strong>

      <div className={styles.servicesContainers}>
        <div>
          <Stethoscope size={48} color="black"/>
          <span>Atendimento</span>
        </div>

        <div>
          <Radioactive size={48} color="black"/>
          <span>Exame de imagem</span>
        </div>

        <div>
          <BowlFood size={48} color="black"/>
          <span>Nutricionista</span>
        </div>

        <div>
          <FirstAid size={48} color="black"/>
          <span>Outros</span>
        </div>
      </div>
    </div>
  );
}
