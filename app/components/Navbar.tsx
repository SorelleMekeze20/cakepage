import Link from "next/link";

type Props = {

    // TODO: remove title
    title?: string;

    links?: { name: string; url: string }[];
}

const Navbar = ({title, links}: Props) => {

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

                    {links ? links.map((link) => (
                        <li key={link.name} className={"text-white font-bold text-xl "}>
                            <Link href={link.url}>{link.name}</Link>
                        </li>
                    )) : null}

                </ul>

            </nav>
        </header>
    )
}

export default Navbar;