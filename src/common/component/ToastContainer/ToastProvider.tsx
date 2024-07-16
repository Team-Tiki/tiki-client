import Toast from '@/common/component/Toast/Toast';

import { useToastStore } from '@/shared/store/toast';

const ToastFactory = () => {
  const { toastList, removeToast } = useToastStore();
  return (
    <>
      {toastList.map((toast) => (
        <Toast key={toast.id} onClose={() => removeToast(toast.id)} variant={toast.variant}>
          {toast.message}
        </Toast>
      ))}
    </>
  );
};

export default ToastFactory;
