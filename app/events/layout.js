'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useState } from 'react';

export default function EventsLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </>
  );
}
