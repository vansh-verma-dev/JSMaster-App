import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import AdSpace from "../components/AdSpace";
import projectsData from "../data/projects";
import Navbar from "../components/navbar";
import MobileTopBar from "../components/mobileTopBar";
import BottomNavigation from "../components/bottomNav";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  const currentIndex = projectsData.findIndex(
    (project) => project.id === selectedProject.id
  );

  const goPrev = () => {
    if (currentIndex > 0) setSelectedProject(projectsData[currentIndex - 1]);
  };

  const goNext = () => {
    if (currentIndex < projectsData.length - 1)
      setSelectedProject(projectsData[currentIndex + 1]);
  };

  return (
   <>
   <Navbar/>
   <MobileTopBar/>

 <div className="min-h-[calc(100vh-68px)] w-full bg-white font-['Inter',sans-serif] text-[#201D1B]">
 

      <div className="mx-auto flex w-full max-w-[1400px]">

        <aside className="sticky top-0 hidden h-[calc(100vh-61px)] w-[280px] shrink-0 overflow-y-auto scrollbar-thumb-amber-50 border-r border-[#E5E1DB] lg:block">
          {projectsData.map((project, idx) => {
            const active = selectedProject.id === project.id;

            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group flex w-full items-baseline gap-4 border-b border-[#EFEBE4] px-6 py-4 text-left transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B3A6B] ${
                  active ? "bg-[#1B3A6B]" : "hover:bg-[#FAF9F6]"
                } ${idx === 0 ? "border-t border-t-[#EFEBE4]" : ""}`}
              >
                <span
                  className={`font-['Fraunces',serif] text-sm italic ${
                    active ? "text-white/60" : "text-[#B8B2A6]"
                  }`}
                >
                  {String(project.id).padStart(2, "0")}
                </span>

                <span
                  className={`truncate text-[13.5px] font-medium leading-snug ${
                    active ? "text-white" : "text-[#3A3530] group-hover:text-[#1B3A6B]"
                  }`}
                >
                  {project.title}
                </span>
              </button>
            );
          })}
        </aside>

        <main className="min-w-0 flex-1">

          <div className="border-b border-[#E5E1DB] pt-4 lg:hidden">
            <div className="px-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B655C]">
                Browse index
              </span>

              <h2 className="mt-1.5 truncate font-['Fraunces',serif] text-xl font-semibold text-[#201D1B]">
                {selectedProject.title}
              </h2>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projectsData.map((project) => {
                const active = selectedProject.id === project.id;

                return (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    aria-current={active}
                    aria-label={project.title}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 transition-colors duration-150 ${
                      active
                        ? "border-[#1B3A6B] bg-[#1B3A6B]"
                        : "border-[#E5E1DB] bg-white active:bg-[#FAF9F6]"
                    }`}
                  >
                    <span
                      className={`font-['Fraunces',serif] text-sm italic ${
                        active ? "text-white/70" : "text-[#B8B2A6]"
                      }`}
                    >
                      {String(project.id).padStart(2, "0")}
                    </span>

                    {active && (
                      <span className="max-w-[10rem] truncate text-[13px] font-semibold text-white">
                        {project.title}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-4 py-8 sm:px-8 lg:px-16 lg:py-14">
            <div className="mx-auto max-w-3xl">

              <div className="mb-10">
                <AdSpace />
              </div>

              <section className="relative">
                <span className="pointer-events-none absolute -top-6 right-0 select-none font-['Fraunces',serif] text-[7rem] italic leading-none text-[#F4F1EA] sm:text-[9rem]">
                  {String(selectedProject.id).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C98A2C]">
                    {selectedProject.level}
                  </span>

                  <h1 className="mt-3 max-w-xl font-['Fraunces',serif] text-4xl font-semibold leading-[1.08] tracking-tight text-[#201D1B] sm:text-5xl">
                    {selectedProject.title}
                  </h1>

                  <div className="mt-6 h-px w-16 bg-[#201D1B]" />

                  <p className="mt-6 max-w-xl text-[15.5px] leading-7 text-[#544E46]">
                    {selectedProject.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {selectedProject.githubUrl !== "#" && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#201D1B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1B3A6B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A6B]"
                      >
                        <FaGithub />
                        Source
                      </a>
                    )}

                    {selectedProject.liveUrl !== "#" && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-[#201D1B] px-5 py-2.5 text-sm font-semibold text-[#201D1B] transition hover:border-[#1B3A6B] hover:text-[#1B3A6B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A6B]"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live preview
                      </a>
                    )}
                  </div>
                </div>
              </section>

              <section className="mt-14 border-t border-[#E5E1DB] pt-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B655C]">
                  Stack
                </span>

                <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {selectedProject.technologies.map((technology, i) => (
                    <span key={technology} className="text-[14px] text-[#3A3530]">
                      {technology}
                      {i < selectedProject.technologies.length - 1 && (
                        <span className="ml-2 text-[#C7C1B6]">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mt-10 border-t border-[#E5E1DB] pt-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B655C]">
                  How to build
                </span>

                <div className="mt-4">
                  {selectedProject.tips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex gap-5 border-b border-[#EFEBE4] py-4 first:pt-0 last:border-b-0"
                    >
                      <span className="w-6 shrink-0 font-['Fraunces',serif] text-base italic text-[#C98A2C]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-[14.5px] leading-6 text-[#3A3530]">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>

              {selectedProject.sourceUrl !== "#" && (
                <section className="mt-10 border-t border-[#E5E1DB] pt-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B655C]">
                    Learning reference
                  </span>

                  <div>
                    <a
                      href={selectedProject.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#1B3A6B] underline decoration-[#C7C1B6] underline-offset-4 hover:decoration-[#1B3A6B]"
                    >
                      View reference
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </section>
              )}

              <div className="mt-12">
                <AdSpace />
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-[#E5E1DB] pt-6">
                <button
                  disabled={currentIndex === 0}
                  onClick={goPrev}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A3530] transition hover:text-[#1B3A6B] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <FaArrowLeft className="text-xs" />
                  Previous
                </button>

                <button
                  disabled={currentIndex === projectsData.length - 1}
                  onClick={goNext}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A3530] transition hover:text-[#1B3A6B] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

   <BottomNavigation/>

   </>
  );
}

export default ProjectsPage;