"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Ingredients from "@/app/components/Ingredients";
import Preparation from "@/app/components/Preparation";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Heros";
import Checkbox from "@/app/components/Checkbox";

const steps = [
    "Preheat your oven to 170°C (340°F). Grease and line a 20cm (8-inch) round cake pan with parchment paper.",
    "In a mixing bowl, whisk the eggs and sugar together until the mixture becomes thick and pale, about 5 minutes. Use an electric mixer for best results.",
    "Sift in the cake flour and gently fold using a spatula until just combined. Be careful not to deflate the batter.",
    "Pour the batter into the prepared cake pan and smooth the top with a spatula.",
    "Bake in the preheated oven for about 25-30 minutes, or until a toothpick inserted into the center comes out clean."
];
const ingredients = [
    "200g cake flour (or all-purpose flour)",
    "100g granulated sugar",
    "3 large eggs, room temperature",
    "200ml heavy whipping cream",
    "Fresh strawberries, hulled and sliced",
    "1 tablespoon of vanilla extract (optional)",
    "Powdered sugar for dusting (optional)"
];
export default function Page() {

    return (
        <div className="page-container">
            <Navbar selected={"recipe"}/>

            <Hero />
            <main className="main-layout bg-gray-100 ">
                <section className="japanase-shortcake p-10">
                    <div className="flex ">
                        <div className="flex-initial">
                            <h2 className={"text-3xl"}>Japanese Shortcake Recipe</h2>
                            <p>
                                Discover the recipe for Japanese Shortcake, a delicious soft cake with fresh
                                strawberries and whipped cream. Perfect for any occasion!
                            </p>

                            <Ingredients title={"Ingredients"} ingredients={ingredients}/>
                            <Preparation title={"Preparation Stage"} steps={steps}/>


                            <p className={"pt-5"}>
                                Enjoy your Japanese Shortcake with a cup of tea or coffee! This cake is best enjoyed
                                fresh but can be stored in the refrigerator for up to 2 days.
                            </p>

                        </div>

                        <div className="flex-initial w-fit pl-24 content-center">
                            <Image
                                className={""}
                                src="/images/IMG_8437.jpg"
                                alt="Japanaise Shortcake"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                </section>

            </main>

            <Footer/>
        </div>
    );
}
