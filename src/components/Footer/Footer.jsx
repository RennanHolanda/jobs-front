import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div id={styles.copy}>
        <p id={styles.footer_text}>
          &copy; 2023 Desenvolvido por{" "}
          <a href="https://github.com/RennanHolanda/portfolio">
            <strong>Bruno Rennan O Holanda </strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
