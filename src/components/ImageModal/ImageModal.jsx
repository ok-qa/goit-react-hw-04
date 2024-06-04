import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgb(0, 0, 0, 0.75)",
    border: "none",
  },
};

const ImageModal = ({ isOpenModal, closeModal, selectedImgSrc }) => {
  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <img width="850" src={selectedImgSrc} alt="img" />
      </Modal>
    </div>
  );
};

export default ImageModal;
