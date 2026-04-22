const hobbies = [
  {
    title: "Astrophotography",
    href: "#",
  },
  {
    title: "FPV Drones",
    href: "#",
  },
  {
    title: "Mechanical Keyboards",
    href: "#",
  },
  {
    title: "Film Photography",
    href: "#",
  },
  {
    title: "Mountain Hiking",
    href: "#",
  },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12 tracking-tight">
          Hobbies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <article
              key={index}
              className="group border border-zinc-800 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md hover:border-zinc-600 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-video bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-600 text-xs font-mono">
                  [IMAGE]
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <a
                  href={hobby.href}
                  className="text-lg font-medium text-zinc-100 hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-400"
                >
                  {hobby.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
