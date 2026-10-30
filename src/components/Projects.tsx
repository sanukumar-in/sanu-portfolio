import brewMovieImg from '../assets/brew_preview.png';
import userEnquiryImg from '../assets/userEnquiry_preview.png';
import movieSeaImg from '../assets/movieSea.png';
import pixelImg from '../assets/pixel_preview.png';

interface Project {
    title: string;
    description: string;
    tech: string[];
    liveUrl: string;
    githubUrl: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Brew Movie Insight",
        description: "AI-powered movie intelligence platform using Next.js and Groq API for real-time sentiment analysis.",
        tech: ["Next.js", "Node.js", "Groq API"],
        liveUrl: "https://brew-movie-insight.vercel.app",
        githubUrl: "https://github.com/sanukumar-in/brew-movie-insight",
        image: brewMovieImg
    },
    {
        title: "userEnquiry",
        description: "MERN stack CRUD application with full user management and a decoupled REST API.",
        tech: ["React.js", "Node.js", "MongoDB"],
        liveUrl: "https://user-enquiry-mern-pi.vercel.app",
        githubUrl: "https://github.com/sanukumar-in/userEnquiry",
        image: userEnquiryImg
    },
    {
        title: "movieSea",
        description: "Scalable movie discovery SPA integrating TMDB API with real-time search and filtering.",
        tech: ["React.js", "Redux", "Firebase"],
        liveUrl: "https://movie-sea-omega.vercel.app",
        githubUrl: "https://github.com/sanukumar-in/movieSea",
        image: movieSeaImg
    },
    {
        title: "PixelSketch Pro",
        description: "PixelSketch Pro is a web-based pixel art drawing application that allows users to unleash their creativity by creating pixelated artworks.",
        tech: ["JavaScript", "HTML5", "CSS3"],
        liveUrl: "https://sanukumar-in.github.io/PixelSketch-Pro/",
        githubUrl: "https://github.com/sanukumar-in/PixelSketch-Pro",
        image: pixelImg
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
            
            <h2 className="text-2xl font-bold mb-10 tracking-tight text-black dark:text-white">
                Selected Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project.title} className="group flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                        
                        <div className="w-full h-48 overflow-hidden bg-gray-50 dark:bg-gray-900">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <a 
                                    href={project.liveUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center text-sm font-semibold px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    Live <span className="text-xs">→</span>
                                </a>
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center text-sm font-semibold px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-black dark:text-white rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    GitHub <span className="text-xs">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};