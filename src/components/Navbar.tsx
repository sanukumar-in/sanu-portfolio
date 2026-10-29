interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

export const Navbar = () => {
    return (
        <nav className="w-full px-8 py-6 flex justify-between items-center">
            <div className="text-xl font-bold">
                Sanu.
            </div>

            <ul className="flex gap-8 text-sm font-medium">
                {navLinks.map((link)=>{
                    return (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    )
                })}
            </ul>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
            </div>
        </nav>
    )
}