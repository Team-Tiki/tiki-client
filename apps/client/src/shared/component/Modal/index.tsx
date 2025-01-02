import { Modal as ModalWrapper } from '@tiki/ui';

import ModalBody from '@/shared/component/Modal/Body/ModalBody';
import { ModalFooter } from '@/shared/component/Modal/Footer/ModalFooter';
import ModalHeader from '@/shared/component/Modal/Header/ModalHeader';

export const Modal = Object.assign(ModalWrapper, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
