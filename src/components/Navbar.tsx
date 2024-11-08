import React from 'react';
import { User } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="px-6 py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="logo-container">
          <Logo className="h-6 w-auto" />
        </div>
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#servizi" className="hover:text-teal-400 transition-colors">Servizi</a>
          <a href="#soluzioni" className="hover:text-teal-400 transition-colors">Soluzioni</a>
          <a href="#marketplace" className="hover:text-teal-400 transition-colors">Marketplace</a>
          <a href="#certificazioni" className="hover:text-teal-400 transition-colors">Certificazioni</a>
          <div className="flex gap-4">
            <a href="/login" className="flex items-center gap-2 text-teal-400">
              <User size={18} /> Accedi
            </a>
            <a href="https://grand-genie-d8d72d.netlify.app" 
               className="bg-teal-400 text-black px-4 py-1.5 rounded-full hover:bg-teal-300 transition-all duration-300 hover:scale-105 text-sm">
              Inizia Ora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}