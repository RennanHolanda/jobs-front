import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Company from "../assets/company.svg";
import { Link } from "react-router-dom";
import Api from "../services/Api";
import styles from "./Home.module.css";

const Home = () => {
  const [job, setJob] = useState([]);
  const [initialJobList, setInitialJobList] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Api.get("/jobs");
        setJob(response.data);
        setInitialJobList(response.data);
      } catch (error) {
        console.error("Erro ao buscar as informações:", error);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      setJob(initialJobList);
      setNoResults(false);
      return;
    }
    const filteredJobs = job.filter((data) =>
      data.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setJob(filteredJobs);
    setNoResults(filteredJobs.length === 0);

    setSearchTerm("");
  };

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
        <form
          id={styles.search_form}
          className="form-inline"
          onSubmit={handleSearch}
        >
          <div className="form-group col-md-10">
            <input
              type="text"
              className="form_control"
              placeholder="Digite sua vaga que está buscando"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              {noResults ? (
                <p id={styles.no_results}>Nenhuma vaga encontrada.</p>
              ) : (
                <ul id={styles.job_list} className="list-group">
                  {job.map((data) => (
                    <li
                      key={data.id}
                      className={styles.list_group_item}
                      id={styles.new_job}
                    >
                      <img src={Company} alt="Company" />
                      <div>
                        <p>{data.company}</p>
                        <h2>{data.title}</h2>
                        <p>R$: {data.salary}</p>
                      </div>
                      <span className={styles.new_job_label}>Nova</span>
                      <Link
                        to={`/job/${data.id}`}
                        className={styles.link_button}
                      >
                        Ver vaga
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
