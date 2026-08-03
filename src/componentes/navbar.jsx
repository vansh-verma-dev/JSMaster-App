import { FaRegBell, FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-[10vh] px-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      {/* Logo */}
      <div id="logo" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
          JS
        </div>
        <h1 className="font-semibold text-xl tracking-tight text-gray-900">
          JS<span className="text-purple-600">Master</span>
        </h1>
      </div>

    

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors">
          <FaRegBell className="text-lg" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
        </button>

        <button className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors">
          <FaRegUserCircle className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;