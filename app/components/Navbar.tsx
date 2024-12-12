import Link from "next/link";

type Props = {
    title?: string;
    links: { name: string; url: string }[];
    selected?: string;
}

const Navbar = ({title, links, selected}: Props) => {

    links = [
        {name: "Home", url: "/"},
        {name: "Recipe", url: "/recipe"},
        {name: "About-us", url: "/aboutus"},
        {name: "Contact", url: "/contact" },
        {name: "Realisation", url: "/realisation"},
    ];



    return (
        <header>
            <nav className={"navbar fixed w-full z-50 flex "}>
                <ul className={"mr-20 flex gap-5 w-full justify-end"}>
                    {
                        links.map((link) => (
                            <li key={link.name} className={"text-white font-bold text-xl " + (link.name.toLowerCase() === selected ? "underline" : "") }>
                                <Link href={link.url}>{link.name}</Link>
                            </li>
                        ))
                    }

                </ul>

            </nav>
        </header>
    )
}

export default Navbar;