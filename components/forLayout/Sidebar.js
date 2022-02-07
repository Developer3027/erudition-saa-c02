import React, { useState } from 'react';
import Link from 'next/link';

import styles from '../../styles/Layout.module.css';

const Sidebar = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const ShowSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <div>
      <div className={styles.sideLink} onClick={item.subNav && ShowSubnav}>
        <Link href={item.path}>
          <a>
            <div>
              {item.icon}
              <span className={styles.sideLinkLabel}>{item.title}</span>
              {item.subNav && subnav
                ? item.iconOpen
                : item.subNav
                ? item.iconClose
                : null}
            </div>
          </a>
        </Link>
      </div>
      {subnav &&
        item.subNav.map((item, i) => (
          <Link key={i} href={item.path}>
            <a>
              <div className={styles.sideSubDrop}>
                {item.icon}
                <span className={styles.sideLinkLabel}>{item.title}</span>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Sidebar;
