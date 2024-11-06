import Link from "next/link";

type Props = {
    title: string;
    links?: { name: string; url: string }[];

}
const Navbar = ({title, links}: Props) => {
    links = [
        {name: "Home", url: "/"}, {name: "Recipe", url: "/recipe"}, {name: "About-us", url: "/aboutus"}, {
            name: "Contact",
            url: "/contact"
        }, {name: "Realisation", url: "/realisation"},
    ];
    return (
        <header>
            <nav className={"navbar"}>
                <ul>
                    <span>{title}</span>
                    {links ? links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.url}>{link.name}</Link>
                        </li>
                    )) : null}


                </ul>
            </nav>
        </header>

    )
}

export default Navbar;