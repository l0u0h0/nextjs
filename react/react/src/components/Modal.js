function Modal(props) {
  return (
    <div className="modal">
      <p>{props.text}</p>
      <button className="btn btn--alt" onClick={props.onClose}>
        취소
      </button>
      <button className="btn" onClick={props.onClose}>
        확인
      </button>
    </div>
  );
}

export default Modal;
