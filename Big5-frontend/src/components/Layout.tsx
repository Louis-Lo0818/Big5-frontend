import React from 'react';
import NavBar from './NavBar/NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </>
  );
}