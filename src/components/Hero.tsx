const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-primary-500 to-primary-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Discover Perfect Sleep with Sweet Dreams
              </h1>
              <p className="mt-6 text-xl text-primary-100">
                Premium eye masks designed for ultimate comfort and complete
                darkness. Transform your sleep experience tonight.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="px-8 py-3 bg-white text-primary-600 font-medium rounded-full hover:bg-primary-50 transition-colors shadow-lg">
                  Shop Now
                </button>
                <button className="px-8 py-3 bg-transparent text-white border border-white font-medium rounded-full hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/frog.png"
                  alt="Sweet Dreams Eye Mask"
                  className="w-72 h-auto"
                />
              </div>
              <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-yellow-400 text-primary-900 font-bold py-2 px-4 rounded-full shadow-lg transform rotate-12">
                New!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
