import styles from "./RegisterJobs.module.css";
import { Button } from "react-bootstrap";

const RegisterJobs = () => {
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
          <form>
            <div className="form-group">
              <label>Título da vaga:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o título da vaga"
                required
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
              ></textarea>
            </div>
            <div className="form-group">
              <label>Empresa contratante:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite a empresa que vai contratar"
                required
              />
            </div>
            <div className="form-group">
              <label>E-mail para contato:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Digite o e-mail para contato"
                required
              />
            </div>
            <div className="form-group">
              <label>Salário oferecido:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o Salário da vaga"
                required
              />
            </div>
            <input type="hidden" name="new_job" value="1" />
            <Button type="submit" variant="primary">
              Enviar
            </Button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterJobs;
