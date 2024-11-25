import DropdownContainer from '@/common/component/Dropdown/Dropdown';
import DropdownItem from '@/common/component/Dropdown/DropdownItem';
import DropdownList from '@/common/component/Dropdown/DropdownList';
import DropdownTrigger from '@/common/component/Dropdown/DropdownTrigger';

export const Dropdown = Object.assign(DropdownContainer, {
  List: DropdownList,
  Item: DropdownItem,
  Trigger: DropdownTrigger,
});
