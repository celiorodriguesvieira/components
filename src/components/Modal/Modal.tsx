import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          {title && <h2 className="modal-title">{title}</h2>}
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
}
