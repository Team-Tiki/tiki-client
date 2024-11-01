import ModalBody from './Body/ModalBody';
import ModalFooter from './Footer/ModalFooter';
import ModalHeader from './Header/ModalHeader';
import ModalWrapper from './Wrapper/ModalWrapper';

export const Modal = Object.assign(ModalWrapper, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
