const projects = [
  {
    title: "Neural Edge Controller",
    description: "Real-time object detection and path planning for autonomous robots using TinyML on microcontrollers.",
    techStack: ["TinyML", "ROS2", "Edge TPU", "Python"],
  },
  {
    title: "Swarm Intelligence Platform",
    description: "Distributed coordination system for multi-robot swarms with decentralized decision-making.",
    techStack: ["PyTorch", "MQTT", "Raspberry Pi", "Docker"],
  },
  {
    title: "Vision-Based Gripper System",
    description: "Adaptive robotic gripper with real-time visual feedback for delicate object manipulation.",
    techStack: ["OpenCV", "STM32", "3D CAD", "C++"],
  },
  {
    title: "Edge AI Inference Engine",
    description: "Optimized neural network inference framework for resource-constrained embedded systems.",
    techStack: ["Mamba", "ONNX", "ARM Cortex", "Rust"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12 tracking-tight">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative border border-zinc-800 rounded-xl p-6 bg-white/5 backdrop-blur-md hover:scale-[1.02] hover:border-zinc-600 transition-all duration-300"
            >
              {/* 3D Asset Placeholder */}
              <div className="w-full h-48 bg-zinc-800/50 rounded-lg mb-6 flex items-center justify-center border border-dashed border-zinc-700 hidden sm:flex">
                <span className="text-zinc-500 text-xs font-mono">
                  [3D ASSET PLACEHOLDER]
                </span>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-zinc-50 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
