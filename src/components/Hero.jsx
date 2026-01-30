import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Anugraha Santhanam
        </h1>

        <p className="mt-4 text-xl text-purple-300">
          AI/ML • Software Dev • Research & Writing
        </p>

        <div className="mt-6 flex gap-6 justify-center text-sm text-gray-400">
          <a href="https://linkedin.com/in/anugraha-santhanam-386781307" target="_blank" className="hover:text-purple-400">
            LinkedIn
          </a>
          <a href="https://github.com/saraha246" target="_blank" className="hover:text-purple-400">
            GitHub
          </a>
          <a href="https://medium.com/@anugraha.santhanam06" target="_blank" className="hover:text-purple-400">
            Medium
          </a>
          <a href="mailto:anugraha.santhanam06@gmail.com" className="hover:text-purple-400">
            Email
          </a>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-amber-900/20" />
    </section>
  );
}
