import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AI-based QR Code Tracking (Indian Railways)",
      desc: "Laser-etched QR identity for track fittings with AI-powered lifecycle prediction.",
    },
    {
      title: "OCR PII Pipeline",
      desc: "Built an OCR-based pipeline to convert handwritten documents into text and automatically identify personally identifiable information (PII).",
    },
    {
      title: "Sentiment Analysis NLP Pipeline",
      desc: "End-to-end NLP system using SpaCy, NLTK & Scikit-learn.",
    },
    {
      title: "Credit Card Fraud Detection",
      desc: "Random Forest model with ROC-AUC visualization.",
    },
    {
      title: "House Price Prediction",
      desc: "Regression + exploratory data analysis.",
    },
  ];

  return (
    <section id="projects" className="p-20 overflow-hidden">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[320px] p-6 border border-amber-500 rounded-xl bg-black/60"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
