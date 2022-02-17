import Card from "../../project-library/Card/Card";
import styles from "./ErrorModal.module.css";
import Button from "../../project-library/Button/Button";

const ErrorModal = (props) => {
  const closeModalHandler = () => {
    props.onCloseModal();
  };
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={closeModalHandler}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
