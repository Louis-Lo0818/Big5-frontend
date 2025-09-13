import React from 'react';
import NavBar from './navBar/navBar';
import ItemNav from './itemNav/itemNav';

// Pass mainClassName when you want page-level container styles
export default function Layout({ children, mainClassName = '' }: { children: React.ReactNode; mainClassName?: string }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <NavBar />
        <ItemNav />
      </div>
      <main className={mainClassName}>{children}</main>
    </>
  );
}