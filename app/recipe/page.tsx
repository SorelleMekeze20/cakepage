"use client";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/heros";

export default function Page() {

    return (
        <div className="page-container">
            <Navbar/>
            <Hero title1={"Recipe!"} title2={"Your destination for the most delightful cake recipes."}/>

            <main className="main-layout">

                <section className="japanaise-shortcake">

                    <h2>
                        <Link href="/recipe/japanaise-shortcake">Japanaise Shortcake</Link>
                    </h2>

                    <Image
                        src="/images/IMG_8437.jpg"
                        alt="Japanaise Shortcake"
                        width={500}
                        height={500}
                    />

                </section>


                <section className="apfelkuchen">

                    <h2>
                        <Link href="/recipe/apfelkuchen">Apfelkuchen</Link>
                    </h2>

                    <Image
                        src="/images/Apfelkuchen-mit-Streusel-08-scaled.webp"
                        alt="Apfelkuchen"
                        width={500}
                        height={500}
                    />

                </section>
            </main>

            <Footer/>
        </div>
    );
}
