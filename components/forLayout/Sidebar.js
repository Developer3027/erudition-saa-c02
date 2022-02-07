import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const ShowSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <div>
      <div className='side-link' onClick={item.subNav && ShowSubnav}>
        <Link href={item.path}>
          <a>
            <div>
              {item.icon}
              <span className='side-link-label'>{item.title}</span>
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
              <div className='side-sub-drop'>
                {item.icon}
                <span className='side-link-label'>{item.title}</span>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Sidebar;
