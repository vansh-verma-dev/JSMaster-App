 
function HeroSection() {
  const user = "Vansh Verma";

  return (
    <div className="px-5 py-8 sm:px-8 sm:py-12">
      <div className="max-w-3xl">

        {/* Greeting */}
        <p className="mb-3 text-sm font-medium text-purple-600">
          Hey, {user} 👋
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
          Learn JavaScript with{" "}
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            JSMaster
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-gray-500">
          Learn JavaScript step by step, practice what you learn,
          and build real-world projects with JSMaster.
        </p>

        {/* Small Stats */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          <span className="rounded-full bg-purple-50 px-3 py-1.5 font-medium text-purple-600">
            ⚡ Learn
          </span>

          <span className="rounded-full bg-purple-50 px-3 py-1.5 font-medium text-purple-600">
            🧠 Practice
          </span>

          <span className="rounded-full bg-purple-50 px-3 py-1.5 font-medium text-purple-600">
            🚀 Build
          </span>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
 
