export const Hero = () => {
    return (
        <section className="min-h-[80vh] flex justify-center flex-col px-8 md:px-12 lg:px-24 max-w-5xl">
            <div className="mb-8">
                <span className="px-4 py-2 border border-black rounded-full text-sm font-medium">
                    HELLO!
                </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight text-black">
                I'm Sanu Kumar,<br />
                a Full-Stack Developer.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                I build and ship production-ready web applications using React.js, Node.js, and REST APIs. Passionate about writing clean, maintainable code.
            </p>
            <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black rounded-lg text-base font-medium text-black hover:bg-black hover:text-white transition-all duration-300 w-fit"
            >
                See My Works
                <span>→</span>
            </a>
        </section>
    )
}