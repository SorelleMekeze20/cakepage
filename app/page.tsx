import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Heros";

export default function Home() {
    return (
        <div className="page-container">
            <div className="bg-white min-h-screen">
                <Navbar selected={"home"}/>
                <Hero title1={"Home"}/>
                <main className="main-layout bg-gray-100 ">
                    <div className="flex flex-col justify-center ">
                        <h1 className="text-center text-3xl py-5">
                            Welcome to Crazy Cakes Your destination for the most delightful cake recipes
                        </h1>
                        <div className={" max-w-6xl justify-center  mx-auto"}>
                            <div className="flex items-center p-10">

                                <div className="flex-1 max-w-xl">

                                    <p>
                                        Welcome to Crazy Cake, where every bite is an explosion of flavor and joy. We
                                        offer a wide range of delicious pastries, all crafted with love and the finest
                                        ingredients. Whether you're a fan of the classics or eager to try something new,
                                        our
                                        creations are designed to satisfy your sweetest cravings. From golden croissants
                                        to
                                        indulgent éclairs and decadent cakes, there's something for every taste.
                                    </p>
                                </div>
                                <div className="flex-initial w-1/3  ml-10">
                                    <Image
                                        src="/images/Screenshot 2024-12-10 at 12-08-32 30.jpg"
                                        alt="Birthday Cakes"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>

                            {/* Second Section */}
                            <div className="flex items-center p-10">
                                <div className="flex-initial w-1/3 mr-10">
                                    <Image className={"justify-center"}
                                           src="/images/1-layer-cake-chocolat-recette-patisserie-empreinte-sucree.jpg"
                                           alt="Birthday Cakes"
                                           width={400}
                                           height={400}
                                    />
                                </div>
                                <div className="flex-1 max-w-xl ">
                                    <p>
                                        Explore our collection of traditional recipes, innovative flavors, and signature
                                        specialties. At Crazy Cake, every visit is a chance to discover both timeless
                                        favorites and exciting new treats. We take pride in celebrating the art of
                                        baking
                                        and bringing you sweeter moments, one cake at a time. Let the magic of our
                                        pastries
                                        delight you, turning every moment into a delicious celebration!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

                <Footer/>
            </div>
        </div>
    );
}
