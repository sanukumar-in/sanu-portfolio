import profileImg from '../assets/profile.jpg';

export const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 max-w-7xl mx-auto gap-12 py-20">
            
            <div className="flex-[1.2] text-center md:text-left">
                
                <div className="mb-8">
                    <span className="inline-block px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300">
                        HELLO!
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-black dark:text-white">
                    I'm Sanu Kumar,<br />
                    a Full-Stack Developer.
                </h1>

                <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-md mx-auto md:mx-0 leading-relaxed">
                    I build and ship production-ready web applications using React.js, Node.js, and REST APIs.
                </p>

                <a 
                    href="#projects" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-full text-base font-semibold text-black dark:text-white hover:shadow-lg transition-all duration-300"
                >
                    See My Works
                    <span className="text-lg">↓</span>
                </a>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
                <img
                    src={profileImg}
                    alt="Sanu Kumar"
                    className="w-64 h-64 md:w-[24rem] md:h-[24rem] object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                />
            </div>

        </section>
    );
};