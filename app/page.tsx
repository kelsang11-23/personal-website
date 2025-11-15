import Image from "next/image";
import data from "@/content/data.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-900">
            {data.site.author}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {data.site.author.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {data.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {data.hero.subtitle}
          </p>
          <a 
            href={data.hero.ctaLink}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {data.hero.ctaText}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              {data.about.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.about.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-200 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white text-lg font-semibold">
                  Project Image
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              I'm always interested in hearing about new opportunities and exciting projects.
            </p>
            <a 
              href={`mailto:${data.contact.email}`}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mb-8"
            >
              Send me an email
            </a>
            <div className="flex justify-center space-x-6">
              {data.contact.social.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="text-gray-700 capitalize text-sm">
                    {social.name[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 {data.site.author}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}