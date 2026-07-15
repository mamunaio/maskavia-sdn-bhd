export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 border-t border-primary-hover">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-heading font-bold text-xl">M</span>
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-white">MASKAVIA</span>
          </div>
          <p className="text-gray-300 max-w-sm font-sans leading-relaxed">
            Order in Motion - Care in Control. We are a MSC Malaysia Status company established in 1986, delivering high-end corporate solutions.
          </p>
        </div>
        
        <div>
          <h3 className="font-heading font-semibold text-lg mb-6">Solutions</h3>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-accent transition-colors">Smart CJM</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Digital Signage</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">CCTV Solutions</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Wayfinding</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-heading font-semibold text-lg mb-6">Company</h3>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Maskavia Sdn Bhd. All rights reserved.
      </div>
    </footer>
  );
}
