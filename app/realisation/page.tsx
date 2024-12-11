import Navbar from "@/app/components/Navbar";

import Hero from "@/app/components/Heros";
import Footer from "@/app/components/Footer";

export default function realisation() {
    return (
        <div className="realisation">
            <Navbar/>
            <Hero title1={"Realisation"} />
            <main className="main-layout p-10  bg-gray-100">
                <h1 className={"text-center text-3xl py-5 "}>Our Creations</h1>
                <p>
                    At our bakery, each creation is a masterpiece made with love and attention to detail. We take pride
                    in crafting cakes and pastries that not only taste incredible but are also visually stunning. Below
                    are some of our most memorable projects:

                        <li>Custom Wedding Cakes: We’ve had the honor of creating bespoke wedding cakes that perfectly
                            reflect the
                            couple’s style and personality. From elegant tiered cakes to modern designs, each one is as
                            unique as the couple themselves.
                        </li>
                        <li>Birthday Cake Designs: Whether it’s a fun and colorful theme for kids or a sophisticated
                            design
                            for adults, we’ve created birthday cakes that have made celebrations unforgettable.
                        </li>
                        <li> Seasonal Specialties: From Christmas logs to Valentine’s Day treats, we love bringing
                            festive joy through our seasonal cakes and pastries.
                        </li>
                        <li>Corporate Events & Collaborations: We've worked with local businesses and event organizers
                            to provide custom cakes for corporate events, grand openings, and holiday parties.
                        </li>
                </p>
                <p>
                    Explore some of our proudest achievements in the gallery below, and get inspired for your
                    next special occasion. If you have a vision for your event, let us bring it to life with a
                    custom creation made just for you!
                </p>


            </main>
            <Footer/>
        </div>
    );
}
