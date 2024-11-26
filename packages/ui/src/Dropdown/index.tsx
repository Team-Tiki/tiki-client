import DropdownContainer from "@/Dropdown/Dropdown";
import DropdownItem from "@/Dropdown/DropdownItem";
import DropdownList from "@/Dropdown/DropdownList";
import DropdownTrigger from "@/Dropdown/DropdownTrigger";

export const Dropdown = Object.assign(DropdownContainer, {
  List: DropdownList,
  Item: DropdownItem,
  Trigger: DropdownTrigger,
});
