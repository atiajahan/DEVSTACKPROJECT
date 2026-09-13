const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Mobile View Icon */}
        <button className="lg:hidden text-2xl text-gray-700">☰</button>

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="bg-pink-500 text-white font-bold px-2.5 py-1 rounded-lg text-sm">DS</span>
          <span className="font-bold text-xl text-gray-900">Dev<span className="text-pink-500">Stack</span></span>
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-pink-500">Home</a>
          <a href="#" className="hover:text-pink-500">Technologies</a>
          <a href="#" className="hover:text-pink-500">Projects</a>
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-pink-500">Sign In</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;