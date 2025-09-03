import React from 'react';
import NavBar from './navBar/navBar';
import ItemNav from './itemNav/itemNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <ItemNav />
      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </>
  );
}