import TabButton from '@/common/component/Tab/TabButton';
import TabList from '@/common/component/Tab/TabList';
import TabPanel from '@/common/component/Tab/TabPanel';
import TabContainer from '@/common/component/Tab/Tabs';

export const Tab = Object.assign(TabContainer, { Button: TabButton, List: TabList, Panel: TabPanel });
