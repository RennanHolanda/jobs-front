import styles from "./RegisterJobs.module.css";
import Api from "../services/Api";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterJobs = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    company: "",
    email: "",
    new_job: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const response = await Api.post("/job", formData);

      if (response.status === 200) {
        console.log("Dados enviados com sucesso:", response.data);
        navigate("/");
      } else {
        console.log("Erro ao enviar os dados. Status:", response.status);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    } finally {
      setLoading(false);
    }
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="container" id={styles.add_form_container}>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">
            Divulgue a vaga preenchendo o formulário
          </h1>
        </div>
        <div id={styles.form_box} className="col-md-12">
          <h2>
            Preencha os dados da melhor forma possível para encontrar mais
            rápido seu dev!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Título da vaga:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o título da vaga"
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <small id={styles.title_Help} className="form-text text-muted">
                O título é muito importante, seja claro e objetivo.
              </small>
            </div>
            <div className="form-group">
              <label>Descrição da vaga:</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Descreva as atividades do desenvolvedor..."
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Empresa contratante:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite a empresa que vai contratar"
                required
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>E-mail para contato:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Digite o e-mail para contato"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Salário oferecido:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o Salário da vaga"
                required
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>
            <input type="hidden" name="new_job" value="1" />
            <Button type="submit" variant="primary">
              {loading ? <Spinner animation="border" size="sm" /> : "Enviar"}
            </Button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterJobs;
