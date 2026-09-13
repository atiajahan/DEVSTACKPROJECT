const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
        
        {/* Brand Block */}
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2">
            <span className="bg-pink-500 text-white font-bold px-2.5 py-1 rounded-lg text-sm">DS</span>
            <span className="font-bold text-xl text-gray-900">Dev<span className="text-pink-500">Stack</span></span>
          </a>
          
          <p className="mt-4 text-sm text-gray-500 max-w-sm leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          
          <div className="flex items-center gap-4 mt-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-pink-500">GitHub</a>
            <a href="#" className="hover:text-pink-500">Twitter</a>
            <a href="#" className="hover:text-pink-500">LinkedIn</a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Product</h4>
          <ul className="space-y-2.5 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-500">Projects</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">About</a></li>
            <li><a href="#" className="hover:text-pink-500">Contact</a></li>
            <li><a href="#" className="hover:text-pink-500">Careers</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Legal</h4>
          <ul className="space-y-2.5 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-600">Privacy</a>
          <a href="#" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
