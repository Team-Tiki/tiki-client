import { sidebarSectionStyle } from './LeftSidebar.style';

interface LeftSidebarProps {}

const LeftSidebar = ({}: LeftSidebarProps) => {
  return (
    <aside css={sidebarSectionStyle}>
      <nav>
        <ul>
          <li>
            <div>로고</div>
            <p>Showcase</p>
          </li>
          <li>
            <div>로고</div>
            <p>Team 1</p>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
