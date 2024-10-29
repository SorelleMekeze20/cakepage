"use client";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/app/components/Navbar";

export default function Page() {
    return (
        <div>
            <Navbar title={"Recipe"}/>

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


        </div>
    );
}
