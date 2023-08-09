import { Link, useParams } from "react-router-dom";
import styles from "./JobDetails.module.css";
import Company from "../assets/company.svg";
import { useEffect, useState } from "react";
import Api from "../services/Api";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await Api.get(`/job/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error("Erro ao buscar as informações:", error);
      }
    }

    fetchJob();
  }, [id]);

  if (!job) {
    return <div id={styles.loading}>Carregando...</div>;
  }

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
          <h1 id={styles.main_color}>{job.company}</h1>
          <p className={styles.bold}>Quem eles estão buscando: {job.title}</p>
          <p className={styles.job_desc}>Descrição: {job.description}</p>
          <p>
            <span className={styles.bold}>O salário informado é de: </span>R${" "}
            {job.salary}
          </p>
          <p>
            Para trabalhar na{" "}
            <span className={styles.bold} id={styles.main_color}>
              {job.company}
            </span>
            , envie um e-mail para{" "}
            <a href={`mailto:${job.email}`} id={styles.main_color}>
              {job.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
