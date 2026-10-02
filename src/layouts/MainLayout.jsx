import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      {/* Global floating WhatsApp button on all routes */}
      <WhatsAppButton />
    </div>
  );
}
