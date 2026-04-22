const achievements = [
  {
    title: "Global Finalist at INNOVATION WORLD CUP 2025",
    position: "left",
  },
  {
    title: "Champion (SPE Poster presentation 2025)",
    position: "right",
  },
  {
    title: "HULT PRIZE on campus finalist and 4th position",
    position: "left",
  },
  {
    title: "IDDC Runner-up and 3rd Speaker Break",
    position: "right",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-16 tracking-tight text-center">
          Achievements
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                data-sound-trigger
                className={`relative flex items-center ${
                  achievement.position === "left"
                    ? "sm:justify-start"
                    : "sm:justify-end"
                } justify-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 w-3 h-3 bg-zinc-600 rounded-full transform -translate-x-1/2 border-2 border-zinc-950 hidden sm:block" />

                {/* Content Block */}
                <div
                  className={`w-full sm:w-5/12 border border-zinc-800 rounded-xl p-6 bg-white/5 backdrop-blur-md hover:border-zinc-600 transition-all duration-300 ${
                    achievement.position === "left"
                      ? "sm:mr-auto sm:text-right"
                      : "sm:ml-auto sm:text-left"
                  } text-center`}
                >
                  <p className="text-lg font-medium text-zinc-100 leading-relaxed">
                    {achievement.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
