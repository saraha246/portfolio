import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["Python","Machine Learning","Data Analysis","Scikit-learn","Pandas","NumPy","Node.js","MongoDB","PostgreSQL","HTML","Bootstrap","Technical Writing"];
  
  return (
    <section id="skills" className="p-10 md:p-20 bg-bgdark text-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-secondary">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div 
            key={i} 
            className="p-4 border border-primary rounded-lg text-center hover:scale-110 hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
