import ReactDOM from 'react-dom';

interface ModalPortalProps {
  child: React.ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ child }) => {
  const modalRoot = document.getElementById('modal') as HTMLElement;
  return ReactDOM.createPortal(child, modalRoot);
};

export default ModalPortal;
