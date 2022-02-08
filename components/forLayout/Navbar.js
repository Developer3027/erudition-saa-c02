/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SidebarData } from '../../data/Sidebar';

import Sidebar from './Sidebar';

import { HiChevronRight } from 'react-icons/hi';

const Navbar = () => {
  const router = useRouter();

  //? boolean state for sidebar
  // const [sidebar, setSideBar] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-container'>
      <div className='navbar'>
        <div
          onAuxClick={() => router.push('/')}
          onClick={() => {
            setShowNav(!showNav);
          }}
          className='nav-menu'>
          <HiChevronRight />
        </div>
        <ul className='nav-quick'>
          <li className='pl-2'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className='pl-2'>
            <Link href='/saa-prep'>
              <a>Cert Prep</a>
            </Link>
          </li>
          <li className='pl-2'>
            <Link href='/exam-prep'>
              <a>Exam Practice</a>
            </Link>
          </li>
        </ul>
        <nav id={showNav ? 'show' : 'hide'} className='nav-sidebar'>
          <div>
            {SidebarData.map((item, i) => (
              <Sidebar key={i} item={item} />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
