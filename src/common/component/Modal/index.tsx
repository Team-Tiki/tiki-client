import ModalBody from '@/common/component/Modal/Body/ModalBody';
import ModalFooter from '@/common/component/Modal/Footer/ModalFooter';
import ModalHeader from '@/common/component/Modal/Header/ModalHeader';
import ModalWrapper from '@/common/component/Modal/Wrapper/ModalWrapper';

export const Modal = Object.assign(ModalWrapper, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
