import React, { ReactNode } from 'react';
import Modal from './modal';
import { useTranslation } from 'react-i18next';

type AlertModalProps = {
  show: boolean;
  onClose: () => void;
  message: string;
};

const AlertModal: React.FC<AlertModalProps> = ({ show, onClose, message }) => {
  const { t } = useTranslation();
  return (
    <Modal onClose={onClose} show={show}>
      <div className="relative max-h-full w-full max-w-md">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">{t('buttons.close')}</span>
          </button>
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{message}</h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="btn btn_color my-3"
              onClick={onClose}
            >
              {t('buttons.close')}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AlertModal;
