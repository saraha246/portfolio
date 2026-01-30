import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-6"
      >
        About Me
      </motion.h2>

      <p className="text-gray-400 leading-relaxed">
        I’m a B.Tech AI/ML student at SRM IST with a strong interest in building
        intelligent, responsible, and creative software systems. I work across
        machine learning, data science, and web development, while exploring
        how AI intersects with design, policy, and real-world impact.
      </p>
    </section>
  );
}
