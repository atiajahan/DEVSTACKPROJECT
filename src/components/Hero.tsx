const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12 lg:py-20 text-left">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-500 leading-relaxed text-base md:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button className="px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 shadow-md transition">
              Explore Technologies
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-pink-500 hover:text-pink-500 transition bg-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/banner-stack.png"
            alt="Development Stack Banner"
            className="w-full max-w-lg md:max-w-xl object-contain drop-shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
