import styles from './ModalContent.module.css';
import Card from '../../project-library/Card/Card';
import Button from "../../project-library/Button/Button";

const ModalContent = props => {
    return (
        <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseModal}>OK</Button>
        </footer>
      </Card>
    )
};

export default ModalContent;