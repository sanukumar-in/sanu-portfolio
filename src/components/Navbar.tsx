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
        </nav>
    )
}