/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

import { SidebarData } from '../../data/SidebarData';

import Sidebar from './Sidebar';

import { HiChevronRight, HiOutlineUser } from 'react-icons/hi';

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  //? component boolean state for nav
  const [showOptions, setShowOptions] = useState(false);
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
        <div className='nav-wrap'>
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
          <div>
            <div
              className='member-wrap'
              onClick={() => {
                setShowOptions(!showOptions);
              }}>
              {session ? (
                <img
                  className='nav-img'
                  id={session ? 'showOpt' : 'hideOpt'}
                  src={ session.user.image }
                  alt={session.user.name}
                  width='32'
                  height='32'
                />
              ) : (
                <HiOutlineUser id={!session ? 'showOpt' : 'hideOpt'} />
              )}
              <div id={showOptions ? 'showOpt' : 'hideOpt'} className='nav-opt'>
                {session ? (
                  <button
                    onClick={() => {
                      signOut();
                    }}>
                    SignOut
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      signIn();
                    }}>
                    SignIn
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
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
