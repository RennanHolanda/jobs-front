import styles from './Form.module.css'
import { Button } from "react-bootstrap";

function Form( ) {
    return(
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
    )
}

export default Form