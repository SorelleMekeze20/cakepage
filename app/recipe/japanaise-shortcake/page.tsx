"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Ingredients from "@/app/components/Ingredients";
import Preparation from "@/app/components/Preparation";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/heros";
import Checkbox from "@/app/components/checkbox";

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
            <Navbar/>
            <Hero title1={"Welcome to Crazy Cakes!"} title2={"Your destination for the most delightful cake recipes."}/>
            <main className="main-layout">
                <section className="japanase-shortcake">
                    <div className="content">
                        <div className="recipe-text">
                            <h2>Japanaise Shortcake Recipe</h2>
                            <p>
                                Discover the recipe for Japanaise Shortcake, a delicious soft cake with fresh
                                strawberries and whipped cream. Perfect for any occasion!
                            </p>

                            <Ingredients title={"Ingredients"} ingredients={ingredients}/>
                            <Preparation title={"Preparation Stage"} steps={steps}/>


                            <p>
                                Enjoy your Japanaise Shortcake with a cup of tea or coffee! This cake is best enjoyed
                                fresh but can be stored in the refrigerator for up to 2 days.
                            </p>
                        </div>

                        <div className="image">
                            <Image
                                src="/images/IMG_8437.jpg"
                                alt="Japanaise Shortcake"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <Checkbox/>
                </section>

            </main>

            <Footer/>
        </div>
    );
}
