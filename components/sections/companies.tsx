export function CompaniesSection() {
  return (
    <section id="companies" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12 tracking-tight">
          Companies Founded
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* SINC Robotics Card */}
          <article className="border border-zinc-800 rounded-xl p-6 bg-white/5 backdrop-blur-md hover:border-zinc-600 transition-all duration-300">
            {/* 3D Logo Placeholder */}
            <div className="w-24 h-24 bg-zinc-800/50 rounded-lg mb-6 flex items-center justify-center border border-dashed border-zinc-700 mx-auto">
              <span className="text-zinc-500 text-[10px] font-mono text-center leading-tight px-2">
                [3D METALLIC LOGO HERE]
              </span>
            </div>

            <h3 className="text-xl font-semibold text-zinc-100 mb-2 text-center">
              SINC Robotics
            </h3>

            <p className="text-sm text-zinc-400 mb-4 text-center">
              Co-Founder and COO
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              A hardware innovation company in BD initiated by creating the cheapest Braille printer, reducing costs by 97% for the global south.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
