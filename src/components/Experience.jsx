import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      role: "Web Development Intern",
      org: "iByteCode Technologies",
      desc: "Working with Node.js, REST APIs, MongoDB & PostgreSQL. Building scalable backend systems and responsive frontend layouts.",
    },
    {
      role: "Content & Research Intern",
      org: "DPO Club",
      desc: "Co-authored whitepapers on ASEAN data laws & AI legislation. Published articles on privacy, responsible AI & governance.",
    },
    {
      role: "Technical Team Member",
      org: "Andropedia (SRM)",
      desc: "Part of the core technical team contributing to projects and internal tech initiatives.",
    },
    {
      role: "PR And Marketing Member",
      org: "CHipSET (SRM)",
      desc: "Part of the core team managing public relations and marketing initiatives.",
    },
  ];

  return (
    <section id="experience" className="p-20">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 border border-purple-700 rounded-xl hover:bg-purple-900/10"
          >
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="text-purple-400 text-sm">{item.org}</p>
            <p className="mt-2 text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
