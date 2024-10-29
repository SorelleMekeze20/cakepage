import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function Home() {
    const links = [
        {name: "Recipe", url: "/recipe"},
        // Ajoutez d'autres liens ici si nécessaire
    ];
    return (
        <div>
            <Navbar links={links}/>


            <main>
                <h1>crazy cake page!</h1>
                <div className={"image"}>
                    <Image
                        src="/images/birthday-cakes.jpeg"
                        alt="Birthday Cakes"
                        width={1000}
                        height={1000}
                    />

                </div>

            </main>

        </div>
    );
}
