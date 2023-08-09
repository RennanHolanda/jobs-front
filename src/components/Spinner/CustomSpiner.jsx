import { Spinner } from "react-bootstrap";

const CustomSpinner = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Carregando...</span>
    </Spinner>
  );
};

export default CustomSpinner;