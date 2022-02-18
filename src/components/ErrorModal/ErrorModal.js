import Backdrop from "./Backdrop";
import ModalContent from "./ModalContent";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  const closeModalHandler = () => {
    props.onCloseModal();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={closeModalHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalContent
          onCloseModal={closeModalHandler}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ErrorModal;
