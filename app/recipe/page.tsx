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
            <Hero title1={"Recipe!"} title2={"Your destination for the most delightful cake recipes."}/>

            <main className="main-layout">

                <section className="japanaise-shortcake">

                    <h2 className={"m-20 text-center" }>
                        <Link href="/recipe/japanaise-shortcake" className={"font-bold text-xl"}>Japanaise Shortcake</Link>
                    </h2>
                  <div className={"flex justify-center"}>
                    <Image
                        src="/images/IMG_8437.jpg"
                        alt="Japanaise Shortcake"
                        width={500}
                        height={500}
                    />
                  </div>
                </section>


                <section className="apfelkuchen">

                    <h2 className={"m-20 text-center"}>
                        <Link href="/recipe/apfelkuchen" className={"font-bold text-xl"}>Apfelkuchen</Link>
                    </h2>
                   <div className={"flex justify-center"}>
                     <Image
                        src="/images/Apfelkuchen-mit-Streusel-08-scaled.webp"
                        alt="Apfelkuchen"
                        width={500}
                        height={500}
                     />
                   </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
