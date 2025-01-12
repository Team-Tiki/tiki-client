import { IcSearch } from '@tiki/icon';
import { DropdownItem, DropdownList, DropdownRoot, Input, scrollStyle } from '@tiki/ui';

import { useRef } from 'react';

import { Modal } from '@/shared/component/Modal';
import { hasKeyInObject } from '@/shared/util/typeGuard';

const FileImportModal = () => {
  const ref = useRef();

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <Input LeftIcon={<IcSearch width={16} height={16} />} isFilled={false} />
        <DropdownRoot css={{ width: '100%' }} ref={ref} role="listbox">
          <DropdownList css={[overlayStyle(open), scrollStyle]} isOpen={open}>
            {Option.map((item: any) => (
              <DropdownItem
                key={item.value}
                css={itemStyle(variant)}
                onSelect={() => {
                  onSelect?.(item.value);
                  setSelectedText(item.value);
                }}>
                <p css={textFieldStyle}>
                  {item.value}
                  {hasKeyInObject(item, 'description') && <span>{item.description}</span>}
                </p>

                {hasKeyInObject(item, 'svg') && item.svg}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownRoot>
      </Modal.Body>
      <Modal.Footer contentType="" />
    </>
  );
};

export default FileImportModal;
