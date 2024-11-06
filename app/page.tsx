import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/heros";

export default function Home() {


    return (
        <div className="page-container">
            <Navbar/>
            <Hero title1={"Welcome to Crazy Cakes!"} title2={"Your destination for the most delightful cake recipes."}/>

            <main>

                <div className="image">
                    <Image
                        src="/images/birthday-cakes.jpeg"
                        alt="Birthday Cakes"
                        width={900}
                        height={500}
                    />
                </div>
            </main>
            <Footer/>
        </div>
    );
}
