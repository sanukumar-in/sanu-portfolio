export const Footer = () => {
    return (
        <footer className="py-16 px-6 md:px-12 border-t border-gray-200 dark:border-gray-700 mt-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                        Sanu<span className="text-gray-400">.</span>
                    </h2>
                    <a 
                        href="mailto:sanukumarin.01@gmail.com" 
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition text-sm"
                    >
                        sanukumarin.01@gmail.com
                    </a>
                </div>

                <div className="flex gap-8">
                    <a 
                        href="https://linkedin.com/in/sanukumar-in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/sanukumar-in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    © 2026 Sanu Kumar
                </p>
            </div>
        </footer>
    );
};