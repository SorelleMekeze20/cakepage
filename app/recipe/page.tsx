"use client";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Heros";

export default function Page() {

    return (
        <div className="bg-white min-h-9">
            <Navbar/>
            <Hero />

            <main className="main-layout flex p-10 bg-gray-100">
                <div className={"flex-initial"}>
                    <h2 className={"m-10 text-center"}>
                        Japanaise Shortcake
                    </h2>
                    <div className={"flex-initial"}>
                        <Image
                            src="/images/IMG_8437.jpg"
                            alt="Japanaise Shortcake"
                            width={400}
                            height={500}
                        />
                    </div>
                    <Link href="/recipe/japanaise-shortcake"
                          className={" m-30 text-neutral-50 text-center text-xl bg-blue-950 "}>Japanaise
                        Shortcake</Link>
                </div>
                <div className={"flex-initial"}>
                    <h2 className={" m-10 text-center"}>
                        Apfelkuchen
                    </h2>
                    <div className={"flex justify-center"}>
                        <Image
                            src="/images/Apfelkuchen-mit-Streusel-08-scaled.webp"
                            alt="Apfelkuchen"
                            width={400}
                            height={500}
                        />
                    </div>
                    <Link href="/recipe/apfelkuchen"
                          className={" m-96 text-neutral-50 text-xl bg-blue-950 "}>Apfelkuchen</Link>
                </div>

                <div className={"flex-initial"}>
                    <h2 className={"m-10 text-center"}>
                        birthday-cake
                    </h2>
                    <div className={"flex-initial"}>
                        <Image
                            src="/images/Cake Decorator Photo Shoot.jpeg"
                            alt="birthday-cake"
                            width={300}
                            height={350}
                        />
                    </div>
                    <Link href="/recipe/birthday-cake"className={" m-30 text-neutral-50 text-center text-xl bg-blue-950 "}>birthday-cake</Link>
                </div>

            </main>
            <Footer/>
        </div>
    );
}
