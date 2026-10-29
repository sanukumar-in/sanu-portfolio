interface Project {
    title: string;
    description: string;
    tech: string[];
    liveUrl: string;
    githubUrl: string;
}

const projects: Project[] = [
    {
        title: "Brew Movie Insight",
        description: "A full-stack AI-powered movie intelligence platform using Next.js and Groq API for real-time sentiment analysis.",
        tech: ["Next.js", "Node.js", "Groq API"],
        liveUrl: "https://brew-movie-insight.vercel.app",
        githubUrl: "https://github.com/sanukumar-in/brew-movie-insight"
    },
    {
        title: "userEnquiry",
        description: "A MERN stack CRUD application with full user management and a decoupled REST API.",
        tech: ["React.js", "Node.js", "MongoDB"],
        liveUrl: "https://user-enquiry-mern-pi.vercel.app",
        githubUrl: "https://github.com/sanukumar-in/userEnquiry"
    },
    {
        title: "movieSea",
        description: "A scalable movie discovery SPA integrating TMDB API with real-time search and filtering.",
        tech: ["React.js", "Redux", "Firebase"],
        liveUrl: "https://movie-sea-omega.vercel.app",
        githubUrl: "https://github.com/sanukumar-in/movieSea"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-9 lg:px-16 max-w-5xl mx-auto">
            
            <h2 className="text-3xl font-bold mb-12 tracking-tight">
                Projects
            </h2>
            
            <div className="flex flex-col gap-12">
                {projects.map((project) => (
                    <div key={project.title} className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-gray-200 pb-8">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4 max-w-xl">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex gap-6">
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm font-medium underline underline-offset-4 hover:bg-black hover:text-white transition-all duration-300 rounded-lg text-lg hover:px-4 hover:py-2"
                            >
                                Website →
                            </a>
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm font-medium underline underline-offset-4 hover:bg-black hover:text-white transition-all duration-300 rounded-lg text-lg hover:px-4 hover:py-2"
                            >
                                Github →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};