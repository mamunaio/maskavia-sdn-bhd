import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xl">M</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-primary">MASKAVIA</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About</Link>
          <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Services</Link>
          <Link href="#clients" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Clients</Link>
          <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </nav>
        
        <button className="md:hidden p-2 text-gray-600">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
