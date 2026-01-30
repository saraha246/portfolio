export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-black/40 backdrop-blur-md p-4 flex justify-between z-50">
      <h1 className="text-lg font-bold tracking-wide text-primary">ANUGRAHA</h1>
      <nav className="flex gap-6 text-sm">
        <a href="#about" className="hover:text-secondary">About</a>
        <a href="#skills" className="hover:text-secondary">Skills</a>
        <a href="#projects" className="hover:text-secondary">Projects</a>
        <a href="#experience" className="hover:text-secondary">Experience</a>
        <a href="#contact" className="hover:text-secondary">Contact</a>
      </nav>
    </div>
  );
}
