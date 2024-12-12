"use client";
import Link from 'next/link';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Heros";

type RecipeProps = {
    title: string;
    imagePath: string;
    link: string;
}

const Recipe = ({title, imagePath, link}: RecipeProps) => {
    return <div className={"flex flex-col items-end hover:scale-105 transition"}>

        <div className={"h-full"}>
            <img
                src={imagePath}
                alt={title}
                width={384}
                className={"h-full object-cover"}
            />
        </div>

        <Link href={link} className={"w-fit m-30 text-neutral-50 text-center text-xl bg-blue-950 p-2"}>
            {title}
        </Link>

    </div>;
}

export default function Page() {

    return (
        <div className="bg-white min-h-9">
            <Navbar selected={"recipe"}/>

            <Hero title1={"RECIPE"} title2={"Test 2"}/>

            <main className="main-layout flex p-10 gap-10 justify-center">

                <Recipe imagePath={"/images/IMG_8437.jpg"} title={"Japanese Shortcake"}
                        link={"/recipe/japanese-shortcake"}/>

                <Recipe imagePath={"/images/Apfelkuchen-mit-Streusel-08-scaled.webp"} title={"Apfelkuchen"}
                        link={"/recipe/apfelkuchen"}/>

                <Recipe imagePath={"/images/Cake Decorator Photo Shoot.jpeg"} title={"Birthday Cake"}
                        link={"/recipe/birthday-cake"}/>


            </main>
            <Footer/>
        </div>
    );
}