import React, { ReactNode } from 'react';

type ModalProps = {
  children?: ReactNode;
  show: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = (props) => {
  const { show, onClose } = props;
  const closeModal = () => {
    onClose();
  };

  const preventClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal" data-testid="test-modal" onClick={closeModal}>
      <div className="modal-container" onClick={preventClose}>
        {props.children && props.children}
      </div>
    </div>
  );
};

export default Modal;
