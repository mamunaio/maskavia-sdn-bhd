"use client";

import { Phone, Mail, Search } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 text-xs py-2 hidden md:block">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>D6-1-3, Bangunan Perdagangan D6, 801, Jalan Sentul Timur, 51000 Kuala Lumpur</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+60327734079" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            +60 03 2773 4079 / 4080
          </a>
          <a href="mailto:enquiries@maskavia.com" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail className="w-3 h-3" />
            enquiries@maskavia.com
          </a>
          <div className="flex items-center">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-background border border-border rounded-l-full py-1 px-3 w-32 focus:w-48 transition-all outline-none text-foreground"
              />
              <button className="bg-primary hover:bg-primary-hover text-white rounded-r-full p-1.5 absolute right-0 top-0 bottom-0 border border-primary transition-colors">
                <Search className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
