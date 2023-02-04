import "./modal.css";

const Modal = ({ setOpen, open, content }) => {
  const divStyle = {
    display: open ? "flex" : "none",
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setOpen(false);
  };
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <span onClick={closeModal}>&times;</span>
        </div>
        {content}
      </div>
    </div>
  );
};
export default Modal;
