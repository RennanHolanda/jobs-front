import { Link } from "react-router-dom";
import styles from "./JobDetails.module.css";
import Company from "../assets/company.svg";
const JobDetails = () => {
  return (
    <div id={styles.job_container} className="container">
      <div className="row text-center">
        <Link to={"/"} className={styles.back_link} id={styles.main_color}>
          Voltar
        </Link>
        <div id={styles.img_container} className="col-md-12">
          <img src={Company} alt="Company" />
        </div>
        <div className="col-md-12">
          <h1 id={styles.main_color}>Desenvolvedor Web</h1>
          <p className={styles.bold}>Quem eles estão buscando:</p>
          <p className={styles.job_desc}>Desenvolver sistemas responsivos</p>
          <p>
            <span className={styles.bold}>O salário informado é de:</span>R$
            2.000,00
          </p>
          <p>
            Para trabalhar na{" "}
            <span className={styles.bold} id={styles.main_color}>
              JScompany{" "}
            </span>
            envie um e-mail para a{" "}
            <a href="mailto:email@provedor.com.br" id={styles.main_color}>
              empresa@mail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
