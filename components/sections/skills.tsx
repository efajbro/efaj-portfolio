const skills = [
  "Pytorch",
  "ROS2",
  "Mamba",
  "Edge AI",
  "TinyML",
  "3D CAD",
  "Astrophysics",
  "Debate",
  "Retrieval-Augmented Generation (RAG)",
  "Graphics Design",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12 tracking-tight">
          Skills
        </h2>

        {/* 3D Node Graph Placeholder */}
        <div className="w-full h-64 lg:h-80 border border-dashed border-zinc-700 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md mb-12 hidden sm:flex">
          <span className="text-zinc-500 text-sm font-mono">
            [3D NODE GRAPH / CONSTELLATION RENDERED HERE]
          </span>
        </div>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-zinc-800/60 text-zinc-300 text-sm font-medium border border-zinc-700 hover:border-zinc-500 hover:text-zinc-100 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
