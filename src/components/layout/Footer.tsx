export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 relative overflow-hidden">
      
      {/* Subtle background glow from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16 relative z-10">
          
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-shadow duration-300">
                <span className="text-slate-900 font-heading font-black text-xl">M</span>
              </div>
              <span className="font-heading font-black text-2xl tracking-tight text-white">MASKAVIA</span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-6">
              Order in Motion - Care in Control. We are an MSC Malaysia Status company established in 1986, delivering high-end enterprise solutions.
            </p>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-white text-lg mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors duration-300">Smart CJM</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors duration-300">Digital Signage</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors duration-300">CCTV Solutions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors duration-300">Wayfinding</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-white text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white font-medium transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white font-medium transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white font-medium transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white font-medium transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-white text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-slate-400 font-medium">Kuala Lumpur, Malaysia</li>
              <li><a href="mailto:info@maskavia.com" className="text-slate-400 hover:text-white font-medium transition-colors duration-300">info@maskavia.com</a></li>
              <li><a href="tel:+60327734079" className="text-slate-400 hover:text-white font-medium transition-colors duration-300">+603 2773 4079</a></li>
            </ul>
          </div>

        </div>
        
        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-slate-500 font-medium text-sm">
            &copy; {new Date().getFullYear()} Maskavia Sdn Bhd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
