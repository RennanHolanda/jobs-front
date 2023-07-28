import styles from "./Home.module.css";
import { Button } from "react-bootstrap";
import Company from "../assets/company.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div id={styles.top_container} className="container-fluid">
        <h1 id={styles.main_title} className="text-center">
          Encontre o emprego dos seus sonhos
        </h1>
        <p id={styles.main_subtitle} className="text-center">
          Somos o site com mais vagas de tecnologia no mercado, direcionadas a
          home office
        </p>
        <form id={styles.search_form} className="form-inline">
          <div className="form-group col-md-10">
            <input
              type="text"
              className="form_control"
              placeholder="Digite sua vaga que está buscando"
            />
          </div>
          <div className="col-md-2">
            <Button
              id={styles.search_form_botton}
              type="submit"
              variant="primary"
            >
              Procurar
            </Button>{" "}
          </div>
        </form>
      </div>
      <main>
        <div id={styles.jobs_container} className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 id={styles.job_list_title}>
                Veja as nossas vagas em destaque
              </h2>
              <ul id={styles.job_list} className="list-group">
                <li className={styles.list_group_item} id={styles.new_job}>
                  <img src={Company} alt="Company" />
                  <div>
                    <p>Empresa</p>
                    <h2>Título da vaga</h2>
                    <p>R$2000,00</p>
                  </div>
                  <span className={styles.new_job_label}>Nova</span>
                  <Link to={"/jobdetails"} className={styles.link_button}>Ver vaga</Link>
                </li>
                <li className={styles.list_group_item}>
                  <img src={Company} alt="Company" />
                  <div>
                    <p>Empresa</p>
                    <h2>Título da vaga</h2>
                    <p>R$2000,00</p>
                  </div>
                  <Link to={"/jobdetails"} className={styles.link_button}>Ver vaga</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
