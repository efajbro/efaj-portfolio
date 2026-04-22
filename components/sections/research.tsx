"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const papers = [
  {
    title: "Efficient TinyML Architectures for On-Device Inference in Resource-Constrained Environments",
    year: 2024,
    abstract: "A novel compression technique achieving 95% model size reduction while maintaining inference accuracy on ARM Cortex-M microcontrollers.",
  },
  {
    title: "Deep Sky Object Detection Using Edge-Deployed Neural Networks",
    year: 2023,
    abstract: "Real-time astronomical object classification on portable devices for amateur astrophotography applications.",
  },
  {
    title: "Spectral Analysis of Exoplanet Atmospheres Using Machine Learning Pipelines",
    year: 2023,
    abstract: "Automated detection of biosignatures in JWST spectral data using transformer-based architectures.",
  },
];

export function ResearchSection() {
  const [message, setMessage] = useState("");

  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12 tracking-tight">
          Research Articles
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Papers List */}
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <article
                key={index}
                className="border border-zinc-800 rounded-xl p-6 bg-white/5 backdrop-blur-md hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-zinc-100 leading-tight">
                    {paper.title}
                  </h3>
                  <span className="text-sm text-zinc-500 font-mono shrink-0">
                    {paper.year}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {paper.abstract}
                </p>
              </article>
            ))}
          </div>

          {/* Right: AI Chatbot UI */}
          <div className="border border-zinc-800 rounded-xl bg-zinc-900/80 backdrop-blur-md overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-3 text-sm font-mono text-zinc-400">
                  Chat with my Research
                </span>
              </div>
            </div>

            {/* Chat History Area */}
            <div className="flex-1 min-h-[300px] p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-lg px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-zinc-300">
                    Hi! Ask me anything about my research papers on TinyML, Edge AI, and astrophysics.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-zinc-700 rounded-lg px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-zinc-200">
                    What&apos;s your latest work on TinyML?
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-lg px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-zinc-300">
                    My latest paper explores efficient model compression techniques for microcontrollers...
                  </p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about my research..."
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                <button
                  type="button"
                  className="p-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-zinc-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
