import {
  Clock3,
  BarChart3,
  Crown,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Age Calculator",
    difficulty: "Easy",
    duration: "30 Min",
    status: "Free",
  },
  {
    id: 2,
    title: "BMI Calculator",
    difficulty: "Easy",
    duration: "45 Min",
    status: "Free",
  },
  {
    id: 3,
    title: "Digital Clock",
    difficulty: "Easy",
    duration: "40 Min",
    status: "Free",
  },
  {
    id: 4,
    title: "Weather App",
    difficulty: "Medium",
    duration: "2 Hours",
    status: "Free",
  },
  {
    id: 5,
    title: "Quiz App",
    difficulty: "Medium",
    duration: "3 Hours",
    status: "Free",
  },
  {
    id: 6,
    title: "Expense Tracker",
    difficulty: "Medium",
    duration: "4 Hours",
    status: "Free",
  },
  {
    id: 7,
    title: "Movie Search App",
    difficulty: "Hard",
    duration: "5 Hours",
    status: "Premium",
  },
  {
    id: 8,
    title: "GitHub Profile Finder",
    difficulty: "Hard",
    duration: "5 Hours",
    status: "Premium",
  },
];

const badgeColor = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

function Projects() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Real World Projects
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Build Projects That
            <span className="text-violet-600"> Improve Your Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Learn JavaScript by building practical applications used in real
            development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-purple-50">
                <BarChart3
                  size={55}
                  className="text-violet-600 transition group-hover:scale-110"
                />
              </div>

              {/* Difficulty */}
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor[project.difficulty]}`}
              >
                {project.difficulty}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              {/* Duration */}
              <div className="mt-4 flex items-center gap-2 text-gray-500">
                <Clock3 size={18} />
                {project.duration}
              </div>

              {/* Status */}
              <div className="mt-4">
                {project.status === "Premium" ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    <Crown size={16} />
                    Premium
                  </span>
                ) : (
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                    Free
                  </span>
                )}
              </div>

              {/* Button */}
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700">
                Start Project
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;