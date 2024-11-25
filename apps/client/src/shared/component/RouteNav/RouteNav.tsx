import { motion } from 'framer-motion';

import { Link, useLocation } from 'react-router-dom';

import IcFolder from '@/common/asset/svg/ic_folder_copy.svg?react';
import IcHandOver from '@/common/asset/svg/ic_handover_empty.svg?react';
import IcTimeLine from '@/common/asset/svg/ic_nav_timeline.svg?react';

import {
  iconFillActiveStyle,
  iconStrokeActiveStyle,
  indicatorStyle,
  itemStyle,
  navListStyle,
} from '@/shared/component/RouteNav/RouteNav.style';
import { PATH } from '@/shared/constant/path';

const RouteNav = () => {
  const { pathname } = useLocation();

  const isDrivePage = pathname === PATH.DRIVE;
  const isArchivingPage = pathname === PATH.ARCHIVING;
  const isHandoverPage = pathname === PATH.HANDOVER || pathname === PATH.HANDOVER_NOTE;

  return (
    <nav>
      <ul css={navListStyle}>
        <li css={{ position: 'relative' }}>
          <Link css={itemStyle(isDrivePage)} to={PATH.DRIVE}>
            <IcFolder css={iconFillActiveStyle(isDrivePage)} width={16} height={16} />
            파일
          </Link>
          {isDrivePage && <motion.div layoutId="nav_indicator" css={indicatorStyle} />}
        </li>
        <li css={{ position: 'relative' }}>
          <Link css={itemStyle(isArchivingPage)} to={PATH.ARCHIVING}>
            <IcTimeLine css={iconStrokeActiveStyle(isArchivingPage)} width={16} height={16} />
            타임라인
          </Link>
          {isArchivingPage && <motion.div layoutId="nav_indicator" css={indicatorStyle} />}
        </li>
        <li css={{ position: 'relative' }}>
          <Link css={itemStyle(isHandoverPage)} to={PATH.HANDOVER}>
            <IcHandOver css={iconFillActiveStyle(isHandoverPage)} width={16} height={16} />
            인수인계 노트
          </Link>
          {isHandoverPage && <motion.div layoutId="nav_indicator" css={indicatorStyle} />}
        </li>
      </ul>
    </nav>
  );
};

export default RouteNav;
