import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Heros";


export default function Home() {


    return (

        <div className="page-container">
            <div className="bg-white min-h-screen">
                <Navbar/>
                <Hero/>
                <main className="main-layout bg-gray-100">
                        <div className="flex">
                            <div className="  flex-initial p-10">
                                <h1 className={"text-center text-3xl py-5 "}>  Welcome to Crazy Cakes Your destination for the most delightful cake recipes</h1>
                                <p>At our bakery, we believe that every bite should be a moment of joy. We offer a wide range of delicious pastries, each crafted with love and the finest ingredients.
                                    Whether you're craving a classic pastry or looking to try something new, our creations are designed to satisfy your sweetest desires.
                                    Explore our collection of traditional recipes, innovative flavors, and signature baked goods. From flaky croissants to decadent cakes,
                                    we bring you the best of both the familiar and the exciting.
                                    Join us in celebrating the art of baking, and discover new favorites in every visit. We’re here to make your moments a little sweeter, one pastry at a time.
                                </p>
                                <div className="flex">
                                    <div className=" flex-initial p-10">
                                        <Image
                                            src="/images/1-layer-cake-chocolat-recette-patisserie-empreinte-sucree.jpg"
                                            alt="Birthday Cakes"
                                            width={400}
                                            height={400}
                                        />
                                    </div>
                                    <div className=" flex-initial p-10">
                                        <Image
                                            src="/images/Screenshot 2024-12-10 at 12-08-32 30.jpg"
                                            alt="Birthday Cakes"
                                            width={150}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex-initial p-10">
                                <Image
                                    src="/images/Screenshot 2024-12-10 at 12-08-32 30.jpg"
                                    alt="Birthday Cakes"
                                    width={900}
                                    height={500}
                                />
                            </div>
                        </div>

                </main>

                <Footer/>
            </div>
        </div>

);
}
