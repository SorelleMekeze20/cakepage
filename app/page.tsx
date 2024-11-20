import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Heros";

export default function Home() {


    return (
        <div className="bg-white min-h-9">
            <Navbar/>
            <Hero title1={"Welcome to Crazy Cakes!"} title2={"Your destination for the most delightful cake recipes."}/>

            <main className={"text-center p-14"}>

                <div className=" flex justify-center">
                    <Image
                        src="/images/birthday-cakes.jpeg"
                        alt="Birthday Cakes"
                        width={500}
                        height={500}
                    />
                </div>
            </main>
            <Footer/>
        </div>
    );
}
