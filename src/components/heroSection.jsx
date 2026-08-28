 function HeroSection() {
    return (
        <section className="w-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex min-h-[180px] items-center justify-between gap-3 p-4">

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-[11px] font-semibold text-purple-600">
                        ⚡ Learn by Coding
                    </span>

                    <h1 className="mt-3 text-[20px] leading-[1.2] font-bold tracking-tight text-gray-900">
                        Learn JavaScript.
                        <span className="block text-purple-600">
                            Build Anything.
                        </span>
                    </h1>

                    <p className="mt-2 max-w-[250px] text-[12px] leading-5 text-gray-500">
                        Start from the basics, solve real coding challenges,
                        and level up your skills step by step.
                    </p>

                    <button className="mt-4 rounded-xl bg-purple-600 px-4 py-2.5 text-[12px] font-semibold text-white shadow-sm transition active:scale-95 hover:bg-purple-700">
                        Start Learning →
                    </button>
                </div>

                {/* Image */}
                <div className="relative shrink-0">
                    <div className="h-[145px] w-[120px] overflow-hidden rounded-2xl bg-purple-50">
                        <img
                            src="https://i.pinimg.com/1200x/29/dd/db/29dddbb74db0c68adc5358271281e03a.jpg"
                            alt="Learn JavaScript"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-2 -left-3 rounded-lg border border-gray-100 bg-white px-2.5 py-1.5 shadow-md">
                        <p className="text-[10px] font-semibold text-gray-800">
                            🔥 Keep Coding
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HeroSection;
 
