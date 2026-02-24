'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden px-6 md:px-20 py-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900/80 to-black" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/15 blur-3xl rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 blur-3xl rounded-full -z-10 animate-pulse-slow delay-1000" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
        >
          Muhammad Abdulrehman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          Computer Science student @ Drexel University.<br />
          Passionate about scalable systems, data-driven tools, scientific visualization, and building impactful software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-7 py-3.5 border border-gray-600 rounded-xl font-medium hover:border-gray-300 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            Download Résumé
          </a>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto mt-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
        >
          Tech I Build With
        </motion.h2>

        <div className="space-y-8">
          {[
            { name: "TypeScript / JavaScript", level: 92, color: "from-blue-500 to-blue-400" },
            { name: "Next.js / React", level: 88, color: "from-purple-500 to-purple-400" },
            { name: "Python (Data & Viz)", level: 85, color: "from-cyan-500 to-cyan-400" },
            { name: "Tailwind CSS", level: 95, color: "from-indigo-500 to-indigo-400" },
            { name: "Supabase / PostgreSQL", level: 78, color: "from-green-500 to-green-400" },
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex justify-between mb-2 text-sm font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                  className={`h-full bg-gradient-to-r ${skill.color} group-hover:brightness-125 transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto mt-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-12"
        >
          Selected Projects
        </motion.h2>

        <div className="space-y-20">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-950/50 to-black/50 p-6 md:p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20"
          >
            <div className="mb-6 overflow-hidden rounded-xl">
              <Image
                src="/projects/icecube-placeholder.jpg" // ← Replace with your real screenshot
                alt="IceCube Data Visualizer"
                width={1200}
                height={675}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3">IceCube Data Visualizer</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Interactive tool to process and visualize neutrino detection events from the IceCube Neutrino Observatory.
            </p>
            <ul className="text-gray-400 text-sm space-y-1.5 mb-6">
              <li>• Real-time 3D event rendering & filtering</li>
              <li>• Handles large HDF5 datasets efficiently</li>
              <li>• Built for researchers — accelerates analysis</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-950/60 text-blue-300 rounded-full text-xs">Python</span>
              <span className="px-3 py-1 bg-purple-950/60 text-purple-300 rounded-full text-xs">Plotly</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Pandas</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">NumPy</span>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-950/50 to-black/50 p-6 md:p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="mb-6 overflow-hidden rounded-xl">
              <Image
                src="/projects/dragonsconnect-placeholder.jpg" // ← Replace with your real screenshot
                alt="DragonsConnect Platform"
                width={1200}
                height={675}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3">DragonsConnect</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full-stack real-time social platform with authentication, profiles, and live updates.
            </p>
            <ul className="text-gray-400 text-sm space-y-1.5 mb-6">
              <li>• Supabase Auth + Realtime Database</li>
              <li>• Modern responsive UI/UX</li>
              <li>• Type-safe full-stack development</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-950/60 text-blue-300 rounded-full text-xs">Next.js</span>
              <span className="px-3 py-1 bg-purple-950/60 text-purple-300 rounded-full text-xs">TypeScript</span>
              <span className="px-3 py-1 bg-green-950/60 text-green-300 rounded-full text-xs">Supabase</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Tailwind</span>
            </div>
          </motion.div>

          {/* Add more projects here in the same format */}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto mt-32 pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-10 text-center"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-5 text-lg text-gray-300"
        >
          <p>
            Email:{" "}
            <a
              href="mailto:yourname@example.com"
              className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
            >
              yourname@example.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
            >
              github.com/yourusername
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/your-real-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}